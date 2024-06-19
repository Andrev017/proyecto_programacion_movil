import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import apiService from '../../services/conexion_api';

const CrearEvento = () => {

    const datos = {
        nom_evento: "",
        fecha_evento: ""
    }
    const [data, setData] = useState(datos);
    const [day, setDay] = useState("");
    const [month, setMonth] = useState("");
    const [year, setYear] = useState("");

    const sentData = async () => {
        const fecha = day + "/" + month + "/" + year
        const resepcion = await apiService.fetchData(
            "POST",
            "evento",
            { ...data, fecha_evento: fecha },
            undefined
        );
        if (resepcion.status === 200) {
            alert("Se registro el evento")
            setData(datos)
        }
        else {
            alert("Ocurrio un error")
        }

    };
    return (
        <View>
            <Text style={styles.nom_input}>Nombre del evento </Text>
            <TextInput
                style={styles.input}
                value={data.nom_evento}
                onChangeText={(text) =>
                    setData((old) => ({ ...old, nom_evento: text }))}
            ></TextInput>
            <Text style={styles.nom_input}>Fecha del evento</Text>
            <View style={{ flexDirection: "row", gap: 10, justifyContent: "center", alignItems: "center"  }}>
                <TextInput
                    placeholder='DD'
                    style={{ borderWidth: 1, width: 100, textAlign: "center" }}
                    value={day}
                    onChangeText={setDay}
                />
                <TextInput
                    placeholder='MM'
                    style={{ borderWidth: 1, width: 100, textAlign: "center" }}
                    value={month}
                    onChangeText={setMonth}
                />
                <TextInput
                    placeholder='AA'
                    style={{ borderWidth: 1, width: 100, textAlign: "center" }}
                    value={year}
                    onChangeText={setYear}
                />
            </View>

            <TouchableOpacity style={styles.boton} onPress={() => sentData()}>
                <Text style={{ textAlign: "center", color: "#fff", fontSize: 18 }}>
                    Registra el evento
                </Text>
            </TouchableOpacity>

        </View>
    )
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
export default CrearEvento