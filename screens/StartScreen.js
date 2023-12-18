import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';

const StartScreen = ({ onStart }) => (
  <View style={styles.container}>
    <ImageBackground source={require('../assets/presentBg.png')} style={styles.image}>
      <Text style={styles.title}>Falling Presents</Text>
      <TouchableOpacity style={styles.button} onPress={onStart}>
        <Text style={styles.buttonText}>Start Game</Text>
      </TouchableOpacity>
    </ImageBackground>
  </View>
);

export default StartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 42,
    marginBottom: 40,
    fontWeight: 'bold',
    color: '#F5624D',
    textShadowRadius: 2,
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
  },
  button: {
    paddingVertical: 15,
    paddingHorizontal: 25,
    backgroundColor: '#FF4500',
    borderRadius: 10,
    borderWidth: 0,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  }
});
