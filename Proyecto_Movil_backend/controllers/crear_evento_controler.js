/*DEPENDENCIAS*/
const express = require('express');
const { PrismaClient } = require("@prisma/client");

/*PARA INICIALIZAR*/
const app = express();
const prisma = new PrismaClient();

/*la funcion de retorno =>*/
app.post("/evento", async (req, res) => {
    try {
        const { nom_evento, fecha_evento } = req.body;
        const dataUser = await prisma.crear_evento.create({
            data: {
                nom_evento,
                fecha_evento: fecha_evento,
            }
        });
        res.json(dataUser);
    } catch (error) {
        console.error(error);
        res.status(500).send("Error al registrar el usuario");
    }
});



app.get("/evento", async (req, res) => {
    const eventoGet = await prisma.crear_evento.findMany({

    });
    res.json({
        message: "Datos obtenidos",
        datos_get: eventoGet
    })
})

app.put("/evento/:id", async (req, res) => {
    const id = Number(req.params.id)
    const eventoUdate = await prisma.crear_evento.update({
        where: {
            id_evento: id
        }

    });
    res.json({
        message: "Datos obtenidos",
        datos_get: eventoUdate
    })
})

app.delete("/evento/:id", async (req, res) => {
    const id = Number(req.params.id)
    const eventoDelete = await prisma.crear_evento.delete({
        where: {
            id_evento: id
        }

    });
    res.json({
        message: "Datos obtenidos",
        datos_get: eventoDelete
    })
})


module.exports = app;



