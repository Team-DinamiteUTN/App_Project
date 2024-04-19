import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AccSocket from './src/components/accSocket';
import Index from './src/views/principal';
import Segunda from './src/views/segunda';
import Tercera from './src/views/tercera';

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
        <Stack.Screen name="Segunda" component={Segunda} options={{ title: 'Jugador' }} />
        <Stack.Screen name="Tercera" component={Tercera} options={{ title: 'Juego' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;