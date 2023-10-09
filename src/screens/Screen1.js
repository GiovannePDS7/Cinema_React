import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import InputLogin from "./componentes/InputLogin";
import Logo from '../../assets/imgs/logos/Logo2.png';

const Screen1 = () => {
  return (
    <>
      <View style={styles.container}>
        <Image source={Logo} style={styles.logo} />
        <InputLogin />
      </View>
    </>
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
  Login: {
    color: "#fff",
    fontSize: 30,
    textAlign: "center",
  },
  littleContainer: {
    display: "flex",
    width: "100%",
    height: 140,
    justifyContent: "center",
  },
  logo: {
    width: 300,
    height: 150,
    alignSelf: 'center',
    marginTop: 20
  },
});

export default Screen1;
