import { SafeAreaView, StatusBar } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import { SetStateAction, useState } from "react";

import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";

export default function App() {

  const [userNumber, setUserNumber ] = useState();

  function pickedNumberHandler(pickedNumber: SetStateAction<undefined>) {
    setUserNumber(pickedNumber);
  }

  let screen = <StartGameScreen onPickNumber = {pickedNumberHandler} />;
  if (userNumber) {
    screen = <GameScreen />
  }

  return (
    <LinearGradient colors={['#44000B', '#E0455F']} style={styles.rootScreen}>
      <SafeAreaView style = {styles.rootScreen}>{screen}</SafeAreaView>
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