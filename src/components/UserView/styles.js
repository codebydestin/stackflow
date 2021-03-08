import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderRadius: 8,
    shadowOffset: { width: 0, height: 10 },
    shadowRadius: 8,
    shadowColor: "#EFEBFA",
    shadowOpacity: 1.0,
    margin: 10,
  },
  disable: { backgroundColor: "#E2E0EC", borderRadius: 8, margin: 10 },
  main: {
    flex: 1,
    flexDirection: "row",
    minHeight: 120,
    padding: 15,
    paddingBottom: 0,
    alignItems: "center",
  },
  icon: { fontSize: 18, marginRight: 20 },
  profileImage: {
    width: 76,
    height: 76,
    borderRadius: 50,
    marginRight: 20,
  },
  displayName: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#211442",
    flex: 1,
    lineHeight: 24,
  },
  scoreLabel: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 4,
    backgroundColor: "#8663e6",
    overflow: "hidden",
    color: "#fff",
  },
  followLabel: {
    backgroundColor: "#EFEBFA",
    marginLeft: 15,
    marginTop: 15,
    paddingVertical: 5,
    paddingHorizontal: 10,
    alignSelf: "flex-start",
    fontStyle: "italic",
    borderRadius: 4,
    overflow: "hidden",
  },
  location: {
    marginBottom: 15,
    marginLeft: 112,
    opacity: 0.6,
    fontSize: 15,
  },
});

export { styles };
