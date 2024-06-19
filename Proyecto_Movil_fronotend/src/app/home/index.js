import React from 'react';
import { router } from 'expo-router';

import { StyleSheet, View, Text,Image, TouchableOpacity } from 'react-native';

const Index = () => {
    return (
        <View>
            <Text style={styles.titulo}>
                Inicio
            </Text>

            <View style={styles.perfil}>
                
                    <Image source={require("../../../assets/perfilHome.png")} style={{color: "#2D0C57",marginHorizontal: 10,}}/>

                    <Text style={{color: "#2D0C57",marginHorizontal: 10,}}>Rodrigo Cejas</Text>
                    <TouchableOpacity style={styles.boton} onPress={() => router.push("/home/usuario1")}>
                        <Text style={{ textAlign: "center", color: "#fff", fontSize: 18 }}>Visitar</Text>
                    </TouchableOpacity>
            </View>

            <Text></Text>

            <View style={styles.perfil}>
                <Image source={require("../../../assets/perfilHome.png")} style={{color: "#2D0C57",marginHorizontal: 10,}}/>
                <Text style={{color: "#2D0C57",marginHorizontal: 10,}}>Maria Rene Vargas</Text>
                <TouchableOpacity style={styles.boton} onPress={() => router.push("/home/usuario2")}>
                    <Text style={{ textAlign: "center", color: "#fff", fontSize: 18,  }}>Visitar</Text>
                </TouchableOpacity>
            </View>

            <Text></Text>

            <View style={styles.perfil}>
                <Image source={require("../../../assets/perfilHome.png")} style={{color: "#2D0C57",marginHorizontal: 10,}}/>
                <Text style={{color: "#2D0C57",marginHorizontal: 10,}}>Nombre del Usuario</Text>
                <TouchableOpacity style={styles.boton} onPress={() => router.push("/home/usuario1")}>
                    <Text style={{ textAlign: "center", color: "#fff", fontSize: 18 }}>Visitar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    titulo:{
        fontSize: 28,
        padding: "3%",
        color: "#2D0C57",
    },
    perfil:{
        flexDirection: 'row',
        textAlign:"center",
        justifyContent:"center",
        backgroundColor:"#ccc",
        width:"90%",
        borderRadius: 50,
        padding:"3%",
        marginHorizontal: 15,
        gap: 5,
    },
    boton:{
        backgroundColor: "#0BCE83",
        padding: "1%",
        width: "30%",
        borderRadius: 10,
    },
})

export default Index;
