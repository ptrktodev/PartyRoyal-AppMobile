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
import Group from "./img/group.svg";

export default function Main() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Yeah! Agora dê o nome a Equipe.</Text>
            <View>
                <Group width={330} height={160} />
            </View>
            <Text style={styles.paragr}>
                A sua equipe participará de uma variedade de brincadeiras
                emocionantes e competições empolgantes durante a Festa Royal.
            </Text>
        </View>
    );
}
