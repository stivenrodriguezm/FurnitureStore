import React from 'react'

function Contacto() {
    return (
        <div className="container divContactanos" id="contactanos">
            <h4 className="animado">Contactanos</h4>
            <div className="displayFlex animado">
                <div className="formulario ">
                    <form>
                        <label htmlFor="nombre">Nombre: </label>
                        <input type="text" id="nombre" placeholder="Ingresa tu nombre..."></input>
                        <label htmlFor="correo">Correo: </label>
                        <input type="email" id="correo" placeholder="Ingresa tu correo..."></input>
                        <label htmlFor="mensaje">Mensaje: </label>
                        <textarea id="mensaje" placeholder="Dejanos tu mensaje..."></textarea>
                        <button type="submit" id="btnEnviar">Enviar</button>
                    </form>
                </div>
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
