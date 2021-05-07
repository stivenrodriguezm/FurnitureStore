import React from 'react'
import { RiArrowRightSLine, RiArrowLeftSLine } from "react-icons/ri";
import Comedores from '../array/Comedores'
import {galeria,leftBig,cerrar,rightBig} from './FuncionesGaleria'

function ComedoresCS() {
    function right() {
        let comedoresDiv = document.getElementById("divImagenCS")
        return(
            comedoresDiv.scrollLeft += 180
            )
    }
    function left() {
        let comedoresDiv = document.getElementById("divImagenCS")
        return(
            comedoresDiv.scrollLeft -= 180
        )
    }
    return (
        <div>
            <div className="comedoresCS animado">
                <h2 key="titulo">Comedores</h2>
                <div className="divImagenCS" id="divImagenCS">
                    {
                        Comedores.map((item) => {
                            return(
                                <div key={item[4]}>
                                    <button onClick={galeria} className="btnGaleria">
                                        <img src={item[0]} key={item[1]} className="imagenCS" id={item[1]} alt={item[4]}></img>
                                    </button>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="noneDisplay" id="galeria">
                    <button onClick={leftBig} className="btnScroll">
                        <RiArrowLeftSLine/>
                    </button>
                    {
                        Comedores.map((item) => {
                            return(
                            <img src={item[0]} className="noneDisplay" key={item[4]} id={item[3]} alt={item[2]}></img>
                        )})                        
                    }
                   <div>
                       <p className="cerrar" onClick={cerrar}>X</p>
                    </div>
                    <button onClick={rightBig} className="btnScroll">
                        <RiArrowRightSLine />
                    </button>
                </div>
            </div>
            <button onClick={left} className="btnScroll btnLeft">
                <RiArrowLeftSLine/>
            </button>
            <button onClick={right} className="btnScroll btnRight">
                <RiArrowRightSLine />
            </button>
        </div>
    )
}

export default ComedoresCS
