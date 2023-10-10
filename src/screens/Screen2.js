import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

import Logo from '../../assets/imgs/logos/Logo2.png';
import Usuario1 from '../../assets/imgs/usuarios/usuario1.png'
import Usuario2 from '../../assets/imgs/usuarios/usuario2.png'

const Screen2 = ({navigation}) => {
    return (
        <View style={styles.grandContainer}>
            <Image source={Logo} style={styles.logo} />
            <View style={styles.littleContainer}>
                <Text style={styles.txtQuemEstaAssistindo}>Quem esta assistindo?</Text>
                <View style={styles.containerBotoes}>
                    <View style={styles.botaoContainer}>
                        <TouchableOpacity style={styles.botao} onPress={()=> {navigation.navigate('HomeScreen2')}}>
                            <Image source={Usuario1} style={styles.imgUsuario} />
                        </TouchableOpacity>
                        <Text style={styles.txtBotao}>Usuario 1</Text>
                    </View>
                    <View style={styles.botaoContainer}>
                        <TouchableOpacity style={styles.botao2} onPress={()=> {navigation.navigate('HomeScreen')}}>
                            <Image source={Usuario2} style={styles.imgUsuario2} />
                        </TouchableOpacity>
                        <Text style={styles.txtBotao}>Usuario 2</Text>
                    </View>
            </View>
        </View>
            <Image source={Logo} style={styles.logo2} />
        </View>
    )
}

const styles = StyleSheet.create({
    grandContainer: {
        backgroundColor: '#000220'
    },
    logo: {
        width: 330,
        height: 180,
        alignSelf: 'center',
        marginTop: 20
    },
    littleContainer:{
        width: '100%',
        height: 546,
    },
    containerBotoes: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40
    },
    botaoContainer: {
        flex: 1,
        alignItems: 'center',
    },
    botao: {
        width: 120,
        height: 110,
        backgroundColor: '#fff',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 6
    },
    botao2: {
        width: 120,
        height: 110,
        backgroundColor: '#fff',
        display:'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 6
    },
    txtBotao: {
        color: '#fff',
        marginTop: 10,
        textAlign: 'center',
        fontSize: 20
    },
    logo2: {
        width: 150,
        height: 120,
        alignSelf: 'center',
    },
    imgUsuario:{
        width: '90%',
        height: 107,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imgUsuario2:{
        width: '110%',
        height: 120,
        alignSelf: 'center',
        marginLeft: 10
    },
    txtQuemEstaAssistindo: {
        color: '#fff',
        textAlign: 'center',
        marginTop: 170
    }
});

export default Screen2;
