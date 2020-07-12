#Importation des modules
import paho.mqtt.client as mqtt_client
import json

# Configuration
MQTT_BROKER = "test.mosquitto.org"      #Host
KEEP_ALIVE  = 45                        #Interval en seconde

def on_connect( client, userdata, flags, rc ): #Fonction lors la connection 
    print( "Connexion: code retour = %d" % rc )
    print( "Connexion: Statut = %s" % ("OK" if rc==0 else "échec") )

def on_message( client, userdata, message ):
    message=int(message.payload)
    print("Le rythme cardiaque est de :",message)
    if (message)>=80:
       client.publish("/yncrea/grpj05/AlerteHeartRate",json.dumps("Alerte rythme anormal"))
client = mqtt_client.Client( client_id="client007" )

# Assignation des fonctions de rappel
client.on_message = on_message
client.on_connect = on_connect

# Connexion broker
client.connect( host="test.mosquitto.org",port=1883, keepalive=KEEP_ALIVE )
client.subscribe( "/yncrea/grpj05/HeartRateNbr")

# Envoi des messages
client.loop_forever()