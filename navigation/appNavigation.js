import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../Screens/HomeScreen";


const Stack = createNativeStackNavigator();

export default function AppNavigation(){

    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home Screen" component={HomeScreen} options={{
                    headerShown: false,
                    title: 'Welcome Home ',
                    headerTitleAlign: 'center'
                }}/>
            </Stack.Navigator>

        </NavigationContainer>
    )
}