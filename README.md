©HeartCare V1.0 2020

----Auteurs----
Cappe_Thomas, 
Cuirot_Jean, 
Desclodures_Eliott,
Lourdin_Antoine,
Paturel_Ronan,
Robyns_Jonathan

----INTRODUCTION----

Application créé par le groupe du jeudi n°5

L'application Heart-Care a été créé pour la visualisation en direct du rythme cardiaque d'une personne sur un portable ou un ordinateur via un lien internet. L'installation électronique coté patient est d'un capteur de pulsation connecté à une raspberry via un programme python "HeartRate.py".
L'application HeartRate.py permet d'envoyer le nombre de pulsation au serveur test.mosquitto.org
Ensuite, côté docteur nous avons également une raspberry connectée a un écran, via l'application "ProtectHeart.py". 
L'application "ProtectHeart.py" permet de recevoir les données du patient, puis de  visualiser le nombre en direct de pulsation, et elle dispose d'une fonction d'alerte en cas de rythme anormal (lors d'un rythme anormal une alerte est envoyée sur la raspberry du patient via test.mosquitto.org). Lorsque le message est reçu une alerte est envoyée au patient et au docteur.

Une page web est aussi disponible, elle permet de visualiser les messages d'alertes et l'historique des pulsations via un graphique. 


----UTILISATION----

//!\\ Connexion internet obligatoire //!\\

1.    Lancer le fichier HeartRate.py sur une Raspberry 
Deux moyens de visualisation: 
Methode 1:
2.1   Lancer le fichier ProtectHeart.py sur une Raspberry différente
Methode 2:
2.2.1 Ouvrer le dossier Heart-Care_WEB puis index.html pour visualiser sur un navigateur web
2.2.2 Appuyer sur 'Connect' lorsque le bouton passe au vert vous êtes connecté !


-----SOURCES----

Sources pour le codage python et protocole MQTT

1. Pour l'apprentissage du protocole MQTT 
Lien.         https://www.framboise314.fr/utiliser-le-protocole-mqtt-pour-communiquer-des-donnees-entre-2-raspberry-pi/
Lien GitHub:  https://github.com/mchobby/la-maison-pythonic
@mchobby

Sources pour le codage web: 

Le site web a été créé avec l'aide de plusieurs site:
1. Pour la réception des messages du serveur test.mosquitto.org
Lien GitHub   https://github.com/jpmens/simple-mqtt-websocket-example 
@JP Mens

2. Pour la création du graphique en direct:
Lien GitHub:  https://github.com/plotly/plotly.js/   
Lien Youtube: https://www.youtube.com/watch?v=2-tnkzG0sKU&feature=youtu.be
@archmoj

3. Eléments html 
Lien :        https://react-native-elements.github.io/react-native-elements/docs/getting_started.html

4. Pour la création de l'affichage de l'heure
Lien openclassrooms: https://openclassrooms.com/forum/sujet/afficher-l-heure-en-direct-sur-mon-site-61583

