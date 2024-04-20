import React, { useState } from "react";
import { View, Text, TouchableOpacity, Modal, FlatList } from "react-native";
import { style_segunda } from "../styles/style_segunda";
import { style_dice } from "../styles/style_dice";

const AssignCube = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [dados, setDados] = useState([
    { color: "red", cantidad: 2 },
    { color: "yellow", cantidad: 2 },
    { color: "green", cantidad: 2 },
    { color: "blue", cantidad: 2 },
    { color: "purple", cantidad: 2 },
  ]);

  const removeDice = (color) => {
    const updatedDados = dados.map((item) =>
      item.color === color ? { ...item, cantidad: item.cantidad - 1 } : item
    );
    setDados(updatedDados.filter((item) => item.cantidad > 0));
  };

  const renderDiceItem = ({ item }) => (
    <TouchableOpacity onPress={() => removeDice(item.color)}>
      <View style={[style_dice.dice, { backgroundColor: item.color }]} />
    </TouchableOpacity>
  );

  return (
    <View
      style={{
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      {dados.map((item, index) =>
        Array.from({ length: item.cantidad }, (_, i) => (
          <View key={index.toString() + i} style={{ margin: 5 }}>
            <TouchableOpacity onPress={() => removeDice(item.color)}>
              <View
                style={[style_dice.dice, { backgroundColor: item.color }]}
              />
            </TouchableOpacity>
          </View>
        ))
      )}
    </View>
  );
};

export default AssignCube;
