import { Text, TouchableOpacity } from "react-native";
import { styles } from "./style";

export default function ButtonNext({ navigation, valueProp }) {
    function nextScreen() {
        navigation.navigate("Final", { dados: valueProp });
    }

    return (
        <TouchableOpacity style={styles.buttonNext} onPress={nextScreen}>
            <Text style={styles.buttonText}>Prosseguir</Text>
        </TouchableOpacity>
    );
}
