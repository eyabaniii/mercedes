import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Afficher = () => {
    const[collection,setcollection]=useState([])
let navigate=useNavigate()
    const Affichercollection=()=>{
        axios.get("http://localhost:3000/collection").then((res)=>{setcollection(res.data);console.log(res.data)})
    }
    useEffect(()=>{
        Affichercollection()
    },[])
  return (
    
    <div className='afficher'>
      <h1  >Nos Marques</h1>
      <div className="cards">
      {collection && collection.map((el)=>(
<div className="container" key={el.id}>
  <div  ><img src={el.image} alt="" /></div>
  <button onClick={()=>navigate("/collection/"+el.id)} className='decouvrir'> Découvrir</button>
</div>
  
      ) )}</div>
    </div>
  )
}

export default Afficher
