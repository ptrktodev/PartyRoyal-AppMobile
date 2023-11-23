import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    gap: 10,
    justifyContent: "space-around",
    marginBottom: 5,
  },
  text1: {
    flex: 1,
    color: "#fff",
    fontWeight: "700",
    borderRadius: 6,
    backgroundColor: "#2a2a2a",
    paddingTop: 16,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 20,
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
