import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, Text, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Textarea from 'react-native-textarea';
import { ws } from '../../App';
import { style_segunda } from '../styles/style_segunda';

const GameSetup = () => {
  const [players, setPlayers] = useState('');
  const [playerName, setPlayerName] = useState('');

  const navigation = useNavigation();
  const OnPress = () => {
    navigation.navigate("Tercera");
  };

  ws.onmessage = e => {
    // a message was received
    const texto = players + '\n' + e.data;
    setPlayers(texto);
    console.log(e.data);
    console.log(texto);
  };

   const sendPlayer = () => {
    ws.send(playerName);
    OnPress();
    setPlayerName('');
  };

//Randomizer function for the players
  //useEffect(() => {
    //if (players.length >= 4) {
      //const shuffledPlayers = players.sort(() => Math.random() - 0.5);
      //ws.send(JSON.stringify({
        //type: 'SET_ORDER',
        //order: shuffledPlayers
      //}));
    //}
  //}, [players]);

  //const sendData = async () => {
    //try {
      //axios.get(${PATHURL}:${PORT}/player).then(response => {
        //const json = response.data;
        //setData(json.data);
      //});
    //} catch (error) {
     //console.error(error);
    //}
  //};

  return (
    <View style={style_segunda.whiteBox}>
        <Text style={style_segunda.title2}>Nombre del jugador</Text>
        <TextInput
          style={style_segunda.input}
          placeholder="Ingresa tu nombre"
          value={playerName}
          onChangeText={ newName => {
            setPlayerName(newName);
          }}
        />
        <TouchableOpacity style={style_segunda.button} onPress={sendPlayer}>
            <Text style={style_segunda.buttonText}>Jugar</Text>
        </TouchableOpacity>
        <View>
        <Textarea
          defaultValue={players}
          multiline={true}
          numberOfLines={10}
          editable={false}
        />
      </View>
      </View>
  );
};

export default GameSetup;