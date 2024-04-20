import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import GameSetup from './src/components/gameSetup';
import Index from './src/views/principal';
import Segunda from './src/views/segunda';
import Tercera from './src/views/tercera';


const Stack = createStackNavigator();
export const ws = new WebSocket('ws://10.90.41.106:5001');

const App = () => {
  ws.onopen = () => {
 };
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Index" component={Index} options={{ title: 'Pantalla Principal' }} />
        <Stack.Screen name="Segunda" component={Segunda} options={{ title: 'Jugador' }} />
    
        <Stack.Screen name="Tercera" component={Tercera} options={{ title: 'Juego' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;