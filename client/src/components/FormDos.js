import React, {Component} from "react"
import axios from "axios"

class App extends Component {
    

    exitos = () => {
        console.log("HOLA")//document.getElementsByClassName("envioExitoso")[0]
    } 


    nombre = React.createRef()
    email = React.createRef()
    mensaje = React.createRef()

    state = {
        nombre: "",
        email: "",
        mensaje: ""
    }

    comprobarCambios = () =>{
        var nombre = this.nombre.current.value
        var email = this.email.current.value
        var mensaje = this.mensaje.current.value
        this.setState({
            nombre: nombre,
            email: email,
            mensaje: mensaje
        })
    }

    constructor(){
        super()
        this.enviarEmail = this.enviarEmail.bind(this)
    }

    async enviarEmail(e) {
        e.preventDefault()
        const {nombre,email,mensaje} = this.state
        const form = await axios.post("/api/form",{
            nombre,
            email,
            mensaje
        })
    }


    
        



    render(){
        const exito = this.exitos()
        return(
            <div className="formulario ">
                <form onSubmit={this.enviarEmail}>
                    <label htmlFor="nombre">Nombre: </label>
                    <input type="nombre" 
                        id="nombre" 
                        name="nombre" 
                        ref={this.nombre}
                        onChange={this.comprobarCambios} 
                        placeholder="Ingresa tu nombre..."></input>
                    
                    <label htmlFor="email">Correo: </label>
                    <input type="email" 
                        id="email" 
                        name="email" 
                        onChange={this.comprobarCambios} 
                        ref={this.email}
                        placeholder="Ingresa tu correo..."></input>
                    <label htmlFor="mensaje">Mensaje: </label>
                    <textarea id="mensaje" 
                        name="mensaje" 
                        onChange={this.comprobarCambios} 
                        ref={this.mensaje}
                        placeholder="Dejanos tu mensaje..."></textarea>
                    <button type="submit" onClick={exito} id="btnEnviar">Enviar</button>
                    <div className="envioExitoso">
                        <p>Formulario enviado exitosamente, pronto nos contactaremos contigo.</p>
                    </div>
                </form>
            </div>
        )
    }

}

export default App