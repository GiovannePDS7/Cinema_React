import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Image } from "react-native";

const backgroundApp = '../../assets/imgs/fundoInicial/fundoDisney.png'
import LogoWhite from "../../assets/imgs/logos/Logo1.png"

const InitialScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <ImageBackground source={require(backgroundApp)} style={styles.background}>
                <View style={styles.containerLogo}> 
                    <Image source={LogoWhite} style={styles.logoFim} />
                </View>
                <View style={styles.container}>
                    <TouchableOpacity onPress={() => { navigation.navigate('Screen1') }} style={styles.button}>
                        <Text style={styles.txtButton}>Entrar</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    );
}

export default InitialScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    background: {
        flex: 1,
        resizeMode: 'cover',
        width: '100%',
        
    },
    button: {
        position: 'absolute',
        backgroundColor: '#ffffffed',
        borderRadius: 15,
        width: '70%',
        alignSelf: 'center',
        bottom: '30%',
        alignItems: 'center',
        justifyContent: 'center',
        height: 50
    },
    txtButton: {
        fontSize: 18,
        color: '#000220',
        fontWeight: 'bold'
    },
    logoFim: {
        width: 450,
        height: 200,
        alignSelf: 'center',
    },
    containerLogo:{
        width: '100%',
        height: 250,
        backgroundColor: '#ffffff81',
        marginTop: 300,
        alignItems: 'center',
        justifyContent: 'center',
    }

})