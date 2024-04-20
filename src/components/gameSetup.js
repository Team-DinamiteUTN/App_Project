import React, { useState } from "react";
import { View, TextInput, Text, TouchableOpacity, Alert } from "react-native";
import axios from "axios";
import { ws } from "../../App";
import { useNavigation } from "@react-navigation/native"; // Importa useNavigation desde react-navigation/native
import { PATHURL, PORT } from "./config/config";
import { style_segunda } from "../styles/style_segunda";

const GameSetup = () => {
  const [players, setPlayers] = useState("");
  const [playerName, setPlayerName] = useState("");
  const navigation = useNavigation(); // Obtiene la función de navegación

  ws.onmessage = (e) => {
    const texto = players + "\n" + e.data;
    setPlayers(texto);
    console.log(e.data);
    console.log(texto);
  };

  const sendPlayer = async () => {
    if (!playerName.trim()) {
      console.log("El nombre del jugador no puede estar vacío");
      Alert.alert("", "El nombre del jugador no puede estar vacío");
      return;
    }
    ws.send(playerName);
    setPlayerName("");

    try {
      const data = {
        Name: playerName,
        Points: 0,
      };
      await axios.post(`${PATHURL}:${PORT}/player`, data);

      setPlayerName("");
      navigation.navigate("Tercera"); // Navega a la vista "Tercera"
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={style_segunda.whiteBox}>
      <Text style={style_segunda.title2}>Nombre del jugador</Text>
      <TextInput
        style={style_segunda.input}
        placeholder="Ingresa tu nombre"
        value={playerName}
        onChangeText={(newName) => {
          setPlayerName(newName);
        }}
      />
      <TouchableOpacity style={style_segunda.button} onPress={sendPlayer}>
        <Text style={style_segunda.buttonText}>Jugar</Text>
      </TouchableOpacity>
    </View>
  );
};
export default GameSetup;
