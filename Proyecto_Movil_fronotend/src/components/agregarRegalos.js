import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { router } from 'expo-router';
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
    const [iconColor3, setIconColor3] = useState('#000000');

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
            <Text style={styles.nom_input}>Nombre del Regalo</Text>
            <TextInput
                style={styles.input}
                value={data.descripcion}
                onChangeText={(text) =>
                    setData((old) => ({ ...old, descripcion: text }))}
            ></TextInput>
            
            <Text style={styles.nom_input}>Presio sugerido del regalo</Text>
            <TextInput
                style={styles.input}
                placeholder='Bs'
                value={data.precio}
                onChangeText={(text) =>
                    setData((old) => ({ ...old, precio: text }))}
            ></TextInput>
            <Text></Text>
            <TouchableOpacity style={styles.boton} onPress={() => sentData()}>
                <Text style={{ textAlign: "center", color: "#fff", fontSize: 18 }}>
                    Añadir Regalo
                </Text>
            </TouchableOpacity>
            <Text></Text>
            {getData && getData.map((eventos) => (
                <View key={eventos.id_evento} style={styles.container}>
                    <Text style={{ color: "#815ac0", fontSize: 15, }}>{eventos.descripcion}</Text>
                    <Text style={{ color: "#815ac0", fontSize: 14, }}>Precio Sugerido </Text>
                    <Text style={{ color: "#2D0C57", fontSize: 20, }}>{eventos.precio}Bs</Text>
                    <Text>{eventos.me_gusta}</Text>

                    <View style={styles.grupBoton}>
                        <TouchableOpacity style={styles.botones} onPress={() => setIconColor3('#ff0000')}>
                            <Image source={require("../../assets/meGustaCorazon.png")} style={{ position: "absolute", top: "20%", left: "30%", tintColor: iconColor3 }} />
                        </TouchableOpacity>

                        <Text></Text>
                        <TouchableOpacity style={styles.boton_comentario} onPress={() => router.push("/home/coment")}>
                            <Image source={require("../../assets/icono_comentario.png")} style={{ position: "absolute", top: "20%", left: "30%" }} />
                        </TouchableOpacity>
                    </View>
                </View>
            ))}
        </View>
    );
    
}
export const styles = StyleSheet.create({

    container: {
        backgroundColor: "#0001",
        height: "20%",
    },

    titulo: {
        fontSize: 28,
        color: "#fff",
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
        padding: "30%",

    },
    grupBoton: {
        flexDirection: 'row',
        textAlign: "center",
        justifyContent: "flex-end",
        top: -50,
        gap: 5,
    },
    botones: {
        backgroundColor: "#0002",
        width: "20%",
        height: "100%",
        borderRadius: 15,
        justifyContent: "center",
    },

    boton_comentario: {
        backgroundColor: "#0BCE83",
        width: "20%",
        height: "100%",
        borderRadius: 15,
    },
    boton: {
        backgroundColor: "#0BCE83",
        padding: "3%",
        width: "90%",
        borderRadius: 10,
        left: 15,
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
        color: "#815ac0",
        left: 15,
    },

})

export default AgregarRegalos