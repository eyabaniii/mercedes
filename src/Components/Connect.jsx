import { useState } from "react"
import Footer from "../Shared/Footer"
import Navbar from "../Shared/Navbar"


const Connect=()=>{
  
	const [pass , setpass] = useState("")

	const verifpass = (e) =>{
		e.preventDefault()
		if(pass == "12345") alert("password is correct!") 
		else{
			alert("wrong!")
		}
	}
	
	return(
    <div className="connect">
      <Navbar/>
    <div className="sign">

<div className="main1">  	
		<input type="checkbox" id="chk" aria-hidden="true"/>

			<div className="signup">
				<form>
					<label htmlFor="chk" aria-hidden="true">S'inscrire</label>
					<input type="text" name="txt" placeholder="Nom d'utilisateur" required=""/>
					<input type="email" name="email" placeholder="Adresse email" required=""/>
					<input type="password"  placeholder="Mot de passe" required=""/>
					<button>S'inscrire</button>
				</form>
			</div>

			<div className="login">
				<form onSubmit={verifpass}>
					<label htmlFor="chk" aria-hidden="true">Se Connecter</label>
					<input type="email" name="email" placeholder="Adresse email" required=""/>
					
					
					<input type="password" placeholder="Mot de passe" required="" onChange={(e)=>setpass(e.target.value)}/>
					<button>Se Connecter</button>
				</form>
			</div>
	</div>
  </div>
  <Footer/>
 
</div>
)
}
export default Connect