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
import IconParty from "./img/party.svg";

export default function Menu() {
    return (
        <View style={styles.itemColumn}>
            <Text style={styles.text1}>
                <IconParty height={25} width={30} />
                Evento: Festa Royal.
            </Text>
            <Text style={styles.paragr}>
                Em uma festa real, princesas dançam com dragões, os guardas
                reais são palhaços de nariz vermelho, e a única regra é se
                divertir como se o castelo fosse uma pista de dança encantada.
            </Text>
            <Text style={styles.text2}>24 de Dezembro, 2023.</Text>
        </View>
    );
}
