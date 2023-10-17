import react from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import Inicial from './Inicial'
import HomeScreen from "./HomeScreen";
import HomeScreen2 from "./HomeScreen2"
import Screen1 from "./Screen1";
import Screen2 from "./Screen2";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const MainStack = () => {
    return (
        <NavigationContainer initialRouteName='HomeScreen'>
            <Drawer.Navigator>
                <Drawer.Screen name="Screen1" component={Screen2} />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}

const Navigation = () => {
    return (
        <NavigationContainer independent={true}>
            <Stack.Navigator initialRouteName="Inicial">
                <Stack.Screen name="HomeScreen" component={MainStack} />
                <Stack.Screen name="Inicial" component={Inicial} />
                <Stack.Screen name="Screen1" component={Screen1} />
                <Stack.Screen name="Screen2" component={Screen2} />
                <Stack.Screen name="HomeScreen1" component={HomeScreen} />
                <Stack.Screen name="HomeScreen2" component={HomeScreen2} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation;