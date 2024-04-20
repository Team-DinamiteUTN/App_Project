import React, { useState, useEffect } from "react";
import {
  View,
  TextInput,
  Button,
  Text,
  TouchableOpacity,
  Modal,
  FlatList,
} from "react-native";
import Textarea from "react-native-textarea";
import { ws } from "../../App";
import { style_segunda } from "../styles/style_segunda";
import { style_dice } from "../styles/style_dice";

const assignCube = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [dados, setDados] = useState([
    { color: "rojo", cantidad: 2 },
    { color: "amarillo", cantidad: 2 },
    { color: "verde", cantidad: 2 },
    { color: "azul", cantidad: 2 },
    { color: "morado", cantidad: 2 },
  ]);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  const removeDice = (color) => {
    const updatedDados = dados.map((item) =>
      item.color === color ? { ...item, cantidad: item.cantidad - 1 } : item
    );
    setDados(updatedDados);
    toggleModal();
  };

  const renderDiceItem = ({ item }) => (
    <TouchableOpacity onPress={() => removeDice(item.color)}>
      <View style={[style_dice.dice, { backgroundColor: item.color }]} />
    </TouchableOpacity>
  );

  return (
    <View>
      <TouchableOpacity style={style_segunda.button} onPress={toggleModal}>
        <Text style={style_segunda.buttonText}>Ver Dados</Text>
      </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={toggleModal}
      >
        <View style={style_dice.centeredView}>
          <View style={style_dice.modalView}>
            <Text style={style_dice.modalText}>
              Selecciona los dados que deseas eliminar:
            </Text>
            <FlatList
              data={dados}
              renderItem={renderDiceItem}
              keyExtractor={(item) => item.color}
              numColumns={2}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default assignCube;
