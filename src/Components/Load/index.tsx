import { styles } from "./style";
import { View, ActivityIndicator } from "react-native";

export default function App() {
    return (
        <View style={styles.container}>
            <ActivityIndicator size={40} color={"#377efa"} />
        </View>
    );
}
