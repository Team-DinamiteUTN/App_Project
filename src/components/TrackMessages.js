// TrackMessages.js

import React, { useEffect, useState } from 'react';
import { PATHURL, PORT } from './config/config.js';
import { style_01 } from '../styles/styles_01';
import {
  FlatList,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import axios from 'axios';

const TrackMessages = ({ onItemPress }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const Obtener = async () => {
      try {
        const response = await axios.get(`${PATHURL}:${PORT}/pista`);
        setData(response.data.data);
      } catch (error) {
        console.error(error);
      }
    };

    Obtener();
  }, []);

  return (
    <SafeAreaView>
      <Text style={style_01.header}>Pista jugador</Text>
      <FlatList
        data={data}
        keyExtractor={(item, index) => item && item.id ? item.id.toString() : index.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => onItemPress(item._id)}>
            <View style={style_01.itemContainer}>
              <Text style={style_01.itemDescription}>{item.Descripcion}</Text>
              <Text style={style_01.itemId}>{item.Identificador}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
};

export default TrackMessages;
