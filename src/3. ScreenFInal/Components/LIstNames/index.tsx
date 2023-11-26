import React from "react";
import { Text, View, TextInput, TouchableOpacity } from "react-native";
import { styles } from "./style";
import User from "./img/user.svg";

export default function ListName({ dados }) {
    return (
        dados &&
        dados.map((item, index) => (
            <View style={styles.container} key={index}>
                <User width={30} height={30} />
                <Text style={styles.text1}>{item}</Text>
            </View>
        ))
    );
}
