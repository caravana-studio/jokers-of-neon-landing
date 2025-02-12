import React from 'react'
import './Div3.css'

function Div3() {
  return (
    <>
     <div className="div-3">
            <h3 className="h3-div3">Step into</h3>
            <h1 className="h1-div3">Strategy</h1>
            <img src="public/4.-specials-elemento b.png" alt="Special Element B" className="element-b"/>
            <img src="public/4.-specials-elemento c.png" alt="Special Element C" className="element-c"/>
    
            <div className="div3-box">
                
            
                
                <ul className="ul-div3-1"><h1>Special Packs</h1>
                <img src="public/4. specials pack.png" alt="Specials Pack Open" className="special-pack-opeb"/>
                
                    <li className="li-div3">
                        Description
                        <hr className="hr-div3"/>
                        <p className="p-div3">More chances of getting a special card</p>
                    </li>
                    <li className="li-div3">
                        Details
                        <hr className="hr-div3"/>
                        <p className="p-div3">15% chance of getting a special card.</p>
                        <p className="p-div3">20% chance of getting a modifier</p>
                    </li>
                    <li className="li-div3">
                        Price
                        <hr className="hr-div3"/>
                        <p className="p-div3">800</p>
                    </li>
                    <button className="btn-buy">Buy</button>
                <button className="btn-close">Close</button>
                <img src="public/4.-specials-elemento.png" alt="Big Star" className="big-star"/>
    
            </ul>
    
                
            </div>
    
            <div className="div3-buttons">
                <ul className="ul-div3">
                    <li><button className="btn-competence">Competence</button></li>
                    <li><button className="btn-simbolos">Simbolos</button></li>
                    <li><button className="btn-boosting">Boosting</button></li>
                </ul>
            </div>
        </div>
    
        <div className="container-hr3">
            <hr className="hr-div3"/>
        </div>

    </>
  )
}

export default Div3
