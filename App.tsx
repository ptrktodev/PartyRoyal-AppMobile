import { StatusBar } from "react-native";
import Names from "./src/Home/ScreenNames/index";
import Initial from "./src/Home/ScreenInitial/index";
import {
    useFonts,
    IBMPlexSans_400Regular,
    IBMPlexSans_700Bold,
    IBMPlexSans_500Medium,
} from "@expo-google-fonts/ibm-plex-sans";
import LoadScreen from "./src/Components/Load/index";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function App() {
    const [FontsLoad] = useFonts({
        IBMPlexSans_400Regular,
        IBMPlexSans_700Bold,
        IBMPlexSans_500Medium,
    });

    return (
        <NavigationContainer>
            <StatusBar backgroundColor="#0f65fa" barStyle="light-content" />

            {FontsLoad ? (
                <Stack.Navigator initialRouteName="Names">
                    <Stack.Screen name="Names" component={Names} />
                    <Stack.Screen name="Initial" component={Initial} />
                </Stack.Navigator>
            ) : (
                <LoadScreen />
            )}
        </NavigationContainer>
    );
}
