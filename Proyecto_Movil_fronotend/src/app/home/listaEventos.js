import { View, Text, TouchableOpacity, StyleSheet, ActivityIndicator, TextInput } from 'react-native';
import React, { useEffect, useState } from 'react';
import apiService from '../../services/conexion_api';
import useContextEvento from '../../components/contextEvento';
import { router } from 'expo-router';

const ListaEventos = () => {
    const [getData, setGetData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [day, setDay] = useState("");
    const [month, setMonth] = useState("");
    const [year, setYear] = useState("");
    const [filteredData, setFilteredData] = useState([]);

    const getInfo = async () => {
        try {
            const resepcion = await apiService.fetchData("GET", "evento", undefined, undefined);
            const eventos = resepcion.data.datos_get || [];
            setGetData(eventos);
            setFilteredData(eventos);
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    };
    const { setEvento } = useContextEvento()
    const iraPage = (eventos) => {
        setEvento(eventos)
        router.push("/home/anadirRegalo")
    }
    useEffect(() => {
        getInfo();
    }, []);

    useEffect(() => {
        filterData();
    }, [day, month, year]);

    const filterData = () => {
        // If any of the inputs are empty, set the filtered data to all data
        if (!day && !month && !year) {
            setFilteredData(getData);
            return;
        }

        // Concatenate day, month, and year with the appropriate format
        let filter = `${day.length === 2 ? day : day.padStart(2, '0')}/${month.length === 2 ? month : month.padStart(2, '0')}/${year.length === 2 ? year : year.slice(-2)}`;

        // Filter data based on the formatted date
        const filtered = getData.filter(event => event.fecha_evento.includes(filter));
        setFilteredData(filtered);
    };

    if (loading) {
        return <ActivityIndicator size="large" color="#0000ff" />;
    }

    if (error) {
        return (
            <View>
                <Text>Error al cargar los eventos: {error.message}</Text>
            </View>
        );
    }


    return (
        <View>
            <Text style={{ color: "#2D0C57", textAlign: "left", fontSize: 28 }}>Lista de Eventos</Text>
            <Text></Text>
            <Text></Text>
            <Text style={{ color: "#815ac0", fontSize: 18, }}>Busqueda de Eventos </Text>
            <Text></Text>

            <View style={{ flexDirection: "row", gap: 10, justifyContent: "center", alignItems: "center" }}>
                <TextInput
                    placeholder='Dia'
                    style={{ borderWidth: 1, width: 100, textAlign: "center" }}
                    value={day}
                    onChangeText={setDay}
                />
                <TextInput
                    placeholder='Mes'
                    style={{ borderWidth: 1, width: 100, textAlign: "center" }}
                    value={month}
                    onChangeText={setMonth}
                />
                <TextInput
                    placeholder='Año'
                    style={{ borderWidth: 1, width: 100, textAlign: "center" }}
                    value={year}
                    onChangeText={setYear}
                />
            </View>
            <Text></Text>
            {filteredData.length > 0 ? (
                filteredData.map((eventos) => (
                    <View >
                        <View key={eventos.id_evento} style={styles.content_evento}>
                            <Text style={styles.nombre}>{eventos.fecha_evento}</Text>
                            <Text style={styles.nombre}>{eventos.nom_evento}</Text>
                            <TouchableOpacity onPress={() => iraPage(eventos)} style={styles.boton}>
                                <Text style={{ textAlign: "center", color: "#fff", fontSize: 18 }}>Ingresar</Text>
                            </TouchableOpacity>
                        </View>
                        <Text></Text>
                    </View>

                ))
            ) : (
                <Text>No hay eventos disponibles.</Text>
            )}

        </View>
    );
};

export const styles = StyleSheet.create({
    boton: {
        backgroundColor: "#0BCE83",
        padding: "2%",
        width: "90%",
        borderRadius: 10,
        left: 15,
    },
    content_evento: {
        backgroundColor: "#ccc",
        padding: "2%",
        width: "95%",
        borderRadius: 20,
        left: 10,
    },
    nombre: {
        padding: "1%",
        color: "#815ac0",
        fontSize: 16,
    },
});

export default ListaEventos;
