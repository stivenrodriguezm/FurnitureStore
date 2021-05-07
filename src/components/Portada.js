import React from 'react'
import portada from '../static/portada2.webp'

function Portada() {
    return (
        <div className="divPortada" id="inicio">
            <img rel="preload"  src={portada} className="fotoPortada" alt="foto portada pagina intermuebles"></img>
            <div className="textoPortada">
                <h1>Muebles para el hogar</h1>
            </div>
        </div>
    )
}

export default Portada
