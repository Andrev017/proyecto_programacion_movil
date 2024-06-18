import React from 'react';
import { router } from 'expo-router';

import { StyleSheet, View, Text, TouchableOpacity, TextInput } from 'react-native';

const Registro = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>
                    Registrate
            </Text>
            <View style={styles.divabajo}>

                <Text style={styles.nom_input}>Nombre</Text>
                <TextInput style={styles.input}></TextInput>

                <Text style={styles.nom_input}>Apellidos</Text>
                <TextInput style={styles.input}></TextInput>

                <Text style={styles.nom_input}>Contraseña</Text>
                <TextInput style={styles.input} secureTextEntry={true}></TextInput>

                <Text style={styles.nom_input}>Fecha de Nacimiento</Text>
                <TextInput style={styles.input}></TextInput>
                <Text>

                </Text>
                <TouchableOpacity style={styles.boton} onPress={() => router.replace("/home")}>
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

const styles = StyleSheet.create({
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
    titulo:{
        fontSize: 28,
        color: "#fff",
        textAlign: "center",
        justifyContent:"center",
        alignItems: "center",
        padding: "30%",

    },
    boton:{
        backgroundColor: "#0BCE83",
        padding: "3%",
        width: "90%",
        borderRadius: 10,
    },
    nom_input:{
        padding: "2%",
        color: "#815ac0",
        fontSize: 16,
    },
    input:{
        backgroundColor: "#0001",
        padding: "2%",
        width: "90%",
        borderRadius: 20,
        color: "#815ac0",
    },
    sesion: {
        padding: "3%",
        color: "#815ac0",
        fontSize: 18,
    }
})


export default Registro;
