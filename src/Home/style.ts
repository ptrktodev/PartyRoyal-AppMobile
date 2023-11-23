import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "flex-start",
    justifyContent: "space-between",
    paddingTop: 60,
    paddingLeft: 30,
    paddingRight: 30,
    borderColor: "#B31312",
    gap: 10,
  },
  ItemGlobal: {
    gap: 15,
  },
  itemColumn: {
    flexDirection: "column",
    backgroundColor: "#000",
  },
  itemRow: {
    gap: 10,
    width: "100%",
    justifyContent: "space-around",
    flexDirection: "row",
    marginBottom: 8,
  },
  text1: {
    fontSize: 22,
    marginBottom: 15,
    color: "#fff",
    fontWeight: "500",
  },
  text2: {
    fontSize: 16,
    color: "#a1a1a1",
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
  },
  ptrk: {
    marginBottom: 10,
    textAlign: "center",
    color: "#fff",
    fontWeight: "700",
  },
});
