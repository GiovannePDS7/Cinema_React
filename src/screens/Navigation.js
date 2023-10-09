import react from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "./HomeScreen";
import HomeScreen2 from "./HomeScreen2";
import Screen1 from "./Screen1";
import Screen2 from "./Screen2";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const MenuDrawer = () => {
    return (
        <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name="Home" component={HomeScreen} />
            <Drawer.Screen name="screen2" component={Screen2} />
            
        </Drawer.Navigator>
    );
}
const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Menu" component={MenuDrawer} />
                <Stack.Screen name="Screen1" component={Screen1} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation;