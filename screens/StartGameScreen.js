import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";

import PrimaryButton from "../components/PrimaryButton";

export default function StartGameScreen(){
    return <View style = {styles.inputContainer}>
        <TextInput 
        maxLength={4}
        keyboardType='numeric'
        style = {styles.numberInput} 
        />
        <Text>Calculculate</Text>
        
    </View>
}

const styles = StyleSheet.create({
    inputContainer: {
        
        marginTop: 100,
        marginHorizontal: 44,
        padding: 16,
        backgroundColor: '#72063c',
        borderRadius: 8,
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2},
        shadowRadius: 6,
        shadowOpacity: 0.25
    },
    numberInput: {
        height: 60,
        width: 50,
        fontSize: 32,
        borderBottomColor: '#ddb52f',
        borderBottomWidth: 2,
        color: '#ddb52f',
        marginVertical: 8,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    
});
