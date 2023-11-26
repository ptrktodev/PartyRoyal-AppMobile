import { Text, TouchableOpacity } from "react-native";
import { styles } from "./style";

export default function ButtonDeleteAll({ setValueProp }) {
    function deleteAll() {
        setValueProp([]);
    }

    return (
        <TouchableOpacity style={styles.buttonDeleteAll} onPress={deleteAll}>
            <Text style={styles.buttonText}>Remover tudo</Text>
        </TouchableOpacity>
    );
}
