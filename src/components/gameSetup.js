import React, { useState, useEffect } from "react";
import { View, TextInput, Text, TouchableOpacity, Alert } from "react-native";
import axios from "axios";
import { ws } from "../../App";
import { useNavigation } from "@react-navigation/native"; 
import { PATHURL, PORT } from "./config/config";
import { style_segunda } from "../styles/style_segunda";

const GameSetup = () => {
  const [playerName, setPlayerName] = useState("");
  const [playerRegistered, setPlayerRegistered] = useState(false);
  const navigation = useNavigation(); 

  // Verificar si hay un jugador registrado al montar el componente
  useEffect(() => {
    ws.onmessage = (e) => {
      const playerNameFromServer = e.data;
      setPlayerRegistered(playerNameFromServer !== "");
      console.log("Jugador registrado:", playerNameFromServer);
    };
  }, []);

  const sendPlayer = async () => {
    if (!playerName.trim()) {
      console.log("El nombre del jugador no puede estar vacío");
      Alert.alert("", "El nombre del jugador no puede estar vacío");
      return;
    }
  
    // Obtener la cantidad actual de jugadores
    const response = await axios.get(`${PATHURL}:${PORT}/players`);
    const playerCount = response.data.length;
  
    if (playerCount < 2) {
      // Permitir que el jugador se una si hay menos de 4 jugadores
      ws.send(playerName);
      setPlayerName("");
  
      try {
        const data = {
          Name: playerName,
          Points: 0,
        };
        await axios.post(`${PATHURL}:${PORT}/player`, data);
        setPlayerName("");
        navigation.navigate("Tercera"); 
      } catch (error) {
        console.error(error);
      }
    } else {
      // Mostrar mensaje de que el juego está lleno
      console.log("El juego está lleno. No se pueden unir más jugadores.");
      Alert.alert("", "El juego está lleno. No se pueden unir más jugadores.");
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