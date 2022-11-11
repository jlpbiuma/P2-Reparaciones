//RST          D9
//SDA(SS)      D10
//MOSI         D11
//MISO         D12
//SCK          D13

#include <SPI.h>
#include <MFRC522.h>
#include <Wire.h> 
#include <LiquidCrystal_I2C.h>

const int RST_PIN = 9;        // Pin 9 para el reset del RC522
const int SS_PIN = 10;        // Pin 10 para el SS (SDA) del RC522
MFRC522 mfrc522(SS_PIN, RST_PIN);   // Crear instancia del MFRC522
LiquidCrystal_I2C lcd(0x3F, 16, 2); // Inicia el LCD en la dirección 0x27, con 16 caracteres y 2 líneas

void setup() {
  Serial.begin(9600); // Iniciar serial
  SPI.begin();        // Iniciar SPI
  mfrc522.PCD_Init(); // Iniciar MFRC522
  lcd.init();
  lcd.backlight();
  lcd.setCursor(0, 0);
}

void loop() {
  printLCD("Acerque","la tarjeta...");
  // Detectar tarjeta
  if (mfrc522.PICC_IsNewCardPresent())
  {
    printLCD("Tarjeta","detectada!");
    //Seleccionamos una tarjeta
    if (mfrc522.PICC_ReadCardSerial())
    {
      printLCD("Leyendo","tarjeta...");
      mfrc522.PICC_HaltA();
      char str[32] = "";
      array_to_string(mfrc522.uid.uidByte, 4, str); //Insert (byte array, length, char array for output)
      Serial.println(str);
      while (Serial.available() == 0){}
      String incomingString = Serial.readString();
      if (incomingString == "0")
      {
        printLCD("Usuario no", "valido!");
      }
      else
      {
        String saludo = String(incomingString.charAt(0));
        incomingString = incomingString.substring(1);
        String estado = "";
        if (saludo == "1")
        {
          estado = "Bienvenid@";
        }
        else if (saludo == "2")
        {
          estado = "Hasta luego";
        }
        printLCD(estado, incomingString);
      }
      delay(2500);
      lcd.clear();
    }
  }
}

void printLCD(String firstLine, String secondLine)
{
  lcd.clear();
  lcd.setCursor(0,0);
  lcd.print(firstLine);
  lcd.setCursor(0, 1);
  lcd.print(secondLine);
}


void array_to_string(byte array[], unsigned int len, char buffer[])
{
   for (unsigned int i = 0; i < len; i++)
   {
      byte nib1 = (array[i] >> 4) & 0x0F;
      byte nib2 = (array[i] >> 0) & 0x0F;
      buffer[i*2+0] = nib1  < 0xA ? '0' + nib1  : 'A' + nib1  - 0xA;
      buffer[i*2+1] = nib2  < 0xA ? '0' + nib2  : 'A' + nib2  - 0xA;
   }
   buffer[len*2] = '\0';
}