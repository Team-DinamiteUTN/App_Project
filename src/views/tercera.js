import React from "react";
import { Image, Text, View, ScrollView } from "react-native";
import { style_tercera } from "../styles/style_tercera";
import AsignCubes from "../components/AsignCubes.js";

const Tercera = () => {
  const dados = [
    { id: 1, color: "red", cantidad: 2, peso: 10 },
    { id: 2, color: "yellow", cantidad: 2, peso: 15 },
    { id: 3, color: "green", cantidad: 2, peso: 20 },
    { id: 4, color: "blue", cantidad: 2, peso: 25 },
    { id: 5, color: "purple", cantidad: 2, peso: 30 },
  ];

  const pesoPesado1 = "Pesado";
  const pesoLigero1 = "Ligero";
  const pesoPesado2 = "Pesado";
  const pesoLigero2 = "Ligero";

  return (
    <ScrollView>
      <View style={style_tercera.divMain}>
        <View style={style_tercera.encabezado}>
          <Text style={style_tercera.title1}>TetraTilt</Text>
        </View>

        <View style={style_tercera.imageContainer}>
          <Text style={style_tercera.Area1}>{pesoPesado1}</Text>
          <Image
            style={style_tercera.balanzaImg}
            source={require("../imgs/amarilla.png")}
          />
          <Text style={style_tercera.area2}>{pesoLigero1}</Text>
        </View>
        <AsignCubes dados={dados} />

        <View style={style_tercera.imageContainer}>
          <Text style={style_tercera.area3}>{pesoPesado2}</Text>
          <Image
            style={style_tercera.balanzaImg2}
            source={require("../imgs/negra.png")}
          />
          <Text style={style_tercera.area4}>{pesoLigero2}</Text>
        </View>

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
