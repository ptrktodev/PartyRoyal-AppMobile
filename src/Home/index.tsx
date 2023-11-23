import React from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Keyboard,
  Linking,
} from "react-native";
import { styles } from "./style";
import Participant from "../Components/Participant/index";

export function Home() {
  const [value, setValue] = React.useState("");
  const [valueProp, setValueProp] = React.useState([]);
  const [erro, setErro] = React.useState("");

  function handleClick() {
    if (value.length != 0) {
      setValueProp((valueProp) => [...valueProp, `${value}`]);
      setValue("");
      Keyboard.dismiss();
      console.log(valueProp, value);
    } else {
      setErro("✋ Campo Obrigatório Não Preenchido!");
      console.log("Digite algo");
      setTimeout(() => setErro(""), 5000);
    }
  }

  function goGit() {
    Linking.openURL("https://github.com/ptrktodev");
  }

  return (
    <View style={styles.container}>
      <View style={styles.ItemGlobal}>
        <View style={styles.itemColumn}>
          <Text style={styles.text1}>🎉 Evento: Festa Royal.</Text>
          <Text style={styles.text2}>24 de Dezembro, 2023.</Text>
        </View>
        <View style={styles.itemRow}>
          <TextInput
            style={styles.input}
            value={value}
            placeholder="Digite seu nome:"
            placeholderTextColor="#6f6f6f"
            onChangeText={(text) => setValue(text)}
          ></TextInput>
          <TouchableOpacity style={styles.button} onPress={handleClick}>
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </View>
        {erro.length != 0 ? <Text style={styles.erro}>{erro}</Text> : null}
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
      <TouchableOpacity onPress={goGit} style={styles.div_ptrk}>
        <Text style={styles.ptrk}>😸 @ptrktodev</Text>
      </TouchableOpacity>
    </View>
  );
}
