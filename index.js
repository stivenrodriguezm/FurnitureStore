const express = require("express")
const bodyparser = require("body-parser")
const nodemailer = require("nodemailer")
const app = express()

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:false}))

app.get('/', function(req, res) {
    console.log("LOL")
    res.sendFile(path.join(__dirname, 'client/public/index.html'), function(err) {
        if (err) {
          console.log("LOL2")
        res.status(500).send(err)
      }
    })
  })

app.post("/api/form", (req,res) => {
    nodemailer.createTestAccount((err, account) => {
        const htmlEmail = `
            <h3>Email enviado desde React</h3>
            <ul>
                <li>Nombre: ${req.body.nombre}</li>
                <li>Correo: ${req.body.email}</li>
            </ul>
            <h3>Mensaje</h3>
            <p>${req.body.mensaje}</p>
        `
        let transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            auth:{
                user: "stivenrodriguez1996m@gmail.com",
                pass: "Bicicleta123"
            }
        })

        let mailOptions = {
            from: "stivenrodriguez1996m@gmail.com",
            to: "stivenrodriguez1996m@gmail.com",
            subject: "Nuevo correo intermueblesbogota.com",
            text: req.body.mensaje,
            html: htmlEmail
        }

        transporter.sendMail(mailOptions, (err, info) => {
            if(err){
                return console.log(err)
            }
            console.log("Mensaje enviado : %s", info.mensaje)
            console.log("Url del mensaje: %s", nodemailer.getTestMessageUrl(info))
        })
    })
})

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
    console.log(`Servidor a la escucha en el puesto ${PORT}`);
});

