import React, { useState } from "react";
import { View, Animated, PanResponder, Text } from "react-native";
import { style_dice } from "../styles/style_dice";

const AssignCube = ({ dados }) => {
  const [counters, setCounters] = useState({
    area1: 0,
    area2: 0,
    area3: 0,
    area4: 0,
  });

  const handleDrop = (area, weight) => {
    setCounters((prevCounters) => ({
      ...prevCounters,
      [area]: prevCounters[area] + weight,
    }));
  };

  const renderDice = (dice) => {
    const diceComponents = [];

    for (let i = 0; i < dice.cantidad; i++) {
      const [pan] = useState(new Animated.ValueXY());

      const panResponder = PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onPanResponderMove: Animated.event([null, { dx: pan.x, dy: pan.y }], {
          useNativeDriver: false,
        }),
        onPanResponderRelease: (e, gesture) => {
          // Dejar el cubo en la posición donde fue soltado
          pan.flattenOffset();
          const area = determineArea(gesture.moveX, gesture.moveY);
          handleDrop(area, dice.peso);
        },
      });

      diceComponents.push(
        <Animated.View
          key={`${dice.id}_${i}`}
          style={[
            style_dice.dice,
            { backgroundColor: dice.color },
            pan.getLayout(),
          ]}
          {...panResponder.panHandlers}
        ></Animated.View>
      );
    }

    return diceComponents;
  };

  const determineArea  = (x, y) => {
    // Determinar el área basada en las coordenadas x e y

    // Area1: Parte superior izquierda
    if (x < 157 && y < 200) return "area1";

    // Area2: Parte superior derecha
    if (x >= 157 && y < 200) return "area2";

    // Area3: Parte inferior izquierda
    if (x < 157 && y >= 400) return "area3";

    // Area4: Parte inferior derecha
    if (x >= 157 && y >= 200) return "area4";
  };

  return (
    <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
      {dados.map((dice) => (
        <View key={dice.id} style={{ margin: 5 }}>
          {renderDice(dice)}
        </View>
      ))}

      <Text style={style_dice.counter}>Area 1: {counters.area1}</Text>
      <Text style={style_dice.counter}>Area 2: {counters.area2}</Text>
      <Text style={style_dice.counter}>Area 3: {counters.area3}</Text>
      <Text style={style_dice.counter}>Area 4: {counters.area4}</Text>
    </View>
  );
};

export default AssignCube;
