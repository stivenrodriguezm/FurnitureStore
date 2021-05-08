import React from 'react'
import App from './FormDos'

function Contacto() {
    return (
        <div className="container divContactanos" id="contactanos">
            <h4 className="animado">Contactanos</h4>
            <div className="displayFlex animado">
                <App/>
                <div className="contactanosTexto">
                    <p>Estimado cliente, tambien puedes contactarnos por alguno de los siguientes medios:</p>
                    <p><span>Teléfono:</span> 713 6067 ó 727 2887 (PBX Bogotá)</p>
                    <p><span>Correo:</span> contacto@intermueblesbogota.com</p>
                    <p>Visitanos en nuestras instalaciones</p>
                    <p><span>Dirección:</span>  Av. 1 de Mayo #36 - 24 Horario de atencion: Lunes - Domingo 9:30 am - 7:30 pm</p>
                </div>
            </div>
        </div>
    )
}

export default Contacto
