import React from 'react';
import AccSocket from './src/components/accSocket';
import {View} from 'react-native';

export const ws = new WebSocket('ws://0.0.0.0:5001');
const App = () => {
  ws.onopen = () => {
    ws.send('Conectando al servidor');
    ws.send('Usuario: mata');
  };
  return (
    <View style={{flex: 1}}>
      <AccSocket/>
    </View>
  );
};
export default App;