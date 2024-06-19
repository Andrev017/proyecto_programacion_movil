import { View, Text, TouchableOpacity, ActivityIndicator, TextInput } from 'react-native';
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
            <Text>Lista de Eventos</Text>
            <View style={{ flexDirection: "row", gap: 10, justifyContent: "center", alignItems: "center" }}>
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
            {filteredData.length > 0 ? (
                filteredData.map((eventos) => (
                    <View key={eventos.id_evento}>
                        <Text>{eventos.fecha_evento}</Text>
                        <Text>{eventos.nom_evento}</Text>
                        <TouchableOpacity onPress={()=>iraPage(eventos)}>
                            <Text>Ingresar</Text>
                        </TouchableOpacity>
                    </View>
                ))
            ) : (
                <Text>No hay eventos disponibles.</Text>
            )}
        </View>
    );
};

export default ListaEventos;
