import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  bttn: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    margin: 15,
    padding: 8,
    borderRadius: 4,
  },
  bttnText: {
    flex: 1,
    color: "#fff",
    textAlign: "center",
  },
  warningBttn: {
    backgroundColor: "#F26647",
  },
  successBttn: {
    backgroundColor: "#45C9B1",
  },
});

export { styles };
