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
import Participant from "../../Components/NamesList/index";
import Header from "../../Components/Header/header";
import Menu from "../../Components/Menu/menu";
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

    function deleteAll() {
        setValueProp([]);
    }

    return (
        <ScrollView style={{ backgroundColor: "black" }}>
            <View style={styles.container}>
                <Header navigation={navigation} />
                <Menu />
                <View style={styles.ItemGlobal}>
                    <View style={styles.itemRow}>
                        <TextInput
                            style={styles.input}
                            value={value}
                            placeholder="Digite seu nome:"
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
                    <TouchableOpacity
                        style={styles.buttonDeleteAll}
                        onPress={deleteAll}
                    >
                        <Text style={styles.buttonText}>Remove All</Text>
                    </TouchableOpacity>
                ) : null}
                <TouchableOpacity onPress={goGit} style={styles.div_ptrk}>
                    <IconGit fill={"white"} height={25} width={18} />
                    <Text style={styles.ptrk}>@ptrktodev</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}
