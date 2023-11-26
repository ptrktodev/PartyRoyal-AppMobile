import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 15,
        marginTop: 10,
    },
    icon: {
        width: 40,
        backgroundColor: "#2a2a2a",
        height: 35,
        borderRadius: 6,
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        fontSize: 22,
        color: "#fff",
        fontFamily: "IBMPlexSans_700Bold",
    },
});
