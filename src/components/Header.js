import React from 'react'
import logointerm from '../static/logointerm.webp' 

function Header() {
    return (
        <div>
            <header>
                <div className="divHeader container">
                    <div className="logo">
                        <a href="#inicio">
                            <img src={logointerm} height="60px" alt="Logo Intermuebles"></img>
                        </a>
                    </div>
                    <nav className="menuHeader">
                        <a href="#inicio">Inicio</a>
                        <a href="#catalogoSeccionado">Catalogo</a>
                        <a href="#nosotros">Sobre Nosotros</a>
                        <a href="#contactanos">Contactanos</a>
                    </nav>
                </div>
            </header>
        </div>
    )
}

export default Header
