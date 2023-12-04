import React from "react";
import { useNavigate } from "react-router-dom";
const Introuvable = () => {
  let navigate = useNavigate();
  return (
    <div  className="introuvable"> 
    <h1>EUREUR 404</h1>
      <p>
        Désolé, la page que vous recherchez est introuvable.
      </p>
   <button   onClick={()=>navigate("/")}>Page D'aaceuil</button>
    </div>
  );
};

export default Introuvable;
