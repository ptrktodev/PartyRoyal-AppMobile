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
import IconGirl from "./img/girl.svg";

export default function Initial({ navigation }) {
    // Oculta o cabeçalho para esta tela
    React.useEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);

    return (
        <View style={styles.container}>
            <IconGirl width={180} height={180} />
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate("Names")}
            >
                <Text style={styles.buttonText}>Começar!</Text>
            </TouchableOpacity>
        </View>
    );
}
