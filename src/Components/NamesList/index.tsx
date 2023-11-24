import { Text, View, TouchableOpacity } from "react-native";
import { styles } from "./style";
import User from "./img/user.svg";

export default function Participant({ name, setValueProp, valueProp }) {
    function handleClean(index) {
        const array = [...valueProp];
        array.splice(index, 1);
        setValueProp(array);
    }

    return (
        <View style={styles.container}>
            <View style={styles.item}>
                <User width={30} height={30} />
                <Text style={styles.text1}>{name}</Text>
            </View>
            <TouchableOpacity
                style={styles.button}
                onPress={(index) => handleClean(index)}
            >
                <Text style={styles.textUser}>-</Text>
            </TouchableOpacity>
        </View>
    );
}
