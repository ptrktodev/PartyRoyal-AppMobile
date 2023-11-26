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
// Components:
import Participant from "./Components/List/index";
import Header from "./Components/Header/header";
import Menu from "./Components/Menu/menu";
import ButtonDeleteAll from "./Components/ButtonDeleteAll/index";
import ButtonNext from "./Components/ButtonNext/index";
// SVG:
import IconGit from "./img/github.svg";

export default function Names({ navigation }) {
    // Oculta o cabeçalho para esta tela
    React.useEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);

    const [value, setValue] = React.useState<string>("");
    const [valueProp, setValueProp] = React.useState<string[]>([]);
    const [erro, setErro] = React.useState<string>("");

    function handleClick() {
        if (value.length != 0) {
            setValueProp((valueProp) => [...valueProp, `${value}`]);
            setValue("");
        } else {
            setErro("✋ Campo Obrigatório Não Preenchido!");
            setTimeout(() => setErro(""), 5000);
        }
    }

    function goGit() {
        Linking.openURL("https://github.com/ptrktodev");
    }

    return (
        <ScrollView style={{ backgroundColor: "#0B0B0B" }}>
            <View style={styles.container}>
                <Header navigation={navigation} />
                <Menu />
                <View style={styles.ItemGlobal}>
                    <View style={styles.itemRow}>
                        <TextInput
                            style={styles.input}
                            value={value}
                            placeholder="Digite três nomes:"
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
                    {erro.length != 0 ? (
                        <Text style={styles.erro}>{erro}</Text>
                    ) : null}
                    {valueProp.length > 0
                        ? valueProp.map((item, index) => (
                              <Participant
                                  key={index}
                                  name={item}
                                  setValueProp={setValueProp}
                                  valueProp={valueProp}
                              />
                          ))
                        : null}
                </View>
                {valueProp.length > 1 ? (
                    <ButtonDeleteAll setValueProp={setValueProp} />
                ) : null}
                {valueProp.length > 2 ? (
                    <ButtonNext navigation={navigation} valueProp={valueProp} />
                ) : null}
                <TouchableOpacity onPress={goGit} style={styles.div_ptrk}>
                    <IconGit fill={"white"} height={25} width={18} />
                    <Text style={styles.ptrk}>@ptrktodev</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}
