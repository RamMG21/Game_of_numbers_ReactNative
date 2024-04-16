import { View, Text, StylesSheet } from 'react-native';
import Title from '../components/Title';


function GameScreen() {
    return ( 
    <View style = {styles.screen}>
        <Text style = {styles.title}>Game Screen</Text>
        
        {/*Guess */}
        <View>
            <Text>Higer or lower?</Text>
            {/* + - */}
        </View>

       {/*  <Viwe>LOG ROUNDS</Viwe> */}
       
        </View>
    );
}

export default GameScreen;
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 24,
    },

 
       
});