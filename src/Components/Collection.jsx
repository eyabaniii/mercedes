
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Navbar from '../Shared/Navbar'
import Footer from '../Shared/Footer'
const Collection = () => {
  const[prix,setprix]=useState()
  const[titre,settitre]=useState()
  const[image,setimage]=useState()
 
  const[upid,setupid]=useState()
  const[collection,setcollection]=useState([])
  const[ope,setope]=useState(false)
  let navigate=useNavigate()

const lawej = (e) => {
  const txt= collection.filter((x)=>x.titre.includes(e.target.value))
setcollection(txt)

}
  const showcollection=()=>{
    axios.get("http://localhost:3000/collection").then((res)=>{setcollection(res.data);console.log(res.data)})
}
useEffect(()=>{
    showcollection()
},[])
const delcollection=(id)=>{
axios.delete(`http://localhost:3000/collection/${id}`).then((res)=>alert("the article is deleted"));window.location.reload()
}

const upcollection=(id)=>{

axios.put(`http://localhost:3000/collection/${upid}`,{image:image  ,titre:titre, prix:prix }).then((res)=>console.log("the article is updated"));window.location.reload()

}

  return (
    <div className='collection'>

      <Navbar/>
      <div className="c1">
        
        <div className="c2">
      <h1>Collection</h1>
      <div onClick={()=>navigate("/ajouter")}>+</div></div>
      <input type="text" placeholder='recherche' onChange={lawej}  className='search'/>

      <div className='cards'>
            {collection && collection.map((el)=>(

   <div className="container"  key={el.id }>
    <div  ><img src={el.image} alt="" /></div>
  <button onClick={()=>navigate("/collection/"+el.id)} className='decouvrir'> Découvrir</button>
    <div className="details">
        <h2 >{el.titre}   <br /> <span >{el.prix}</span></h2>
    
    </div>

  <div className="prt">
 <div className="pr1">
 
  
    <div className="pr2">
<button onClick={()=>delcollection(el.id)} ><svg xmlns="http://www.w3.org/2000/svg" color='red' width="16" height="16" fill="currentColor" className="bi bi-trash3-fill" viewBox="0 0 16 16">
  <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"/>
</svg></button>
<button  onClick={()=>{setope(true);setimage(el.image);settitre(el.titre);setprix(el.prix);setupid(el.id)}} ><svg xmlns="http://www.w3.org/2000/svg" color='green

' width="16" height="16" fill="currentColor" className="bi bi-pen-fill" viewBox="0 0 16 16">
  <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001z"/>
</svg></button>
<button><svg xmlns="http://www.w3.org/2000/svg" color='red' width="16" height="16" fill="currentColor" className="bi bi-heart-fill" viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
</svg></button>
<button><svg xmlns="http://www.w3.org/2000/svg" color='green' width="16" height="16" fill="currentColor" className="bi bi-cart-check-fill" viewBox="0 0 16 16">
  <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-1.646-7.646-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L8 8.293l2.646-2.647a.5.5 0 0 1 .708.708z"/>
</svg></button>
</div>
</div>



</div></div>

      ) )}<div className={`forma ${ope ? "open" :"" } `} >
  <form    className='fff' onSubmit={()=>upcollection(upid)}>
  <h1>Mise à jour</h1>
  <div   className='x' onClick={()=>setope(false)}>X</div>
  <input type="text"  value={image}     onChange={(id)=>setimage(id.target.value)}   />
  <input type="text"  value={prix}     onChange={(id)=>setprix(id.target.value)}   />
  <input type="text"  value={titre}     onChange={(id)=>settitre(id.target.value)}   />

  <button type="submit">Mettre à jour</button>
</form>
</div>
</div></div>
      <Footer/>
    </div>
  )
}

export default Collection
