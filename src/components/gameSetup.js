import React, { useState, useEffect } from "react";
import { View, TextInput, Text, TouchableOpacity, Alert, ActivityIndicator } from "react-native";
import axios from "axios";
import { ws } from "../../App";
import { useNavigation } from "@react-navigation/native"; 
import { PATHURL, PORT } from "./config/config";
import { style_segunda } from "../styles/style_segunda";

const GameSetup = () => {
  const [playerName, setPlayerName] = useState("");
  const [playerCount, setPlayerCount] = useState(0);
  const [playerRegistered, setPlayerRegistered] = useState(false);
  const [waitingForPlayers, setWaitingForPlayers] = useState(false); // Nuevo estado para controlar el alert
  const navigation = useNavigation();

  useEffect(() => {
    ws.onmessage = (e) => {
      const playerNameFromServer = e.data;
      setPlayerRegistered(playerNameFromServer !== "");
      setPlayerCount((playerCount) => playerCount + 1); // Incrementar el contador de jugadores
      console.log("Jugador registrado:", playerNameFromServer);

      if (playerCount === 1) {
        setWaitingForPlayers(true); // Mostrar alert de espera
      } else if (playerCount === 2) {
        setWaitingForPlayers(false); // Ocultar alert de espera
        Alert.alert("", "¡Listo para jugar!");
      }
    };
  }, []);

  const sendPlayer = async () => {
    if (!playerName.trim()) {
      console.log("El nombre del jugador no puede estar vacío");
      Alert.alert("", "El nombre del jugador no puede estar vacío");
      return;
    }

    if (playerCount < 2) {
      ws.send(playerName);
      setPlayerName("");

      try {
        const data = {
          Name: playerName,
          Points: 0,
        };
        await axios.post(`${PATHURL}:${PORT}/player`, data);
        setPlayerName("");

        if (playerCount === 0) {
          // Si es el primer jugador, esperar al segundo jugador
          setWaitingForPlayers(true);
        } else {
          // Si es el segundo jugador, navegar a la siguiente pantalla
          navigation.navigate("Tercera");
        }
      } catch (error) {
        console.error(error);
      }
    } else {
      console.log("Ya hay 2 jugadores registrados. No se puede unir más jugadores.");
      Alert.alert("", "Ya hay 2 jugadores registrados. No se puede unir más jugadores.");
    }
  };

  return (
    <View style={style_segunda.whiteBox}>
      {!waitingForPlayers && (
        <Text style={style_segunda.title2}>Nombre del jugador</Text>
      )}
      {!waitingForPlayers && (
        <TextInput
          style={style_segunda.input}
          placeholder="Ingresa tu nombre"
          value={playerName}
          onChangeText={(newName) => {
            setPlayerName(newName);
          }}
        />
      )}
      {!waitingForPlayers && (
        <TouchableOpacity style={style_segunda.button} onPress={sendPlayer}>
          <Text style={style_segunda.buttonText}>Jugar</Text>
        </TouchableOpacity>
      )}
  
      {waitingForPlayers && (
        <View>
          <Text>Esperando a los otros jugadores...</Text>
          <ActivityIndicator size="small" color="#0000ff" />
        </View>
      )}
    </View>
  );
  
  
};

export default GameSetup;
