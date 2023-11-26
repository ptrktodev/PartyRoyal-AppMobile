import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    itemRow: {
        gap: 10,
        marginTop: 20,
        width: "100%",
        justifyContent: "space-around",
        flexDirection: "row",
        marginBottom: 8,
    },
    input: {
        backgroundColor: "#2a2a2a",
        padding: 10,
        borderRadius: 6,
        flex: 1,
        color: "#fff",
        fontFamily: "IBMPlexSans_500Medium",
    },
    button: {
        backgroundColor: "#10C600",
        borderRadius: 6,
        justifyContent: "center",
        width: 55,
        height: 55,
    },
    buttonText: {
        fontSize: 16,
        color: "#fff",
        textAlign: "center",
    },
    text: {
        marginTop: 10,
        marginBottom: 18,
        fontSize: 18,
        color: "#fff",
        fontFamily: "IBMPlexSans_500Medium",
    },
    text2: {
        marginTop: 10,
        fontSize: 18,
        color: "#FFF500",
        fontFamily: "IBMPlexSans_700Bold",
    },
    msgErro: {
        marginTop: 10,
        color: "#fff",
        fontWeight: "700",
        marginBottom: 8,
    },
});
