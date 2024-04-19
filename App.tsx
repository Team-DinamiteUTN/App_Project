import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AccSocket from './src/components/accSocket';
import Index from './src/views/principal';
import segunda from './src/views/segunda';
import tercera from './src/views/tercera';

const Stack = createStackNavigator();
export const ws = new WebSocket('ws://0.0.0.0:5001');

const App = () => {
  ws.onopen = () => {
  ws.send('Conectando al servidor');
  ws.send('Usuario: mata');
 };
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Index" component={Index} options={{ title: 'Pantalla Principal' }} />
        <Stack.Screen name="segunda" component={segunda} options={{ title: 'Jugador' }} />
        <Stack.Screen name="tercera" component={tercera} options={{ title: 'Juego' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;