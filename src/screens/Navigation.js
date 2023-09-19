import react from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "./HomeScreen";
import Screen1 from "./Screen1";
import Screen2 from "./Screen2";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const MainStack = ()=>{
    return(
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Screen1" component={Screen1} />
            <Stack.Screen name="Screen2" component={Screen2} />
        </Stack.Navigator>
    )
}

const Navigation = () =>{
    return(
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Home" >
                <Drawer.Screen name="Home" component={ HomeScreen } />
                <Drawer.Screen name="Screen1" component={ Screen1 } />
                <Drawer.Screen name="Screen2" component={ Screen2 } />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}
export default Navigation;