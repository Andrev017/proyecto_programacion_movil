import { View, Text } from 'react-native'
import React from 'react'
import useContextEvento from '../../components/contextEvento'
import AgregarRegalos from '../../components/agregarRegalos'

const AnadirRegalo = () => {

  const { evento } = useContextEvento()
  console.log("evento:" + evento.id)

  return (
    <View>
      
      <Text>{evento.nom_evento}</Text>
      <Text>{evento.fecha_evento}</Text>
      <View><AgregarRegalos id={evento.id_evento} /></View>
    </View>
  )
}

export default AnadirRegalo