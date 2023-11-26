import { Text, TouchableOpacity } from "react-native";
import { styles } from "./style";

export default function ButtonNext() {
    return (
        <TouchableOpacity style={styles.buttonNext}>
            <Text style={styles.buttonText}>Prosseguir</Text>
        </TouchableOpacity>
    );
}
