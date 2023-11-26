import { StatusBar } from "react-native";
import Names from "./src/2. ScreenNames/index";
import Initial from "./src/1. ScreenInitial/index";
import Final from "./src/3. ScreenFInal/index";
import {
    useFonts,
    IBMPlexSans_400Regular,
    IBMPlexSans_700Bold,
    IBMPlexSans_500Medium,
} from "@expo-google-fonts/ibm-plex-sans";
import LoadScreen from "./src/2. ScreenNames/Components/Load/index";
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

    const forFade = ({ current }) => ({
        cardStyle: {
            opacity: current.progress,
        },
    });

    return (
        <NavigationContainer>
            <StatusBar backgroundColor="#000" barStyle="light-content" />
            {FontsLoad ? (
                <Stack.Navigator
                    initialRouteName="Initial"
                    screenOptions={{
                        headerShown: false,
                        cardStyleInterpolator: forFade,
                    }}
                >
                    <Stack.Screen name="Initial" component={Initial} />
                    <Stack.Screen name="Names" component={Names} />
                    <Stack.Screen name="Final" component={Final} />
                </Stack.Navigator>
            ) : (
                <LoadScreen />
            )}
        </NavigationContainer>
    );
}
