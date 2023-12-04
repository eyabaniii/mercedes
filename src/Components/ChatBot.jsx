
import logo from "/src/assets/logo.png"
import { useState } from "react";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";

const ChatBot=()=> {

  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const day = date.getDay();
  const month = date.getMonth();
  const year = date.getFullYear();
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const [time, setTime] = useState(`${hours}:${minutes}:${seconds}`);
  const [dateTime, setDateTime] = useState(
    `${days[day]}, ${day} ${months[month]} ${year}`
  );
  const checkStatus = (e) => {
    let isActive = true;
    if (dateTime === "Thursday, 20 April 2022") {
      //if the dateTime is Thursday, 20 April 2022, the bot will be inactive
      if (dateTime === "Thursday, Aug 13 2022") {
        //if the dateTime is Thursday, 13 Aug 2022, the bot will be inactive
        isActive = false;
      }
      const status = document.querySelector(".status"); // selecting the status class
      if (isActive === true) {
        //if the bot is active
        status.innerHTML = "Active";
        status.style.color = "green";
      } else {
        status.innerHTML = "Inactive";
        status.style.color = "red";
        const status = document.querySelector(".status");
        // selecting the status class
        if (isActive === true) {
          //if the bot is active
          status.innerHTML = "Active";
          status.style.color = "green";
        } else {
          status.innerHTML = "Not Active";
          status.style.color = "red";
        }
      }
    }
  };
  const handleInput = () => {
    const botMessage = document.querySelector("#message1");

    const humanMessage = document.querySelector("#message2");

    let badwords = ["mauvais|stupide|inutile|fou|absurdité"];
    let words = new RegExp(badwords);

    if (words.test(document.querySelector("#input").value)) {
      botMessage.innerHTML = "Au Clavier...";

      setTimeout(() => {
        botMessage.innerHTML = "Veuillez ne pas utiliser de mauvais mots.";
        document.querySelector("#input").value = "";
      }, 2000);
    }
    let welcome = [
      "salut|bonjour|salutations|coucou|hey|yo|quoi de neuf|comment ça va|bon matin|bon après-midi|bonsoir",
    ];

    let words2 = new RegExp(welcome);
    if (words2.test(document.querySelector("#input").value)) {
      const status = document.querySelector(".status");
      botMessage.innerHTML = "Au Clavier...";

      setTimeout(() => {
        botMessage.innerHTML = "Bonjour, comment allez-vous aujourd'hui? ";
        status.innerHTML = "Active";
        status.style.color = "green";
        document.querySelector("#input").value = "";
      }, 2000);
    }
    let nom = [
      "what's your name"
    ];

    let words1 = new RegExp(nom);
    if (words1.test(document.querySelector("#input").value)) {
      const status = document.querySelector(".status");
      botMessage.innerHTML = "Au Clavier...";

      setTimeout(() => {
        botMessage.innerHTML = "je m'appelle Mercedes-Benz ";
        status.innerHTML = "Active";
        status.style.color = "green";
        document.querySelector("#input").value = "";
      }, 2000);
    }
    let bye = [
      "Au revoir|Adieu|À plus tard|À bientôt",
    ];

    let words3 = new RegExp(bye);
    if (words3.test(document.querySelector("#input").value)) {
      const status = document.querySelector(".status");
      botMessage.innerHTML = "Au Clavier...";
      setTimeout(() => {
        botMessage.innerHTML = "Au revoir, passez une bonne journée.";
        document.querySelector("#input").value = "";
      }, 2000);
      setTimeout(() => {
        status.innerHTML = "Not active";
        status.style.color = "red";
      }, 5000);
    }

    let thanks = ['Merci|merci|je vous remercie|merci beaucoup|merci infiniment.']
    let words4 = new RegExp(thanks);
    if(words4.test(document.querySelector('#input').value)){
      botMessage.innerHTML = 'Au Clavier...';
      setTimeout(() => {
        botMessage.innerHTML = "De rien";
        document.querySelector("#input").value = "";
      }, 2000);
    }
    let how = [
      "Comment allez-vous?|Comment vas-tu?|Comment ça va aujourd'hui?|Comment allez-vous aujourd'hui?|Comment vas-tu?|Comment ça va?",
    ];
    let words5 = new RegExp(how);
    if(words5.test(document.querySelector('#input').value)){
      const status = document.querySelector(".status");
      botMessage.innerHTML = 'Au Clavier...';
      setTimeout(() => {
        botMessage.innerHTML = "Je vais bien, merci.";
        status.innerHTML = "Active";
        status.style.color = "green";
        document.querySelector("#input").value = "";
      }, 2000);
    
    }

    let classeA= [
      "Quelles sont les caractéristiques de la Mercedes-Benz classe A?",
    ];
    let words6 = new RegExp(classeA);
    if(words6.test(document.querySelector('#input').value)){
      const status = document.querySelector(".status");
      botMessage.innerHTML = 'Au Clavier...';
      setTimeout(() => {
        botMessage.innerHTML ="La voiture  est une compacte avec une garantie de 2 ans, 5 places et 5 portes, une motorisation de 4 cylindres essence de 1332 cm³ et une puissance fiscale de 7 CV, ainsi qu'une transmission automatique à 7 rapports et une traction; elle mesure 4419 mm de longueur, 1907 mm de largeur et 1423 mm de hauteur, a un volume de coffre de 370 L, une vitesse maximale de 215 km/h et une consommation mixte de 5,4 L/100 km; elle dispose également d'équipements de sécurité tels que l'ABS, les airbags frontaux, latéraux, rideaux et genoux conducteur, l'ESP, l'ASR, l'AFU, le BAS, le détecteur de fatigue et les fixations ISOFIX, et d'équipements intérieurs tels que l'autoradio avec commandes au volant, la connectivité USB-C, Apple Carplay, Android Auto, Bluetooth et commande vocale, l'écran tactile de 10,1 pouces, les sièges sport, le volant en cuir multifonction, les phares full LED, la climatisation automatique, le régulateur de vitesse TEMPOMAT et les vitres électriques avant/arrière.";
        status.innerHTML = "Active";
        status.style.color = "green";
        document.querySelector("#input").value = "";
      }, 2000);
    }

    let classeC= [
      "Quelles sont les caractéristiques de la  Mercedes-Benz classe C?",
    ];
    let words7 = new RegExp(classeC);
    if(words7.test(document.querySelector('#input').value)){
      const status = document.querySelector(".status");
      botMessage.innerHTML = 'Au Clavier...';
      setTimeout(() => {
        botMessage.innerHTML ="La voiture est une berline avec 4 portes et 5 places, disponible en essence ou en hybride léger, avec une puissance de 170 chevaux, une cylindrée de 1496 cm³ et une consommation mixte de 6.2 L/100 km ; elle est équipée de nombreux dispositifs de sécurité tels que des airbags, un système ABS et ESP, ainsi que d'équipements intérieurs tels qu'un écran tactile de 11.9 pouces, des sièges en similicuir électriques et une climatisation automatique bizone.";
        status.innerHTML = "Active";
        status.style.color = "green";
        document.querySelector("#input").value = "";
      }, 2000);
    }
    let classeE= [
      "Quelles sont les caractéristiques de la  Mercedes-Benz classe E?",
    ];
    let words8 = new RegExp(classeE);
    if(words7.test(document.querySelector('#input').value)){
      const status = document.querySelector(".status");
      botMessage.innerHTML = 'Au Clavier...';
      setTimeout(() => {
        botMessage.innerHTML ="La voiture  est une berline avec une garantie de 2 ans, 5 places et 4 portes, avec un moteur essence de 4 cylindres de 1497 cm³ produisant une puissance de 156 ch et un couple de 250 nm à 1200 tr/min, une boîte de transmission automatique à 9 rapports et une propulsion. Ses dimensions sont de 4935 mm de longueur, 1852 mm de largeur et 1460 mm de hauteur, avec un volume de coffre de 540 L. Il atteint une vitesse maximale de 228 km/h et une accélération de 0 à 100 km/h en 8,9 s, avec une consommation mixte de 8,5 L/100 km. Il est équipé d'ABS, d'airbags frontaux, latéraux et rideaux, d'ESP, d'Attention Assist, de connectivité USB, Apple Carplay, Android Auto, Bluetooth et commande vocale, d'un écran, de finitions intérieures en alu poli, de lumières d'ambiance LED, d'une sellerie en Dinamica et similicuir, de sièges avec réglage lombaire, d'un toit ouvrant panoramique, d'un volant en cuir multifonctions et d'une aide au stationnement avec radars de recul et avant et caméra de recul, entre autres fonctionnalités";
        status.innerHTML = "Active";
        status.style.color = "green";
        document.querySelector("#input").value = "";
      }, 2000);
    }
    let classeS= [
      "Quelles sont les caractéristiques de la  Mercedes-Benz classe S?",
    ];
    let words9 = new RegExp(classeS);
    if(words7.test(document.querySelector('#input').value)){
      const status = document.querySelector(".status");
      botMessage.innerHTML = 'Au Clavier...';
      setTimeout(() => {
        botMessage.innerHTML ="La voiture est une berline avec 5 places et 4 portes, une motorisation essence/hybride léger de 6 cylindres, une transmission automatique intégrale à 9 rapports, une consommation mixte de 7,8 L/100km, des équipements de sécurité tels que l'ABS, les airbags, l'anti-patinage, l'assistance au freinage et au maintien dans la voie, ainsi que des équipements intérieurs tels que l'autoradio MBUX, la connectivité USB/Bluetooth/Android Auto/Apple CarPlay, les sièges électriques/chauffants/ventilés, la climatisation automatique 4 zones, les rétroviseurs électriques/rabattables/dégivrants/éclairés à LED, les jantes en aluminium de 19 pouces, les feux Full LED et une suspension pneumatique Airmatic.";
        status.innerHTML = "Active";
        status.style.color = "green";
        document.querySelector("#input").value = "";
      }, 2000);
    }
























    humanMessage.innerHTML = document.querySelector('#input').value;
  };
  return (
    <div className="allchat">
      <Navbar/>
    <div className="ChatBot" onLoad={checkStatus}>
      <div className="wrapper">
        <div className="content">
          <div className="header">
            <div className="img">
              <img src={logo} alt="" />
            </div>
            <div className="right">
              <div className="name">Mercedes-Benz</div>
              <div className="status">Active</div>
            </div>
          </div>
          <div className="main">
            <div className="main_content">
              <div className="messages">
                <div className="bot-message" id="message1"></div>
                <div className="human-message" id="message2"></div>
              </div>
            </div>
          </div>
          <div className="bottom">
            <div className="btm">
              <div className="input">
                <input type="text"   id="input" placeholder="Entrer votre messsage" />
              </div>
              <div className="btn">
                <button onClick ={ handleInput }>
                  <i className="fas fa-paper-plane"></i>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-send-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z" />
                  </svg>{" "}
                  envoyer
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  );
}

export default ChatBot;
