import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import GameSetup from './src/components/gameSetup';
import Index from './src/views/principal';
import Segunda from './src/views/segunda';
import Tercera from './src/views/tercera';
import CelebrationScreen from './src/views/finish.js';


const Stack = createStackNavigator();

export const ws = new WebSocket('ws://10.90.40.95:5001');


const App = () => {
  ws.onopen = () => {
 };
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Tercera" component={Tercera} options={{ title: 'Juego' }} />
</Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;