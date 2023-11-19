import { StatusBar } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import LinearGradient from 'react-native-linear-gradient';

import StartGameScreen from "./screens/StartGameScreen";

export default function App() {
  return (
    <LinearGradient colors={['#44000B', '#E0455F']} style={styles.rootScreen}>
        
       <StartGameScreen/>
   
    </LinearGradient>
    
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rootScreen: {
    flex: 1,
   
  },
  
});