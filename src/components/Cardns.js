import React from "react"
import Cardn from "./Cardn"
import "./cardnss.css"
import imx8 from '../Imphot/imx8.PNG'

/* Cambios en las dos columnas (Welcome y login)*/
function Cardns() {
  return (
    <div className="caja container d-flex align-items-center justify-content-center h-100px">
      <div className="row d-flex justify-content-center align-items-center">
        <div className="col-sm-4 h-100">
          <img src={imx8} alt=""/>
            </div>
            <div className="col-sm-4 h-40px">
            <Cardn/>
            </div>
      </div> 
    </div>
  );
}
export default Cardns;
