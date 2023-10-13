import { StyleSheet, Text, TextInput, View } from "react-native";

import PrimaryButton from "../components/PrimaryButton";

export default function StartGameScreen(){
    return <View style = {styles.inputContainer}>
        <TextInput style = {styles.numberInput} />
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
        shadowRadius: 6,
        shadowOpacity: 1
    },
    numberInput: {
        height: 60,
        fontSize: 32,
        borderBottomColor: '#ddb52f',
        borderBottomWidth: 2,
        color: '#ddb52f',
        marginVertical: 8,
        fontWeight: 'bold'
    }
});
