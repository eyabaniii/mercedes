import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Footer from '../Shared/Footer'
import Navbar from '../Shared/Navbar'

const Ajouter = () => {
  const[prix,setprix]=useState()
const[titre,settitre]=useState()
const[description,setdescription]=useState()
let navigate=useNavigate()
const[image,setimage]=useState()
const adcollection=(e)=>{
  e.preventDefault()
axios.post(`http://localhost:3000/collection/`,{titre:titre ,prix:prix , description:description,image:image})
.then((res)=>console.log(res.data))
navigate("/")

}
  return (
    <div className='ajouter'>
      <Navbar/>
      <div className="ajou">
      <div className='main1' id='aj'>
      <h1>Ajouter une nouvelle voiture</h1>
      <form  className='m1' onSubmit={adcollection}>
<input type="text" placeholder='image'  onChange={(e)=>setimage(e.target.value)} />
<input type="text" placeholder='titre'  onChange={(e)=>settitre(e.target.value)} />
<input type="text" placeholder='prix'  onChange={(e)=>setprix(e.target.value)} />
<input type="text" placeholder='description'  onChange={(e)=>setdescription(e.target.value)} />
  <button type="submit" >Ajouter</button>
  </form></div></div>
  <Footer/>
    </div>
  )
}

export default Ajouter
