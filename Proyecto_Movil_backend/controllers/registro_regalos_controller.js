/*DEPENDENCIAS*/
const express = require('express');
const { PrismaClient } = require("@prisma/client");

/*PARA INICIALIZAR*/
const app = express();
const prisma = new PrismaClient();

/*la funcion de retorno =>*/
app.post("/registroRegalo", async (req, res) => {
    const dataUser = await prisma.registro_regalo.create({
        data: req.body
    });
    res.json({
        message: "Se envio los datos",
        data: dataUser
    })
})


app.get("/registroRegalo", async (req, res) => {
    const dato_regitro = await prisma.registro_regalo.findMany({

    });
    res.json({
        message: "Datos obtenidos",
        datos_get: dato_regitro
    })

})


app.put("/registroRegalo/:id_regalo", async (req, res) => {
    const id_update = parseInt(req.params.id_regalo)
    const dato_registro = await prisma.registro_regalo.update({
        where: {id_regalo:id_update}, 
        data: req.body
        
    })
    res.json({
        message: "datos actualizados", 
        datos: dato_registro
    })
})



app.delete("/registroRegalo/:id_regalo", async(req, res) => {
    const id_delete = parseInt(req.params.id_regalo)
    const dato_registro = await prisma.registro_regalo.delete({
        where: {id_regalo:id_delete}
    })
    res.json({
        message: "dato eliminado"
    })
})


module.exports = app;
