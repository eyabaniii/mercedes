import React from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../Shared/Footer";

import Navbar from "../Shared/Navbar";
import Afficher from "./Afficher";



const Acceuil = () => {
  let navigate=useNavigate()
  return (
    <div className="acceuil">
     
      <div className="acceuil1">
        
          <Navbar />
      <div className="des">
        <h1>
          Bienvenue dans le <br/>« Magical Garage »
        </h1>
        <p>Découvrez nos dernières technologies</p>
        <button className="sh"   onClick={()=>navigate("/Collection")} >Voir Collection</button>
      </div>
  
      </div>
        <Afficher/>
      <Footer/>
   
    
    </div>
  );
};

export default Acceuil;
