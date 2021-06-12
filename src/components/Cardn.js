import React from 'react'
import imagen4 from '../Imphot/imagen4.PNG'

/* Cambios en las características del login*/
function Cardn() {
    return (
        
        <div className="card bg-light">
           <img src={imagen4} alt=""/>
            <div className="card-body text-dark  h-40px">
               <h4 className="text-center card-title font-weight-bold">Sign In</h4>
               <p className="text-left m-2 text-dark">Username</p> 
               <input className="form-control" type="text" placeholder="Type your username"></input>
             
               <p className="text-left m-2 text-dark">Password</p> 
               <input className="form-control" type="text" placeholder="Type your password"></input>
               <p className="text-left text-secondary"></p> 
                <a href="https:/youtube.com"className="card text-center btn btn-outline-primary rounded-0">Login</a>
            </div>
        </div>
    )
}
export default Cardn
