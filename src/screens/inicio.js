import Header from '../components/Header'
import Portada from '../components/Portada'
import CatalogoSeccionado from '../components/CatalogoSeccionado'
import Nosotros from '../components/Nosotros'
import Contacto from '../components/Contacto'
import Footer from '../components/Footer'

function inicio(){
    return (
        <div>
            <Header/>
            <Portada/>
            <CatalogoSeccionado/>
            <Nosotros/>
            <Contacto/>
            <Footer/>
        </div>
    )
}

export default inicio