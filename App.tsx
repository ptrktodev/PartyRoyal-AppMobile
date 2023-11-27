import React from "react";
import { StatusBar } from "react-native";
import {
    useFonts,
    IBMPlexSans_400Regular,
    IBMPlexSans_700Bold,
    IBMPlexSans_500Medium,
} from "@expo-google-fonts/ibm-plex-sans";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoadScreen from "./src/2. ScreenNames/Components/Load/index";
import Initial from "./src/1. ScreenInitial/index";
import Names from "./src/2. ScreenNames/index";
import Final from "./src/3. ScreenFInal/index";

const { Navigator, Screen } = createStackNavigator();

export default function App() {
    const [fontsLoaded] = useFonts({
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
            {fontsLoaded ? (
                <Navigator
                    initialRouteName="Initial"
                    screenOptions={{
                        headerShown: false,
                        cardStyleInterpolator: forFade,
                    }}
                >
                    <Screen name="Initial" component={Initial} />
                    <Screen name="Names" component={Names} />
                    <Screen name="Final" component={Final} />
                </Navigator>
            ) : (
                <LoadScreen />
            )}
        </NavigationContainer>
    );
}
