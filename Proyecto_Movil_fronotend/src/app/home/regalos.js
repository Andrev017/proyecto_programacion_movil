import React, { useState } from 'react';
import { router } from 'expo-router';


import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';

const Regalos = () => {
    const [iconColor, setIconColor] = useState('#000000');
    const [iconColor2, setIconColor2] = useState('#000000');
    const [iconColor3, setIconColor3] = useState('#000000');


    return (
        <View>
            <ScrollView style={styles.escroll}>

                <View style={styles.tit}>
                    <Text style={styles.titulo}>
                        Lista de Deseos
                    </Text>
                    <Image source={require("../../../assets/regalo_grande.png")} />
                </View>
                <Text></Text>



                <View style={styles.container}>
                    <Image style={styles.img_regalos} source={require("../../../assets/camisa.jpg")} />
                    <View style={styles.text_botons}>
                        <Text style={{ color: "#2D0C57", fontSize: 20, }}>
                            Camisas a Rayas
                        </Text>
                        <View >
                            <Text style={{ color: "#815ac0", fontSize: 14, }}>Talla M/L</Text>
                            <Text style={{ color: "#815ac0", fontSize: 14, }}>Precio Sugerido </Text>
                            <Text style={{ color: "#2D0C57", fontSize: 20, }}>70 Bs</Text>
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

                <View style={styles.container}>
                    <Image style={styles.img_regalos} source={require("../../../assets/R.jpg")} />
                    <View style={styles.text_botons}>
                        <Text style={{ color: "#2D0C57", fontSize: 20, }}>
                            Poleras Basicas
                        </Text>
                        <View >
                            <Text style={{ color: "#815ac0", fontSize: 14, }}>Talla M/L</Text>
                            <Text style={{ color: "#815ac0", fontSize: 14, }}>Precio Sugerido </Text>
                            <Text style={{ color: "#2D0C57", fontSize: 20, }}>50 Bs</Text>
                        </View>

                        <View style={styles.grupBoton}>
                            <TouchableOpacity style={styles.botones} onPress={() => setIconColor2('#ff0000')}>
                                <Image source={require("../../../assets/meGustaCorazon.png")} style={{ position: "absolute", top: "20%", left: "30%", tintColor: iconColor2 }} />
                            </TouchableOpacity>

                            <Text></Text>
                            <TouchableOpacity style={styles.boton_comentario} onPress={() => router.push("/home/coment")}>
                                <Image source={require("../../../assets/icono_comentario.png")} style={{ position: "absolute", top: "20%", left: "30%" }} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <Text></Text>

                <View style={styles.container}>
                    <Image style={styles.img_regalos} source={require("../../../assets/celular.png")} />
                    <View style={styles.text_botons}>
                        <Text style={{ color: "#2D0C57", fontSize: 20, }}>
                            Celular
                        </Text>
                        <View >
                            <Text style={{ color: "#815ac0", fontSize: 14, }}>Marca Conocida</Text>
                            <Text style={{ color: "#815ac0", fontSize: 14, }}>Precio Sugerido </Text>
                            <Text style={{ color: "#2D0C57", fontSize: 20, }}>1700 Bs</Text>
                        </View>

                        <View style={styles.grupBoton}>
                            <TouchableOpacity style={styles.botones} onPress={() => setIconColor3('#ff0000')}>
                                <Image source={require("../../../assets/meGustaCorazon.png")} style={{ position: "absolute", top: "20%", left: "30%", tintColor: iconColor3 }} />
                            </TouchableOpacity>

                            <Text></Text>
                            <TouchableOpacity style={styles.boton_comentario} onPress={() => router.push("/home/coment")}>
                                <Image source={require("../../../assets/icono_comentario.png")} style={{ position: "absolute", top: "20%", left: "30%" }} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                <View style={styles.container}>
                    <Image style={styles.img_regalos} source={require("../../../assets/audifono.png")} />
                    <View style={styles.text_botons}>
                        <Text style={{ color: "#2D0C57", fontSize: 20, }}>
                            Celular
                        </Text>
                        <View >
                            <Text style={{ color: "#815ac0", fontSize: 14, }}>Marca Conocida</Text>
                            <Text style={{ color: "#815ac0", fontSize: 14, }}>Precio Sugerido </Text>
                            <Text style={{ color: "#2D0C57", fontSize: 20, }}>1700 Bs</Text>
                        </View>

                        <View style={styles.grupBoton}>
                            <TouchableOpacity style={styles.botones} onPress={() => setIconColor3('#ff0000')}>
                                <Image source={require("../../../assets/meGustaCorazon.png")} style={{ position: "absolute", top: "20%", left: "30%", tintColor: iconColor3 }} />
                            </TouchableOpacity>

                            <Text></Text>
                            <TouchableOpacity style={styles.boton_comentario} onPress={() => router.push("/home/coment")}>
                                <Image source={require("../../../assets/icono_comentario.png")} style={{ position: "absolute", top: "20%", left: "30%" }} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <Text>455</Text>
                <Text></Text>
                <Text>89</Text>
            </ScrollView>


        </View>
    );
}

const styles = StyleSheet.create({
    tit: {
        flexDirection: 'row',
    },


    container: {
        flexDirection: 'row',
        backgroundColor: "#0001",
        height: "25%",
    },
    titulo: {
        fontSize: 28,
        padding: "3%",
        color: "#2D0C57",
        marginHorizontal: 45,
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
    escroll: {
        flex: -100,
    },

})

export default Regalos;
