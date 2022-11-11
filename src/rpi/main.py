import serial
import requests
import datetime
import json

baseURL = "https://p2-reparaciones-production.up.railway.app"
loginURL = baseURL + "/api/auth/login"
getCardsURL = baseURL + "/api/card/"
getAllUsersURL = baseURL + "/api/users/"
postRegisterURL = baseURL + "/api/register/"
putRegisterURL = baseURL + "/api/register/"
credentials = {"email":"josephadmin@gmail.com","password":"123456789"}

login = requests.post(loginURL, json=credentials)
arduino = serial.Serial("/dev/ttyUSB0",9600)

text = login.text
begin = text.index(":\"") + 2
end = len(text) - 2
token = text[begin:end]
myDict = {}

# FUNCIONES DE BAJO NIVEL:

def postRegister(actualUserId):
    actualTime = datetime.datetime.now().strftime("%Y-%m-%dT%H:%M:%SZ")
    response = requests.post(postRegisterURL, headers= {"token":token}, json={"employee":actualUserId,"incomingTime":actualTime}).json()
    global globalID
    globalID = response["_id"]
    
def putRegister():
    actualTime = datetime.datetime.now().strftime("%Y-%m-%dT%H:%M:%SZ")
    res = requests.put(putRegisterURL + globalID, headers= {"token":token}, json={"outcomingTime":actualTime})

# FUNCIONES DE MEDIO NIVEL:
def correctAccesCode():
    actualUserId = user["_id"]
    outcomingString = ""
    try:
        if myDict[actualUserId]:
            postRegister(actualUserId)
            myDict[actualUserId] = False
            outcomingString = "1" + user["name"]
        else:
            putRegister()
            myDict[actualUserId] = True
            outcomingString = "2" + user["name"]
    except:
        postRegister(actualUserId)
        myDict[actualUserId] = False
        outcomingString = "1" + user["name"]
    arduino.write(outcomingString.encode("utf-8"))

def sendError():
    arduino.write("0".encode("utf-8"))

while True:
    readAccesCode = arduino.readline().decode("utf-8").rstrip()
    users = requests.get(getAllUsersURL, headers= {"token":token}).json()
    index = 0
    for user in users:
        index = index + 1
        try:
            if user["accesCode"] == readAccesCode:
                correctAccesCode()
                break
            if index == len(users) - 1:
                sendError()
        except:
            if index == len(users) - 1:
                sendError()
            continue