import React, { useState } from 'react';
import { router } from 'expo-router';
import { StyleSheet, View, Text, TouchableOpacity, TextInput } from 'react-native';
import apiService from '../../services/conexion_api';


const Registro = () => {
    const datos = {
        nom_usuaario: "",
        apell_usuario: "",
        fecha_usuario: null,
        contra_usuario: ""
    }
    const [data, setData] = useState(datos);

    const sentData = async () => {

        const resepcion = await apiService.fetchData(
            "POST",
            "registro",
            data,
            undefined
        );
        // if (resepcion.data) {
        //     router.push("/inicio/sesion")
        // } else {
        //     alert(resepcion.data.message)
        // }
        console.log(resepcion);
        router.push("/inicio/secion")

    };


    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>
                Registrate
            </Text>
            <View style={styles.divabajo}>

                <Text style={styles.nom_input}>Nombre</Text>
                <TextInput
                    style={styles.input}
                    value={data.nom_usuaario}
                    onChangeText={(text) =>
                        setData((old) => ({ ...old, nom_usuaario: text }))}
                ></TextInput>

                <Text style={styles.nom_input}>Apellido</Text>
                <TextInput
                    style={styles.input}
                    value={data.apell_usuario}
                    onChangeText={(text) =>
                        setData((old) => ({ ...old, apell_usuario: text }))}
                ></TextInput>

                <Text style={styles.nom_input}>Contraseña</Text>
                <TextInput
                    style={styles.input}
                    secureTextEntry={true}
                    value={data.contra_usuario}
                    onChangeText={(text) =>
                        setData((old) => ({ ...old, contra_usuario: text }))}
                ></TextInput>

                <Text style={styles.nom_input}>Fecha de cumple</Text>
                <TextInput
                    style={styles.input}
                    value={data.fecha_usuario}
                    onChangeText={(text) =>
                        setData((old) => ({ ...old, fecha_usuario: text }))}
                ></TextInput>
                <Text>


                </Text>
                <TouchableOpacity style={styles.boton} onPress={() => sentData()}>
                    <Text style={{ textAlign: "center", color: "#fff", fontSize: 18 }}>
                        Registrarse
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => router.push("/inicio")}>
                    <Text style={styles.sesion}>
                        Volver
                    </Text>
                </TouchableOpacity>

            </View>
        </View>
    );
}

export const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        backgroundColor: "#815ac0",
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
        backgroundColor: "#0BCE83",
        padding: "3%",
        width: "90%",
        borderRadius: 10,
    },
    nom_input: {
        padding: "2%",
        color: "#815ac0",
        fontSize: 16,
    },
    input: {
        backgroundColor: "#0001",
        padding: "2%",
        width: "90%",
        borderRadius: 20,
        color: "black",
    },
    sesion: {
        padding: "3%",
        color: "#815ac0",
        fontSize: 18,
    }
})


export default Registro;
