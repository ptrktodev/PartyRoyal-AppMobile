import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { styles } from "./style";
import IconBack from "./img/Back.svg";

export default function Header({ navigation }) {
    function handleTouch() {
        navigation.navigate("Names");
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={handleTouch}>
                <View style={styles.icon}>
                    <IconBack fill={"white"} width={20} height={40} />
                </View>
            </TouchableOpacity>
        </View>
    );
}
