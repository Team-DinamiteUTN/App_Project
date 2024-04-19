import React from 'react';
import { TextInput, Text, View, TouchableOpacity } from 'react-native';
import { style_segunda } from '../styles/style_segunda';
import { useNavigation } from '@react-navigation/native';

const segunda = () => {
  const navigation = useNavigation();
  const OnPress = () => {
    navigation.navigate("tercera");
  };
  return (
    <View style={style_segunda.divMain}>
    <View style={style_segunda.contentContainer}>
      <View style={style_segunda.encabezado}>
        <Text style={style_segunda.title1}>TetraTilt</Text>
      </View>
      <View style={style_segunda.whiteBox}>
        <Text style={style_segunda.title2}>Nombre del jugador</Text>
        <TextInput
          style={style_segunda.input}
          placeholder="Ingresa tu nombre"
        />
      </View>
      <TouchableOpacity style={style_segunda.button} onPress={OnPress}>
        <Text style={style_segunda.buttonText}>Jugar</Text>
      </TouchableOpacity>
    </View>
    <View style={style_segunda.divFooter}>
      <Text style={style_segunda.textFooter}>
        Bienvenidos al juego en el que tu cabeza tendrá que trabajar
      </Text>
    </View>
  </View>
  );
};

export default segunda;
