import React, { useState } from "react";
import { Image, Text, View, ScrollView, TouchableOpacity, Alert } from "react-native";
import { style_tercera } from "../styles/style_tercera";
import AsignCubes from "../components/AsignCubes.js";
import TrackMessages from '../components/TrackMessages.js'; // Importación actualizada

const Tercera = () => {
  const dados = [
    { id: 1, color: "red", cantidad: 2, peso: 10 },
    { id: 2, color: "yellow", cantidad: 2, peso: 15 },
    { id: 3, color: "green", cantidad: 2, peso: 20 },
    { id: 4, color: "blue", cantidad: 2, peso: 25 },
    { id: 5, color: "purple", cantidad: 2, peso: 30 },
  ];

  // Estado para mostrar u ocultar las pistas
  const [showClues, setShowClues] = useState(false);

  const toggleClues = () => {
    setShowClues(!showClues);
  };

  return (
    <ScrollView>
      <View style={style_tercera.divMain}>
        <View style={style_tercera.encabezado}>
          <Text style={style_tercera.title1}>TetraTilt</Text>
        </View>
        <View style={style_tercera.imageContainer}>
          <Text style={style_tercera.Area1}>Pesado</Text>
          <Image
            style={style_tercera.balanzaImg}
            source={require("../imgs/amarilla.png")}
          />
          <Text style={style_tercera.area2}>Ligero</Text>
        </View>
        <AsignCubes dados={dados} />
        <View style={style_tercera.imageContainer}>
          <Text style={style_tercera.area3}>Pesado</Text>
          <Image
            style={style_tercera.balanzaImg2}
            source={require("../imgs/negra.png")}
          />
          <Text style={style_tercera.area4}>Ligero</Text>
        </View>

        {/* Botón y pistas actualizadas para mostrar u ocultar basado en el estado */}
        <TouchableOpacity
          style={style_tercera.boton}
          onPress={toggleClues}
        >
          <Text style={style_tercera.textoBoton}>{showClues ? "Ocultar Pista" : "Mostrar Pista"}</Text>
        </TouchableOpacity>
        {showClues && <TrackMessages />}
        
        <View style={style_tercera.divFooter}>
          <Text style={style_tercera.textFooter}>
            Bienvenidos al juego en el que tu cabeza tendrá que trabajar
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default Tercera;
