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
import ButtonNext from "../ButtonNext/index";
import ListName from "../LIstNames/index";

export default function NameInput({ dados }) {
    const [value, setValue] = React.useState("");
    const [state, setState] = React.useState(true);
    const [msgErro, setMsgErro] = React.useState("");

    function handleClick() {
        if (value.length != 0) {
            setState(false);
        } else {
            setMsgErro("✋ Campo Obrigatório Não Preenchido!");
            setTimeout(() => setMsgErro(""), 5000);
        }
    }

    return (
        <>
            {state ? (
                <View style={styles.itemRow}>
                    <TextInput
                        style={styles.input}
                        value={value}
                        placeholder="Nome da equipe:"
                        placeholderTextColor="#6f6f6f"
                        onChangeText={(text) => setValue(text)}
                    ></TextInput>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={handleClick}
                    >
                        <Text style={styles.buttonText}>+</Text>
                    </TouchableOpacity>
                </View>
            ) : null}
            {msgErro ? <Text style={styles.msgErro}>{msgErro}</Text> : null}
            <Text style={styles.text}>
                Os Membros de:
                <Text style={styles.text2}> {value}</Text>
            </Text>
            <ListName dados={dados} />
            {state ? null : <ButtonNext />}
        </>
    );
}
