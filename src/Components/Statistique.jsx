import React from "react";
import Footer from "../Shared/Footer";
import Navbar from "../Shared/Navbar";
import { Charte } from "./Charte";
import { Charte1 } from "./Charte1";
import { Charte2 } from "./Charte2";
import video3 from "/src/assets/video3.mp4"
import stat from "/src/assets/stat.jpg";
const Statistique = () => {
  return (
    <div className="statistique">
      <Navbar />

      <div className="sta">
        <h1>Statistiques du marché de ​ Mercedes-Benz </h1>
        <div className="sta1">
          <div className="st">
            <span>Prix moyen</span>
            <span>32800DT</span>
            <progress value="72" max={100}></progress>
          </div>
          <div className="st">
            <span>Kilométrage moyen</span>

            <span>200000KM</span>
            <progress value="50" max={100}></progress>
          </div>
          <div className="st">
            <span>Âge moyen</span>
            <span>9ANS</span>
            <progress value="30" max={100}></progress>
          </div>
        </div>
      </div>

      <div className="charti">
        <Charte />
        <Charte1 />
        <Charte2 />
      </div>
<div className="stati">
      <div className="raportt">
        <div className="r1">
          <h1>
            Mercedes-Benz. Un bénéfice net en hausse grâce à de meilleures
            ventes
          </h1>
          <p>
            Malgré une baisse des ventes de voitures, Mercedes-Benz a enregistré
            un chiffre d'affaires de 34,9 milliards d'euros (+6 %) et un
            bénéfice net de 3,6 milliards d'euros, grâce à une focalisation sur
            les véhicules haut de gamme et électriques, une discipline de coûts
            et des cessions d'activités de vente.
          </p>

            <h1>Hausse des ventes d'électriques et modèles haut de gamme</h1>
      <p>
        Mercedes-Benz a vendu 487 000 voitures neuves au premier trimestre 2022,
        une baisse de 10 % par rapport à 2021, mais compensée par une
        progression des ventes de véhicules haut de gamme et de modèles hybrides
        et électriques.
      </p>

      <h1>Protéger les chaînes d'approvisionnement</h1>
      <p>
        Mercedes-Benz a suspendu l'exportation de voitures et de pièces
        détachées vers la Russie, interrompu la fabrication locale et adapté ses
        plans de travail dans certaines usines pour éviter les temps d'arrêt,
        tout en maintenant ses objectifs financiers pour l'année.
      </p>
        </div>  
        <div  id="boxi"><img src={stat} alt="" /></div> 
      </div>
   
    <div id="boxi"  className="statimg" >  <video  controls muted autoPlay={true} src={video3}></video></div>
   
    </div>
      <Footer />
    </div>
  );
};

export default Statistique;
