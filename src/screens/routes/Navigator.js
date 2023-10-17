import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer'; 

import Home1 from "../HomeScreen";
import Home2 from "../HomeScreen2";
import Screen2 from '../Screen2';
import Inicial from "../Inicial";
import Screen1 from '../Screen1';


const Drawer = createDrawerNavigator(); 
  
  export default function Navigator() {
    return (
      <NavigationContainer>
        <Drawer.Navigator>
          <Drawer.Screen name="Inicial" component={Inicial} options={{ headerShown: false, drawerLabel: () => null, }} />
          <Drawer.Screen name="Login" component={Screen1}  options={{ headerShown: false, drawerLabel: () => null, }} />
          <Drawer.Screen name="Usuarios" component={Screen2}  options={{ headerShown: false, drawerLabel: () => null, }}/>
          <Drawer.Screen name="Usuario1" component={Home1} />
          <Drawer.Screen name="Usuario2" component={Home2} />
        </Drawer.Navigator>
      </NavigationContainer>
    );
  }