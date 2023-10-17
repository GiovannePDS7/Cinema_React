import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from "react-native";
import Checkbox from "expo-checkbox";
import Logo from '../../assets/imgs/logos/Logo2.png';
import AsyncStorage from "@react-native-community/async-storage";

const Screen1 = ({ navigation }) => {

    const [isEmailFocused, setIsEmailFocused] = useState(false);
    const [isSenhaFocused, setIsSenhaFocused] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);

    useEffect(() => {
        const checkRememberedUser = async () => {
            const rememberedUser = await AsyncStorage.getItem('rememberedUser');
            if (rememberedUser) {
                navigation.replace('Screen2');
            }
        };
        checkRememberedUser();
    }, []);

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

        if (!username) {
            novosErros.username = 'Campo obrigatório';
        }

        if (!password) {
            novosErros.password = 'Campo obrigatório';
        }
        return novosErros;
    }

    const handleLogin = () => {
        const novosErros = validarCampos();

        if (Object.keys(novosErros).length === 0) {
            const handleLoginAsync = async () => {
                if (username === 'usuario' && password === 'senha') {
                    if (rememberMe) {
                        await AsyncStorage.setItem('rememberedUser', username);
                    }
                    navigation.replace('Usuarios');
                } else {
                    alert('Erro de autenticação');
                }
            };
            handleLoginAsync();
        } else {
            setErros(novosErros);
        }
    };
    return (
        <>
            <View style={styles.container}>
                <Image source={Logo} style={styles.logo} />
                <View style={styles.container}>
                    <View style={styles.containerInput}>
                        <View>
                            <Text style={[styles.txtInputEmail, username != '' && { display: 'flex' }]}>Email ou usuário:</Text>
                            <View style={[styles.inputEmail, isEmailFocused && styles.focusedBorder, username != '' && styles.ValueBorder]}>
                                <TextInput
                                    onChangeText={setUsername}
                                    value={username}
                                    style={styles.email}
                                    onFocus={handleEmailFocus}
                                    onBlur={handleEmailBlur}
                                    placeholderTextColor="#fff"
                                    placeholder="Email ou usuário" />
                                {erros.username && <Text style={styles.erro}>{erros.username}</Text>}
                            </View>
                        </View>
                        <View>
                            <Text style={[styles.txtInputSenha, password != '' && { display: 'flex' }]}>Senha:</Text>
                            <View style={[styles.inputSenha, isSenhaFocused && styles.focusedBorder, password != '' && styles.ValueBorder, password != '' && { marginTop: 0 }]}>
                                <TextInput
                                    onChangeText={setPassword}
                                    value={password}
                                    secureTextEntry={true}
                                    textContentType='password'
                                    style={styles.senha}
                                    onFocus={handleSenhaFocus}
                                    onBlur={handleSenhaBlur}
                                    placeholderTextColor="#fff"
                                    placeholder="Senha" />
                                {erros.password && <Text style={styles.erro}>{erros.password}</Text>}
                            </View>
                        </View>
                    </View>
                    <View style={styles.containerCheckbox}>
                        <View style={styles.littleContainerCheckbox}>
                            <Checkbox style={styles.checkbox} value={rememberMe} onValueChange={setRememberMe} />
                            <Text style={styles.textCheckbox}>Manter login</Text>
                        </View>
                    </View>
                    <View style={styles.containerBtn}>
                        <TouchableOpacity onPress={handleLogin} style={styles.Button}><Text style={styles.TextBtn}>Entrar</Text></TouchableOpacity>
                    </View>
                </View>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    littleContainerCheckbox: {
        width: '40%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: '',
        height: 40

    },
    textCheckbox: {
        paddingLeft: 5,
        fontSize: 17,
        color: '#fff'
    },
    containerCheckbox: {
        width: '100%',
        height: 40,
        top: 30,
    },
    checkbox: {
        marginLeft: 40
    },
    containerInput: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 50
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
        height: '45%',
        marginTop: '20%',
        borderTopRightRadius: 50,
        borderTopLeftRadius: 50,
        width: '100%'
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
        backgroundColor: "#000220",
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
    },
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
        marginTop: 80
    },
});

export default Screen1;
