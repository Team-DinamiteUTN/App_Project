// Tercera.js
import React, { useState, useEffect } from "react";
import { Image, Text, View, ScrollView } from "react-native";
import { style_tercera } from "../styles/style_tercera";
import AssignCubes from "../components/AsignCubes.js";
import { PATHURL, PORT } from "../components/config/config.js";
import { ws } from "../../App";

const Tercera = () => {
  ws.onmessage = (e) => {
    console.log(e.data);
  };

  const [dados, setDados] = useState([
    { id: 1, color: "red", cantidad: 2, peso: 10 },
    { id: 2, color: "yellow", cantidad: 2, peso: 15 },
    { id: 3, color: "green", cantidad: 2, peso: 20 },
    { id: 4, color: "blue", cantidad: 2, peso: 25 },
    { id: 5, color: "purple", cantidad: 2, peso: 30 },
  ]);

  const [pesosBalanzaNegra, setPesosBalanzaNegra] = useState({
    izquierda: 0,
    derecha: 0,
  });
  const [pesosBalanzaAmarilla, setPesosBalanzaAmarilla] = useState({
    izquierda: 0,
    derecha: 0,
  });

  useEffect(() => {
    fetch(`${PATHURL}:${PORT}/cube`)
      .then((response) => response.json())
      .then((data) => {
        if (data.status_code === 200 && Array.isArray(data.data)) {
          const updatedDados = dados.map((dado) => {
            const found = data.data.find(
              (apiCube) => apiCube.Color.toLowerCase() === dado.color
            );
            return found ? { ...dado, peso: found.Weight } : dado;
          });
          setDados(updatedDados);
        } else {
          console.error("Error fetching dados:", data);
        }
      })
      .catch((error) => {
        console.error("Error fetching dados:", error);
      });
  }, []);

  const updateBalanzas = () => {
    setPesosBalanzaAmarilla((prev) => ({
      izquierda: counters.area1,
      derecha: counters.area2,
    }));

    setPesosBalanzaNegra((prev) => ({
      izquierda: counters.area3,
      derecha: counters.area4,
    }));
  };

  const [counters, setCounters] = useState({
    area1: 0,
    area2: 0,
    area3: 0,
    area4: 0,
  });

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

        <AssignCubes
          dados={dados}
          actualizarPesoBalanzaAmarilla={(area, peso) => {
            setCounters((prev) => ({
              ...prev,
              [area]: prev[area] + peso,
            }));
          }}
          actualizarPesoBalanzaNegra={(area, peso) => {
            setCounters((prev) => ({
              ...prev,
              [area]: prev[area] + peso,
            }));
          }}
        />

        <View style={style_tercera.imageContainer}>
          <Text style={style_tercera.area3}>Pesado</Text>
          <Image
            style={style_tercera.balanzaImg2}
            source={require("../imgs/negra.png")}
          />
          <Text style={style_tercera.area4}>Ligero</Text>
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
