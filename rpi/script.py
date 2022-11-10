from pymongo import MongoClient
import serial
import datetime

client = MongoClient('mongodb://localhost:27017/',username="admin",password="123")
arduino = serial.Serial("/dev/ttyUSB0",9600)

db = client["mydatabase"]
cards = db["cards"]
users = db["users"]
registers = db["registers"]
myDict = {}

while True:
        readAccesCode = arduino.readline().decode("utf-8").rstrip()
        exist = cards.find_one({"accesCode":readAccesCode})
        if exist == None:
                #Manda por puerto serie un aviso de que no se ha encontrado la tarjeta detectada
                arduino.write('0'.encode("utf-8"))
        else:
                outcomingString = ""
                #Permite pasar a la persona
                user = users.find_one({"accesCode":exist["_id"]})
                try:
                        if myDict[user["_id"]]:
                                date = registers.insert_one({"employee":user["_id"],"incomingTime":datetime.datetime.now()})
                                myDict[user["_id"]] = False
                                outcomingString = "1" + user["name"]
                        else:
                                registers.update_one({"_id":date.inserted_id},{"$set":{"outcomingTime":datetime.datetime.now()}})
                                myDict[user["_id"]] = True
                                outcomingString = "2" + user["name"]
                except:
                        myDict[user["_id"]] = False
                        outcomingString = "1" + user["name"]
                        date = registers.insert_one({"employee":user["_id"],"incomingTime":datetime.datetime.now()})
                arduino.write(outcomingString.encode("utf-8"))