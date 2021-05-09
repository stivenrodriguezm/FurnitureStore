import React from 'react'
import edificio from '../static/edificio.webp'
import { FaShieldAlt, FaUserShield, FaTruckLoading } from "react-icons/fa";
import fotoSala from '../static/INTERMUEBLES19.webp'

function Nosotros() {
    return (
        <div id="seccionNosotros">
            <div className="nosotrosContainer" id="nosotros">
                <div className="nosotros">
                    <h4 className="animado">Sobre Nosotros</h4>
                    <div className="divNosotros container animado">
                        <div className="edificio">
                            <img src={edificio} alt="Foto almacen Intermuebles"></img>
                        </div>
                        <div className="textoNosotros">
                            Nos dedicamos a llenar tus espacios con diseño y calidad para que en tus momentos familiares y con amigos nunca falten el estilo y elegancia que te caracterizan
                            <br></br>
                            <br></br>
                            Desde el año 1992 estamos entregando muebles exclusivos y diseños armónicos en todo el territorio nacional. Contamos con un equipo comprometido con satisfacer tus necesidades y asesorarte para que elijas los materiales, colores y diseños que mejor se adapten a tu estilo.
                        </div>
                    </div>
                </div>
                <div className="nosotrosDosP">
                    <div className="container NosotrosDos animado">
                    <div className="nosotrosAtributo">
                            <FaShieldAlt/>
                            <h4>Calidad Garantizada</h4>
                            <p>Maderas seleccionadas y materiales de la mejor calidad</p>
                        </div>
                        <div className="nosotrosAtributo">
                            <FaUserShield/>
                            <h4>Seguridad</h4>
                            <p>Contamos con un equipo de expertos dispuestos a solucionar tus dudas y a brindarte la mejor atención</p>
                        </div>
                        <div className="nosotrosAtributo">
                            <FaTruckLoading/>
                            <h4>Transporte e Instalación Gratis</h4>
                            <p className="lessMargin">Por compras superiores a $1'000.000 en la ciudad de Bogotá</p>
                        </div>

                    </div>
                </div>
            </div>
            <div className="backgroundPQ">
                <div className="porQueNosotros">
                    <h4 className="animado">¿Por qué Comprar en Intermuebles?</h4>
                    <div className="divPQNosotros animado">
                        <ul className="textoPorQueNosotros">
                            <li>Te ofrecemos <span>garantía</span> de hasta 10 años en la mayoria de nuestros productos, pues los materiales que utilizamos son de la mejor <span>calidad</span> del mercado.</li>
                            <li>Nuestro equipo de <span>asesores de ventas</span> te guiarán hasta que encuentres el producto que mejor se ajuste a tus espacios.</li>
                            <li>Ámplia variedad de productos, visitanos en nuestras instalaciones y conoce los <span>productos exclusivos</span> que allí exhibimos.</li>
                            <li>Tenemos mas de <span>25 años en el mercado</span>, hemos enviado muebles a la mayoria de ciudades en toda Colombia y nuestro mayor logro es tener <span>miles de clientes</span> satisfechos y que recomiendan nuestros productos.</li>
                        </ul>
                        <img src={fotoSala} alt="foto sala intermuebles nosotros"></img>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Nosotros
