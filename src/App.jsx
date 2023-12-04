import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Acceuil from './Components/Acceuil'
import Ajouter from './Components/Ajouter'
import Apropos from './Components/Apropos'
import Blog from './Components/Blog'
import ChatBot from './Components/ChatBot'
import Collection from './Components/Collection'
import Connect from './Components/Connect'
import Individuel from './Components/Individuel'
import Introuvable from './Components/Introuvable'
import Statistique from './Components/Statistique'




const App=()=> {
 

  return (
    <div className="App">
<BrowserRouter>
<Routes>
<Route   path='/' element={<Acceuil/>} />
<Route   path='*' element={<Introuvable/>} />
<Route   path='/Chatbot' element={<ChatBot/>} />
<Route   path='/Apropos' element={<Apropos/>} />
<Route   path='/Connect' element={<Connect/>} />
<Route   path='/Acceuil' element={<Acceuil/>} />
<Route   path='/Blog' element={<Blog/>} />
<Route   path='/Statistique' element={<Statistique/>} />
<Route   path='/Collection' element={<Collection/>} />
<Route   path='/ajouter' element={<Ajouter/>} />
<Route  path='/collection/:id'  element={<Individuel/>} ></Route>
</Routes>

</BrowserRouter>


    </div>
  )
}

export default App
