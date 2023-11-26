import React from "react";
import {
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Keyboard,
    Linking,
    ScrollView,
} from "react-native";
import { styles } from "./style";
import IconBack from "./img/Back.svg";

export default function Header({ navigation }) {
    function handleTouch() {
        navigation.navigate("Initial");
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={handleTouch}>
                <View style={styles.icon}>
                    <IconBack fill={"white"} width={20} height={40} />
                </View>
            </TouchableOpacity>
            <Text style={styles.text}>Faça Parte!</Text>
        </View>
    );
}
