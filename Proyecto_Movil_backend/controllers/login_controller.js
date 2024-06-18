/*DEPENDENCIAS*/
const express = require('express');
const { PrismaClient } = require("@prisma/client");

/*PARA INICIALIZAR*/
const app = express();
const prisma = new PrismaClient();


app.post("/login", async (req, res) => {
    const dataUser = await prisma.registro.findMany({
        where: {
            nom_usuaario: req.body.nom_usuaario,
            contra_usuario: req.body.contra_usuario,
        }
    })
    if (dataUser.length > 0) {
        return res.json({
            message: "Usuario Valido",
            data: dataUser
        })
    }
    return res.json({
        message: "vayase de mi app ",

    })

})



module.exports = app;