import React from 'react'
import Footer from '../Shared/Footer'
import Navbar from '../Shared/Navbar'
import entreprise from "/src/assets/entreprise.avif"
import entreprise1 from "/src/assets/entreprise1.jpeg"
import video1 from "/src/assets/video1.mp4"
const Apropos = () => {
  return (
    <div  className='apropos'>
      <Navbar/>
    
        <div className='vd1'>
          <video  controls muted autoPlay={true} src={video1}></video>
        </div>
      <div className="cont">
<div className="presentation">
  <div className="texte">
<h1>Mercedes-Benz</h1>
<p>Mercedes-Benz est une entreprise allemande qui fabrique et vend des voitures de luxe depuis 1926. Elle est connue pour la qualité de fabrication exceptionnelle de ses voitures haut de gamme, qui vont des voitures compactes aux limousines de luxe, en passant par les SUV et les voitures de sport. En plus des voitures, Mercedes-Benz produit également des camions, des bus et des voitures utilitaires, et s'engage dans la recherche et le développement de technologies respectueuses de l'environnement. L'entreprise est une filiale de Daimler AG et emploie plus de 170 000 personnes à travers le monde.</p>
</div>
<div className='locale' id='boxi'><img src={entreprise} alt="" /></div>


</div> 
  <div className='locale1' id='boxi'><img src={entreprise1} alt="" /></div>
</div>
<Footer/>
    </div>
  )
}

export default Apropos
