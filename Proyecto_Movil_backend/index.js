/*---LOGICA DE RUTAS---*/
/*DEPENDENCIAS*/
const express = require ('express');
const cors = require ('cors');
const dotenv = require ('dotenv');

const controller_usuario = require('./controllers/registro_controler')
const controller_regalos = require('./controllers/registro_regalos_controller')
const controller_evento = require('./controllers/crear_evento_controler')
const controller_login = require('./controllers/login_controller')


const app = express();
const port = 3000;

dotenv.config();
app.use(cors()); 
app.use(express.json()); 
// app.use(express.urlencoded({ extended: true }));


app.use(controller_usuario);
app.use(controller_regalos);
app.use(controller_evento);
app.use(controller_login);



app.listen(port, () => {
    console.log('Esta en el puerto '+ port )
})