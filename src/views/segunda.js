import React from 'react';
import { TextInput, Text, View, TouchableOpacity } from 'react-native';
import { style_segunda } from '../styles/style_segunda';
import { useNavigation } from '@react-navigation/native';
import GameSetup from '../components/gameSetup.js'

const Segunda = () => {
  const navigation = useNavigation();
  const OnPress = () => {
    navigation.navigate("Tercera");
  };
  return (
    <View style={style_segunda.divMain}>
    <View style={style_segunda.contentContainer}>
      <View style={style_segunda.encabezado}>
        <Text style={style_segunda.title1}>TetraTilt</Text>
      </View>
    <GameSetup/>
    </View>
    <View style={style_segunda.divFooter}>
      <Text style={style_segunda.textFooter}>
        Bienvenidos al juego en el que tu cabeza tendrá que trabajar
      </Text>
    </View>
  </View>
  );
};

export default Segunda;
