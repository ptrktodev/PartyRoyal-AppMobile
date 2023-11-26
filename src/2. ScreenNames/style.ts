import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#0B0B0B",
        alignItems: "flex-start",
        justifyContent: "space-between",
        paddingTop: 20,
        paddingBottom: 20,
        paddingLeft: 30,
        paddingRight: 30,
        gap: 10,
    },
    ItemGlobal: {
        gap: 15,
    },
    itemRow: {
        gap: 10,
        width: "100%",
        justifyContent: "space-around",
        flexDirection: "row",
        marginBottom: 8,
    },
    containerButtons: {
        backgroundColor: "#fff",
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
        backgroundColor: "#0f65fa",
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
    erro: {
        color: "#fff",
        fontWeight: "700",
        marginBottom: 8,
    },
    div_ptrk: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "center",
        gap: 1,
        marginTop: 10,
    },
    ptrk: {
        marginBottom: 10,
        color: "#fff",
        fontWeight: "700",
    },
});
