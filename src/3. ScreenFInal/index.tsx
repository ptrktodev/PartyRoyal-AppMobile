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
import Header from "./Components/Header/header";
import Main from "./Components/Menu/index";
import NameInput from "./Components/IntroNameInput/index";

export default function Screen3({ navigation, route }) {
    const { dados } = route.params;
    return (
        <ScrollView style={{ backgroundColor: "#0B0B0B" }}>
            <View style={styles.container}>
                <Header navigation={navigation} />
                <Main />
                <NameInput dados={dados} />
            </View>
        </ScrollView>
    );
}
