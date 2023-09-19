import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Screen1 = () =>{
    return(
        <>
            <Text style={styles.txt}>ESSA SERÁ A COR DA SUA VIDA!</Text>
            <View style={styles.container}></View>
                
            
        </>
    )
}
export default Screen1;

const styles = StyleSheet.create({
    container:{
        width: '85%',
        height: 400,
        marginTop: 40,
        backgroundColor: '#',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        borderWidth: 3,
        borderColor: '#000'
    },

    txt: {
        textAlign: 'center',
        marginTop: 50,
        fontSize: 25
    }
    
})
