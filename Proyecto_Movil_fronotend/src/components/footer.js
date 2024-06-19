import React, { useState } from 'react';
import { router } from 'expo-router';

import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

const FooterApp = () => {
    const [iconColor, setIconColor] = useState('#ccc');
    const [iconColor2, setIconColor2] = useState('#ccc');
    const [iconColor3, setIconColor3] = useState('#ccc');
    return (
        <View style={styles.footer}>


            <View style={styles.nav}>
                <TouchableOpacity style={styles.boton} onPress={() => setIconColor('#815ac0', router.replace("/home") )} >
                    <Image source={require("../../assets/home.png")} style={{ tintColor: iconColor }} />
                </TouchableOpacity>

                <TouchableOpacity style={styles.boton} onPress={() => setIconColor2('#815ac0', router.replace("/home/listaEventos"))}>
                    <Image source={require("../../assets/corazon.png")} style={{ tintColor: iconColor2 }} />
                </TouchableOpacity>

                <TouchableOpacity style={styles.boton} onPress={() => setIconColor3('#815ac0', router.replace("/home/perfil"))}>
                    <Image source={require("../../assets/perfil.png")} style={{ tintColor: iconColor3 }} />
                </TouchableOpacity>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    footer: {
        backgroundColor: "#ffff",
        height: "10%",
        borderColor: '#ccc',
        borderWidth: 2,
        textAlign: "center",
        justifyContent: "center",
    },
    nav: {
        flexDirection: 'row',
        textAlign: "center",
        justifyContent: "center",

    },
    boton: {
        marginHorizontal: 30,
    },
})

export default FooterApp;
