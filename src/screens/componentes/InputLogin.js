import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

export default function InputLogin() {
    const [isEmailFocused, setIsEmailFocused] = useState(false);
    const [isSenhaFocused, setIsSenhaFocused] = useState(false);

    const handleEmailFocus = () => {
        setIsEmailFocused(true);
    };

    const handleEmailBlur = () => {
        setIsEmailFocused(false);
    };

    const handleSenhaFocus = () => {
        setIsSenhaFocused(true);
    };

    const handleSenhaBlur = () => {
        setIsSenhaFocused(false);
    };

    return (
        <View style={styles.container}>
            <View style={[styles.inputEmail, isEmailFocused && styles.focusedBorder]}>
                <TextInput
                    style={styles.email}
                    onFocus={handleEmailFocus}
                    onBlur={handleEmailBlur}
                    placeholderTextColor="#fff"
                    placeholder="Email ou usuário"
                />
            </View>
            <View style={[styles.inputSenha, isSenhaFocused && styles.focusedBorder]}>
                <TextInput secureTextEntry={true}
                    textContentType='password'
                    style={styles.senha}
                    onFocus={handleSenhaFocus}
                    onBlur={handleSenhaBlur}
                    placeholderTextColor="#fff"
                    placeholder="Senha"
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        top: "14%",
    },
    email: {
        color: "#fff",
        fontSize: 18,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 10,
    },
    inputEmail: {
        borderBottomColor: "#fff",
        borderTopColor: "#000220",
        borderRightColor: "#000220",
        borderLeftColor: "#000220",
        borderWidth: 2,
        width: "80%",
        height: 55,
        paddingHorizontal: 10,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
    },
    senha: {
        color: "#fff",
        fontSize: 18,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 10,
    },
    inputSenha: {
        marginTop: 50,
        borderBottomColor: "#fff",
        borderTopColor: "#000220",
        borderRightColor: "#000220",
        borderLeftColor: "#000220",
        borderWidth: 2,
        width: "80%",
        height: 55,
        paddingHorizontal: 10,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
    },
    focusedBorder: {
        borderBottomColor: "#d82020",
    },
});
