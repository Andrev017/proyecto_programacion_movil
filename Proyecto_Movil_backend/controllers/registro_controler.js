/*DEPENDENCIAS*/
const express = require('express');
const { PrismaClient } = require("@prisma/client");

/*PARA INICIALIZAR*/
const app = express();
const prisma = new PrismaClient();

/*la funcion de retorno =>*/
app.post("/registro", async (req, res) => {
    try {
        const { nom_usuaario, apell_usuario, fecha_usuario, contra_usuario } = req.body;
        const dataUser = await prisma.registro.create({
            data: {
                nom_usuaario,   
                apell_usuario,
                fecha_usuario:fecha_usuario,
                contra_usuario
            }
        });
        res.json(dataUser);
    } catch (error) {
        console.error(error);
        res.status(500).send("Error al registrar el usuario");
    }
});



app.get("/registro", async (req, res) => {
    const dato_regalo = await prisma.registro.findMany({

    });
    res.json({
        message: "Datos obtenidos",
        datos_get: dato_regalo
    })
})

app.get("/registro/:id", async (req, res) => {
    const idRegistro = Number(req.params.id)
    const dato_regalo = await prisma.registro.findMany({
        where: {
            id_usuario: idRegistro
        }

    });
    res.json({
        message: "Datos obtenidos",
        datos_get: dato_regalo
    })
})



module.exports = app;



