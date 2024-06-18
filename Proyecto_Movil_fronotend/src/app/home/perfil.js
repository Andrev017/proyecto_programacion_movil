import React from 'react';
import { router } from 'expo-router';

import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';

const Perfil = () => {
    return (
        <View >
            <Text style={styles.titulo}>
                Perfil
            </Text>

            <Text></Text>

            <View>
                <TouchableOpacity style={styles.boton} onPress={() => router.push("/home/perfil")}>
                    <Image style={{ color: "white" }} source={require("../../../assets/editar_perfil.png")} />
                    <Text style={{ color: "#ffff", fontSize: 16, left: 20, top: 5, }} >Editar Perfil</Text>
                    <Image style={{ left: 150, top: 5, }} source={require("../../../assets/flecha_derecha.png")} />

                </TouchableOpacity>

                <Text></Text>

                <TouchableOpacity style={styles.boton} onPress={() => router.push("/home/perfil")}>
                    <Image style={{ color: "white" }} source={require("../../../assets/añadir_reg.png")} />
                    <Text style={{ color: "#ffff", fontSize: 16, left: 19, top: 5, }} >Añadir Regalos</Text>
                    <Image style={{ left: 126, top: 5, }} source={require("../../../assets/flecha_derecha.png")} />
                </TouchableOpacity>

                <Text></Text>

                <TouchableOpacity style={styles.boton} onPress={() => router.push("/home/perfil")}>
                    <Image style={{ color: "white" }} source={require("../../../assets/añadir_amigos.png")} />
                    <Text style={{ color: "#ffff", fontSize: 16, left: 19, top: 5, }} >Añadir Amigos</Text>
                    <Image style={{ left: 126, top: 5, }} source={require("../../../assets/flecha_derecha.png")} />
                </TouchableOpacity>

                <Text></Text>

                <TouchableOpacity style={styles.boton} onPress={() => router.push("/home/perfil")}>
                    <Image style={{ color: "white" }} source={require("../../../assets/mejores_amigos.png")} />
                    <Text style={{ color: "#ffff", fontSize: 16, left: 19, top: 5, }} >Mejores Amigos</Text>
                    <Image style={{ left: 117, top: 5, }} source={require("../../../assets/flecha_derecha.png")} />
                </TouchableOpacity>
            </View>

            <Text style={{textAlign:"center", color:"#815ac0", fontSize: 20, top: 30,}}>Otras Redes Sociales</Text>

            <View style={styles.redes}>
                <TouchableOpacity style={styles.buttom}>
                    <Image source={require("../../../assets/whatsapp.png")} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttom}>
                    <Image source={require("../../../assets/insta.png")} />

                </TouchableOpacity>
                <TouchableOpacity style={styles.buttom}>
                    <Image source={require("../../../assets/facebook.png")} />
                </TouchableOpacity>
            </View>


        </View>
    );
}

const styles = StyleSheet.create({

    titulo: {
        fontSize: 28,
        textAlign: "center",
        color: "#2D0C57",
    },
    boton: {
        backgroundColor: "#0BCE83",
        padding: "3%",
        width: "90%",
        borderRadius: 10,
        left: 15,
        flexDirection: 'row',
    },
    redes: {
        flexDirection: 'row',
        textAlign: "center",
        justifyContent: "center",
    },
    buttom: {
        marginHorizontal: 27,
        top: 70,
    },
})

export default Perfil;
