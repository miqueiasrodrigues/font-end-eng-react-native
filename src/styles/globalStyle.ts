import { StyleSheet } from "react-native";

const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
  },

  doubleButton: {
    height: 120,
    justifyContent: "space-between",
    width: "100%",
  },

  bottom: {
    flex: 1,
    width: "100%",
    justifyContent: "flex-end",
    paddingVertical: 20,
  },

  scrollViewContainer: {
    flexGrow: 1,
    paddingVertical: 20,
    alignItems: "center",
    marginHorizontal: 15,
    backgroundColor: "green",
  },
});

export default globalStyles;
