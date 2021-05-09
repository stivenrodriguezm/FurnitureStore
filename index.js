const express = require("express")
const path = require('path')
const bodyparser = require("body-parser")
const nodemailer = require("nodemailer")
const cors = require("cors")
const app = express()

const whitelist = ["http://localhost:3000", "http://localhost:3001", "https://servidorintermuebles.herokuapp.com"]
const corsOptions = {
    origin: function (origin, callback) {
        console.log("** Origin of request " + origin)
        if(whitelist.indexOf(origin) !== -1 || !origin){
            console.log("origin acceptable")
        } else {
            console.log("Origin rejected")
            callback(new Error('Not allowed by CORS'))
        }
    }
}

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:false}))

app.use(express.static(path.join(__dirname, 'client/build')));

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});
app.get('/lolo', function (req, res) {
    res.send('POST request to the homepage')
});


app.post("/api/lole", (req,res) => {
    res.send('POST request to the homepage'),
    console.log("Mensaje enviado prro")
})

app.post("/api/form", (req,res) => {
    console.log("LOLAISHON")
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
            service: 'gmail',
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
            console.log("Mensaje enviado : %s" + info.mensaje)
        })
    })
})

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
    console.log(`Servidor a la escucha en el puesto ${PORT}`);
});

