import React, {useEffect} from 'react'
import ComedoresCS from './ComedoresCS'
import AlcobasCS from './AlcobasCS'
import SalasCS from './SalasCS'
import AccesoriosCS from './AccesoriosCS'

function CatalogoSeccionado() {

    let pantalla = window.screen.availHeight

    useEffect(() => {
        window.addEventListener('scroll', mostrarScroll)
    })
    
    
    function mostrarScroll(){
        let x = Number(pantalla - 200)
        let animado = document.querySelectorAll(".animado")
        let scrollTop = document.documentElement.scrollTop
        for(var i = 0; i<animado.length; i++){
            let alturaAnimado = animado[i].offsetTop
            if(alturaAnimado - x < scrollTop){
                animado[i].style.opacity = 1
            }
        }
    }

    return (
        <div id="catalogoSeccionado">
            <h3 className="container titloCatalogoInicio">Catalogo de <span>Muebles</span></h3>
            <div className="divContainerCS">
                <ComedoresCS />
                <AlcobasCS />
                <SalasCS />
                <AccesoriosCS />
            </div>
        </div>
    )
    
}

export default CatalogoSeccionado
