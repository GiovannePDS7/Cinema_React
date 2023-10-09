import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
// import { CheckBox } from 'react-native';
// import Button from '@mui/material/Button';

export default function InputLogin({ navigation }) {
    const [isEmailFocused, setIsEmailFocused] = useState(false);
    const [isSenhaFocused, setIsSenhaFocused] = useState(false);
    const [isEmailValue, setEmailValue] = useState('');
    const [isSenhaValue, setSenhaValue] = useState('');

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

    const [erros, setErros] = useState({});

    const validarCampos = () => {
        const novosErros = {};

        if (!isEmailValue) {
            novosErros.isEmailValue = 'Campo obrigatório';
        }

        if (!isSenhaValue) {
            novosErros.isSenhaValue = 'Campo obrigatório';
        }
        return novosErros;
    }

    const handleLogin = () => {
        const novosErros = validarCampos();

        if (Object.keys(novosErros).length === 0) {
            const mudarPagina = () => { navigation.navigate('Home') }
            mudarPagina()
            alert('Seja bem vindo!');
        } else {
            setErros(novosErros);
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.containerInput}>
                <View>
                    <Text style={[styles.txtInputEmail, isEmailValue != '' && { display: 'flex' }]}>Email ou usuário:</Text>
                    <View style={[styles.inputEmail, isEmailFocused && styles.focusedBorder, isEmailValue != '' && styles.ValueBorder]}>
                        <TextInput
                            onChangeText={setEmailValue}
                            value={isEmailValue}
                            style={styles.email}
                            onFocus={handleEmailFocus}
                            onBlur={handleEmailBlur}
                            placeholderTextColor="#fff"
                            placeholder="Email ou usuário" />
                        {erros.isEmailValue && <Text style={styles.erro}>{erros.isEmailValue}</Text>}
                    </View>
                </View>
                <View>
                    <Text style={[styles.txtInputSenha, isSenhaValue != '' && { display: 'flex' }]}>Senha:</Text>
                    <View style={[styles.inputSenha, isSenhaFocused && styles.focusedBorder, isSenhaValue != '' && styles.ValueBorder, isSenhaValue != '' && { marginTop: 0 }]}>
                        <TextInput
                            onChangeText={setSenhaValue}
                            value={isSenhaValue}
                            secureTextEntry={true}
                            textContentType='password'
                            style={styles.senha}
                            onFocus={handleSenhaFocus}
                            onBlur={handleSenhaBlur}
                            placeholderTextColor="#fff"
                            placeholder="Senha" />
                        {erros.isSenhaValue && <Text style={styles.erro}>{erros.isSenhaValue}</Text>}
                    </View>
                </View>
            </View>
            <View style={styles.containerBtn}>
                <TouchableOpacity onPress={handleLogin} style={styles.Button}><Text style={styles.TextBtn}>Entrar</Text></TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    containerInput: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    erro: {
        color: '#f00',
        marginTop: 5,
    },
    container: {
        width: '100%',
        top: 60
    },
    txtInputEmail: {
        color: '#fff',
        fontSize: 16,
        display: 'none',

    },
    txtInputSenha: {
        marginTop: 30,
        color: '#fff',
        fontSize: 16,
        display: 'none'
    },
    containerBtn: {
        backgroundColor: '#fff',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '50%',
        marginTop: '25%',
        borderTopRightRadius: 50,
        borderTopLeftRadius: 50
    },
    TextBtn: {
        fontSize: 20,
        color: "#fff",
    },
    Button: {
        borderRadius: 20,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#000",
        width: 165,
        height: 60,

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
        paddingHorizontal: 5,
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
        marginTop: 40,
        borderBottomColor: "#fff",
        borderTopColor: "#000220",
        borderRightColor: "#000220",
        borderLeftColor: "#000220",
        borderWidth: 2,
        width: "80%",
        height: 55,
        paddingHorizontal: 5,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
    },
    focusedBorder: {
        borderBottomColor: "#d82020",
    },
    ValueBorder: {
        borderBottomColor: "#18ec10",
    }
});
