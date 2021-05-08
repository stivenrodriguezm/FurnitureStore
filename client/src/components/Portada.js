import React from 'react'
import portada from '../static/portada2.webp'

function Portada() {
    return (
        <div className="divPortada" id="inicio">
            <div className="fotoPortada">
                <img rel="preload"  src={portada} alt="foto portada pagina intermuebles"></img>
            </div>
            <div className="textoPortada">
                <h1>Muebles para el hogar</h1>
            </div>
        </div>
    )
}

export default Portada
