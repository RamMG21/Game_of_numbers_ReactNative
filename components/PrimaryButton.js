import { View, Text, Pressable, StyleSheet } from "react-native";

export default function PrimaryButton ({children})
{
    function pressHandler(){
        console.log('Pressed!');
    }
    return(
        <View style = {styles.buttonOuterContainer}>

        <Pressable
        //condición ? valor_si_verdadero : valor_si_falso
         style = {({pressed}) => pressed ? [styles.buttonInnerContainer, styles.pressed] : styles.buttonInnerContainer}
         onPress={pressHandler} 
         android_ripple={{color: 'rgb(218, 165, 32)'}}>

        <Text style = {styles.buttonText}>{children}</Text>
        </Pressable>
    </View>
    
    );
}

const styles = StyleSheet.create({
    buttonOuterContainer: {
        borderRadius: 28,
        margin: 4,
        overflow: 'hidden',

    },

    buttonInnerContainer: {
        backgroundColor: 'rgb(205, 92, 92)',
        borderRadius: 28,
        paddingVertical: 8,
        paddingHorizontal: 16,
        margin: 4,
        elevation: 2,

    },

    buttonText: {
        color: 'white',
        textAlign: 'center',
    },
    pressed: {

        opacity: 0.75,

    },
    
});