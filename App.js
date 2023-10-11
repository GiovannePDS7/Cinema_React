import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Inicial from './src/screens/Inicial'
import HomeScreen from "./src/screens/HomeScreen";
import HomeScreen2 from "./src/screens/HomeScreen2";
import Screen1 from "./src/screens/Screen1";
import Screen2 from "./src/screens/Screen2";
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

export default function App() {

  const MainStack = () => {
    return (

      <Drawer.Navigator initialRouteName="Inicial">
        <Drawer.Screen name='Usuarios' component={Screen2} />
        <Drawer.Screen name='Home' component={HomeScreen} />
      </Drawer.Navigator>
    )
  }
  return (
    <NavigationContainer initialRouteName='Screen2'>

      <Stack.Navigator>
        <Stack.Screen name="Inicial" component={Inicial} options={{ headerShown: false }} />
        <Stack.Screen name="Menu" component={MainStack} options={{ headerShown: false }} />
        <Stack.Screen name="Screen1" component={Screen1} options={{ headerShown: false }} />
        <Stack.Screen name="Screen2" component={Screen2} options={{ headerShown: false }} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="HomeScreen2" component={HomeScreen2} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


