function startConnect() {                                                       //Fonction appelé lors d'appui sur "connect" de la page web
    clientID = "clientID-" + parseInt(Math.random() * 100);                     //Générer un ID aléatoire
    host = document.getElementById("host").value;                               //Récupérer le nom d'hôte et l'adresse IP et le numéro de port du formulaire
    port = document.getElementById("port").value;
    document.getElementById("messages").innerHTML += '<span>Connecting to: ' + host + ' on port: ' + port + '</span><br/>';         //Message de visualisation de l'host dans la section scrollable (prédifini sur "test.mosquitto.org") et du nom de port (prédifini sur "8080")
    document.getElementById("messages").innerHTML += '<span>Using the following client value: ' + clientID + '</span><br/>';        //Message de visualisation du numéro de client ID

    client = new Paho.MQTT.Client(host, Number(port), clientID);                //Initialisation du client
    client.onConnectionLost = onConnectionLost;                                 //Appel de la fonction onConnectionLost() lors de perte de connection
    client.onMessageArrived = onMessageArrived;                                 //Appel de la fonction onMessageArrived() lorsqu'un message arrive
    client.connect({                                                            //Connection au client
        onSuccess: onConnect,                                                   //Si connection est un succès alors appel de la fonction onConnect()
    });
}

function onConnect() {                                                          //Fonction appelé lors du succès de la connection
    topic = document.getElementById("topic").value;                             //Récupération de donnée par l'id d'un élément et affectation à topic (prédifini à "/yncrea/grpj05/#")
    document.getElementById("messages").innerHTML += '<span>Subscribing to: ' + topic + '</span><br/>';       //Affectation d'un ID "messages" message de visualisation "Subscribing to: " avec la valeur du topic (/yncrea/grpj05/#) pour utilisation dans le .html
    client.subscribe(topic);                                                    //Subscribe du client au topic
}

function onConnectionLost(responseObject) {                                     //Fonction appelé en cas de perte de connection
    console.log("onConnectionLost: Connection Lost");                           //Affichage dans la console du navigateur du message d'erreur de connection perdue
    if (responseObject.errorCode !== 0) {                                       //Si le code erreur existe, affichage du code erreur dans la console
        console.log("onConnectionLost: " + responseObject.errorMessage);
    }
}

function onMessageArrived(message) {                                            //Fonction appelé lorsqu'un message arrive
    document.getElementById("nbr").innerHTML = parseInt(message.payloadString); //Affectation d'un ID "nbr" au nombre dans le message(avec une conversion Str to Int) pour utilisation dans le .html
    console.log("onMessageArrived: " + message.payloadString);                  //Affichage dans la console du navigateur du message arrivé
    document.getElementById("messages").innerHTML += '<span>Le rythme cardiaque est de ' + message.payloadString + '</span><br/>';      //Affectation d'un ID "messages" pour utilisation dans le .html
    updateScroll();                                                             //Appel de la fonction updateScroll()
}

function startDisconnect() {                                                    //Fonction appelé lors de l'appui sur "disconnect"
    client.disconnect();                                                        //Déconnection du client
    document.getElementById("messages").innerHTML += '<span>Disconnected</span><br/>';      //Affectation d'un ID "messages"
    updateScroll();                                                             //Appel de la fonction updateScroll()
}

function updateScroll() {                                                       //Fonction pour 'activer' le scroll
    var element = document.getElementById("messages");
    element.scrollTop = element.scrollHeight;
}
