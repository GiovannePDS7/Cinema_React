import React from "react";
import { View, Text, StyleSheet } from "react-native";
import InputLogin from "./componentes/InputLogin";

const Screen1 = () => {
  return (
    <View style={styles.container}>
      <View style={styles.littleContainer}>
        <Text style={styles.Login}>Login</Text>
      </View>
      {/* <View style={styles.linha}></View> */}
      <InputLogin />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#000220",
    flex: 1,
    alignItems: "center",
  },
//   linha: {
//     top: 0,
//     width: "100%",
//     height: 2,
//     backgroundColor: "#fff",
//   },
  Login: {
    color: "#fff",
    fontSize: 60,
    textAlign: "center",
    top: 34,
  },
  littleContainer: {
    display: "flex",
    width: "100%",
    height: 140,
    justifyContent: "center",
  },
});

export default Screen1;
