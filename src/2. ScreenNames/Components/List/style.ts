import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        width: "100%",
        flexDirection: "row",
        gap: 10,
        justifyContent: "space-around",
        marginBottom: 5,
    },
    item: {
        flexDirection: "row",
        flex: 1,
        backgroundColor: "#2a2a2a",
        alignItems: "center",
        justifyContent: "flex-start",
        paddingLeft: 10,
        gap: 5,
        borderRadius: 6,
    },
    text1: {
        color: "#fff",
        borderRadius: 6,
        fontFamily: "IBMPlexSans_500Medium",
    },
    button: {
        backgroundColor: "#ff0e0e",
        borderRadius: 6,
        justifyContent: "center",
        width: 55,
        height: 55,
    },
    textUser: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "700",
        textAlign: "center",
    },
});
