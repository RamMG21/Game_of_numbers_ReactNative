import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";

import PrimaryButton from "../components/PrimaryButton";

export default function StartGameScreen(){
    return <View style = {styles.inputContainer}>
        <TextInput 
        maxLength={4}
        keyboardType='numeric'
        autoCapitalize="none"
        autoCorrect={false}
        style = {styles.numberInput} 
        />
        <Text style = {styles.text}>Calculculate</Text>

        <View style = {styles.buttonsContainer}>

            <View style = {styles.buttonContainer}>
             <PrimaryButton>Rest</PrimaryButton>
            </View>

            <View style = {styles.buttonContainer}>
             <PrimaryButton>Confirm</PrimaryButton>
            </View>
       
        </View>
        
    </View>
}

const styles = StyleSheet.create({
    inputContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 100,
        marginHorizontal: 25,
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
        width: 60,
        fontSize: 32,
        borderBottomColor: '#ddb52f',
        borderBottomWidth: 2,
        color: 'white',
        marginVertical: 8,
        fontWeight: 'bold',
        textAlign: 'center'
        
    },
    text: {
        color: 'white',
    },

    buttonsContainer: {
        flexDirection: 'row',
    },
    buttonContainer: {
        flex: 1,
    }
    
});
