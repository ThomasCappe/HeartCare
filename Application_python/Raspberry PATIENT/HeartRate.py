#Importation des modules 
import paho.mqtt.client as mqtt_client
import paho.mqtt.client as mqtt
import time
from random import *
import json

next_reading = time.time()              #Accés au temps réel
client = mqtt.Client()                  #Configuration du client
client.connect("test.mosquitto.org")    # -->Host
client.loop_start()                     # -->Connection

try:
    while True:
        valeurint=randint(65,80)        #Affectation d'un valeur aléatoire 
        valeurstr=str(valeurint)        #int to str
        message=(valeurint)             #Affectation du message a envoyer
        client.publish("/yncrea/grpj05/HeartRateNbr",json.dumps(message)) #Publication du message au format json sur le topic "/yncrea/grpj05/H$
        next_reading += 2               #Temps de renvoi du message
        sleep_time = next_reading-time.time()    
        if sleep_time > 0:
            time.sleep(sleep_time)
except KeyboardInterrupt:
    pass



