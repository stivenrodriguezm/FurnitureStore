import React from 'react'
import { RiArrowRightSLine, RiArrowLeftSLine } from "react-icons/ri"
import Comedores from '../array/Comedores'
import {galeria} from './FuncionesGaleria'

function SalasCS() {


    function right() {
        let comedoresDiv = document.getElementById("divImagenCSsalas")
        return(
            comedoresDiv.scrollLeft += 180
            )
        }
        function left() {
        let comedoresDiv = document.getElementById("divImagenCSsalas")
        return(
            comedoresDiv.scrollLeft -= 180
        )
    }
    
    return (
        <div  className="divCSmargin animado divCSgeneral">
            <div className="comedoresCS">
                <h2 key="titulo">Salas</h2>
                <div className="divImagenCS" id="divImagenCSsalas">
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

export default SalasCS
