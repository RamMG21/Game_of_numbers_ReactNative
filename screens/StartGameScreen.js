import { StyleSheet, Text, TextInput, View, Alert } from "react-native";
import { useState } from "react";
import React from "react";

import PrimaryButton from "../components/PrimaryButton";

export default function StartGameScreen({onPickNumber}){

    const [enterNumber, setEnteredNumber] = useState('');

    function numberInputHandler(enteredText) {
        setEnteredNumber(enteredText);
    }

    function resetInputHandler() {
        setEnteredNumber('');
    }

    function confirmInputHandler() {
        const choseNumber = parseInt(enterNumber);

        if(isNaN(choseNumber) || choseNumber <= 0 || choseNumber > 99 ){
            //Show alert
            Alert.alert(
                'Invalid Number','Number has to be a number betwen 1 and 99'
            [{text: 'Okay', style:'desctructive', onPress: resetInputHandler }]
            );
            return;
        }

        onPickNumber(choseNumber);
        console.log('Valid Number!')
    }


    return <View style = {styles.inputContainer}>
        <TextInput 
        maxLength={4}
        keyboardType='numeric'
        autoCapitalize="none"
        autoCorrect={false}
        style = {styles.numberInput} 
        onChangeText={numberInputHandler}
        value = {enterNumber}
        />
        <Text style = {styles.text}>Calculculate</Text>

        <View style = {styles.buttonsContainer}>

            <View style = {styles.buttonContainer}>
             <PrimaryButton onPress={resetInputHandler}>Rest</PrimaryButton>
            </View>

            <View style = {styles.buttonContainer}>
             <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
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
