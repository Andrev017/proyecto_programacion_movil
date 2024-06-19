import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import apiService from '../services/conexion_api';

const AgregarRegalos = ({ id }) => {
    console.log(id);
    const datos = {
        "descripcion": "",
        "precio": +"",
        "me_gusta": true,
        "relacionId": id ? id : null
    }
    const [data, setData] = useState(datos);
    const [getData, setGetData] = useState([]);

    const sentData = async () => {
        const precioInt = Number(data.precio)
        const resepcion = await apiService.fetchData(
            "POST",
            "registroRegalo",
            { ...data, precio: precioInt },
            undefined
        );
        if (resepcion.status === 200) {
            alert("Se Añadio el regalo")
            setData(datos)
            getInfo()
        }
        else {
            alert("Ocurrio un error")
        }

    };
    const getInfo = async () => {
        try {
            const resepcion = await apiService.fetchData("GET", "registroRegalo", undefined, undefined);
            const eventos = resepcion.data.datos_get || [];
            setGetData(eventos);
        } catch (err) {
            alert(err);
        }
    };
    
    useEffect(() => {
        getInfo();
    }, []);

    return (
        <View>
            <Text style={styles.nom_input}>Nombre del evento</Text>
            <TextInput
                style={styles.input}
                value={data.descripcion}
                onChangeText={(text) =>
                    setData((old) => ({ ...old, descripcion: text }))}
            ></TextInput>
            <TextInput
                style={styles.input}
                value={data.precio}
                onChangeText={(text) =>
                    setData((old) => ({ ...old, precio: text }))}
            ></TextInput>
            <TouchableOpacity style={styles.boton} onPress={() => sentData()}>
                <Text style={{ textAlign: "center", color: "#fff", fontSize: 18 }}>
                    Registra evento
                </Text>
            </TouchableOpacity>
            {getData && getData.map((eventos) => (
                <View key={eventos.id_evento}>
                    <Text>{eventos.descripcion}</Text>
                    <Text>{eventos.precio}</Text>
                    <Text>{eventos.me_gusta}</Text>
                </View>
            ))}
        </View>
    );
    
}
export const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        backgroundColor: "#f48c06",
        position: "relative",
    },
    divabajo: {
        backgroundColor: "#fff",
        position: "absolute",
        bottom: 0,
        width: "100%",
        height: "65%",
        borderRadius: 30,
        justifyContent: "center",
        alignItems: "center",
    },
    titulo: {
        fontSize: 28,
        color: "#fff",
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
        padding: "30%",

    },
    boton: {
        backgroundColor: "#219ebc",
        padding: "3%",
        width: "90%",
        borderRadius: 10,
    },
    nom_input: {
        padding: "2%",
        color: "#faa307",
        fontSize: 16,
    },
    input: {
        backgroundColor: "#0001",
        padding: "2%",
        width: "90%",
        borderRadius: 20,
        color: "#faa307",
    },
    sesion: {
        padding: "3%",
        color: "#faa307",
        fontSize: 18,
    }
})

export default AgregarRegalos