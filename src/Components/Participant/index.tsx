import { Text, View, TextInput, TouchableOpacity } from "react-native";
import { styles } from "./style";

export default function Participant({ name, setValueProp, valueProp }) {
  function handleClean(index) {
    const array = [...valueProp];
    array.splice(index, 1);
    setValueProp(array);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text1}>{name}</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={(index) => handleClean(index)}
      >
        <Text style={styles.textUser}>-</Text>
      </TouchableOpacity>
    </View>
  );
}
