import react from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Inicial from './src/screens/Inicial'
import HomeScreen from "./src/screens/HomeScreen";
import HomeScreen2 from "./src/screens/HomeScreen2";
import Screen1 from "./src/screens/Screen1";
import Screen2 from "./src/screens/Screen2";

const Drawer = createDrawerNavigator();

const Navigation = () => {
    return (
        <NavigationContainer independent={true}>
            <Drawer.Navigator initialRouteName="Inicial">
                <Drawer.Screen name="Inicial" component={Inicial} />
                <Drawer.Screen name="Screen1" component={Screen1} />
                <Drawer.Screen name="Screen2" component={Screen2} />
                <Drawer.Screen name="HomeScreen1" component={HomeScreen1} />
                <Drawer.Screen name="HomeScreen2" component={HomeScreen2} />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}

export default Navigation;