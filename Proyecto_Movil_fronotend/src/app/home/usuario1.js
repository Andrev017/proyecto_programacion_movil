import React, { useState } from 'react';
import { router } from 'expo-router';

import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

const Usuario1 = () => {
    const [iconColor, setIconColor] = useState('#000000');
    const [iconColor2, setIconColor2] = useState('#000000');
    const [iconColor3, setIconColor3] = useState('#000000');

    return (
        <View>

            <View style={styles.perfil}>
                <Image style={styles.img_usu} source={require("../../../assets/perfilHome.png")} />
                <Text style={styles.tit}>Rodrigo Cejas</Text>
            </View>
            <Text></Text>
            <Text></Text>

            <View style={styles.botones_us}>
                <TouchableOpacity style={styles.boton_amigo}>
                    <Image source={require("../../../assets/añadir_amigos.png")} />

                    <Text style={{ color: "#ffff", fontSize: 16, top: 5, }}>Seguir</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.boton_amigo}>
                    <Image source={require("../../../assets/mejores_amigos.png")} />
                    <Text style={{ color: "#ffff", fontSize: 16, top: 5, }}>Mejor Amigo</Text>
                </TouchableOpacity>
            </View>


            <Text></Text>
            <Text></Text>



            <View style={styles.container}>
                <Image style={styles.img_regalos} source={require("../../../assets/audifono.png")} />
                <View style={styles.text_botons}>
                    <Text style={{ color: "#2D0C57", fontSize: 20, }}>
                        Camisas a Rayas
                    </Text>
                    <View >
                        <Text style={{ color: "#815ac0", fontSize: 14, }}>Marca Sugerida</Text>
                        <Text style={{ color: "#815ac0", fontSize: 14, }}>Precio Sugerido </Text>
                        <Text style={{ color: "#2D0C57", fontSize: 20, }}>500 Bs</Text>
                    </View>

                    <View style={styles.grupBoton}>
                        <TouchableOpacity style={styles.botones} onPress={() => setIconColor('#ff0000')}>
                            <Image source={require("../../../assets/meGustaCorazon.png")} style={{ position: "absolute", top: "20%", left: "30%", tintColor: iconColor }} />
                        </TouchableOpacity>

                        <Text></Text>
                        <TouchableOpacity style={styles.boton_comentario} onPress={() => router.push("/home/coment")}>
                            <Image source={require("../../../assets/icono_comentario.png")} style={{ position: "absolute", top: "20%", left: "30%" }} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <Text></Text>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: "#0001",
        height: "25%",
    },
    perfil: {
        flexDirection: 'row',
        textAlign: "center",
        justifyContent: "center",
        gap: 80,
    },
    img_usu: {

    },
    tit: {
        fontSize: 24,
        color: "#815ac0",
    },
    botones_us: {
        flexDirection: 'row',
        textAlign: "center",
        justifyContent: "center",
        gap: 20,
    },
    boton_amigo: {
        backgroundColor: "#0BCE83",
        flexDirection: 'row',
        borderRadius: 25,
        padding: "2%",
        width: "42%",
        gap: 10,
    },

    img_regalos: {
        width: 140,
        height: 120,
        top: 10,
        left: 10,
    },
    text_botons: {
        left: 25,
        top: 10,
    },
    grupBoton: {
        flexDirection: 'row',
        textAlign: "center",
        justifyContent: "center",
        gap: 5,
    },
    botones: {
        backgroundColor: "#0002",
        width: "30%",
        height: "75%",
        borderRadius: 15,
        justifyContent: "center",
    },

    boton_comentario: {
        backgroundColor: "#0BCE83",
        width: "30%",
        height: "75%",
        borderRadius: 15,
    },
})

export default Usuario1;
