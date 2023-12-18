import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import StartScreen from './screens/StartScreen';
import GameOverScreen from './screens/GameOverScreen';
import GameScreen from './screens/GameScreen';

export default function App() {
  const [running, setRunning] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);

  const onGameOver = () => {
    setRunning(false);
    setGameOver(true);
  }

  const onStart = () => {
    setRunning(true);
  }

  const onRestart = () => {
    setRunning(false);
    setGameOver(false);
    setScore(0);
  };

  return (
    <View style={styles.container}>
      {!running && !gameOver ? (
        <StartScreen onStart={onStart} />
      ) : gameOver ? (
        <GameOverScreen score={score} onRestart={onRestart} />
      ) : (
        <GameScreen
          running={running}
          score={score}
          setScore={setScore}
          onGameOver={onGameOver}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
