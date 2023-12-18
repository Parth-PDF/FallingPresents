import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';

const GameOverScreen = ({ score, onRestart }) => (
  <View style={styles.container}>
    <ImageBackground source={require('../assets/presentBg.png')} style={styles.image}>
      <Text style={styles.gameOverText}>Game Over</Text>
      <Text style={styles.scoreText}>{score}</Text>
      <TouchableOpacity style={styles.restartButton} onPress={onRestart}>
        <Text style={styles.buttonText}>Restart Game</Text>
      </TouchableOpacity>
    </ImageBackground>
  </View>
);

export default GameOverScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gameOverText: {
    fontSize: 42,
    fontWeight: 'bold',
    color: '#F5624D',
    textShadowRadius: 2,
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
  },
  image: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  scoreText: {
    fontSize: 80,
    color: '#F5624D',
    marginBottom: 20,
    fontWeight: 'bold',
    textShadowRadius: 3,
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
  },
  restartButton: {
    backgroundColor: '#FF4500',
    paddingHorizontal: 25,
    paddingVertical: 15,
    borderRadius: 10,
    borderWidth: 0,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold'
  },
});
