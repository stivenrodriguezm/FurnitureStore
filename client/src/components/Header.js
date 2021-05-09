import React from 'react'
import logointerm from '../static/logointerm.webp' 
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";


function Header() {

    function abrirMenu() {
        let menu = document.getElementsByClassName("menuHeaderMobile")[0]
        let logoMenu = document.getElementsByClassName("logoMenu")[0]
        return(
            menu.style.display = "block",
            logoMenu.style.display = "none"
        )
    }

    function cerrarMenu(){
        let menu = document.getElementsByClassName("menuHeaderMobile")[0]
        let logoMenu = document.getElementsByClassName("logoMenu")[0]
        return(
            menu.style.display = "none",
            logoMenu.style.display = "block"
        )
    }

    return (
        <div>
            <header>
                <div className="divHeader container">
                    <div className="logo">
                        <a href="#inicio">
                            <img src={logointerm} className="logoImg" alt="Logo Intermuebles"></img>
                        </a>
                    </div>
                    <div className="divMenuMobile">
                        <div className="logoMenu" onClick={abrirMenu}>
                            <GiHamburgerMenu/>       
                        </div>
                        <div className="menuHeaderMobile"  onClick={cerrarMenu}>
                            <div className="logoMenuMobile" onClick={cerrarMenu}>
                                <IoClose/>  
                            </div>
                            <div className="menuGrandeMobile">
                                <a href="#inicio"  onClick={cerrarMenu}>Inicio</a>
                                <a href="#catalogoSeccionado" onClick={cerrarMenu}>Catálogo</a>
                                <a href="#nosotros" onClick={cerrarMenu}>Sobre Nosotros</a>
                                <a href="#contactanos" onClick={cerrarMenu}>Contactanos</a>
                            </div>
                        </div>
                    </div>   
                    <nav className="menuHeader">
                        <a href="#inicio">Inicio</a>
                        <a href="#catalogoSeccionado">Catálogo</a>
                        <a href="#nosotros">Sobre Nosotros</a>
                        <a href="#contactanos">Contactanos</a>
                    </nav>
                </div>
            </header>
        </div>
    )
}

export default Header
