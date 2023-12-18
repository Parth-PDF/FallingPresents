import React, { useEffect, useState } from 'react';
import { Text, Dimensions, StyleSheet } from 'react-native';
import { GameEngine } from 'react-native-game-engine';
import { Physics, PresentObjectOffScreen } from '../systems/Controls';
import FallingObject from '../components/FallingObject';

const { width } = Dimensions.get('window');

const GameScreen = ({ running, score, setScore, onGameOver }) => {
  const [presentClicked, setPresentClicked] = useState(-1);
  const [entities, setEntities] = useState({});

  const handleTouch = (index) => {
    setPresentClicked(index);
    setScore(currentScore => currentScore + 1);
  };

  useEffect(() => {
    let newEntities = {};
    for (let i = 0; i < 10; i++) {
      newEntities[`object_${i}`] = {
        id: i,
        position: {
          x: Math.random() * (width - 50),
          y: 0,
        },
        speed: 1 + Math.random() * 3,
        handleTouch: () => handleTouch(i),
        renderer: <FallingObject id={i} position={{ x: Math.random() * (width - 50), y: 0, width: 50, height: 50 }} handleTouch={() => handleTouch(i)} />
      };
    }
    setEntities(newEntities);
  }, []);

  useEffect(() => {
    if (presentClicked >= 0) {
      const newEntities = { ...entities };
      for (const key in newEntities) {
        if (newEntities[key].id === presentClicked) {
          newEntities[key].position.y = 0;
          break;
        }
      }
      setPresentClicked(-1);
      setEntities(newEntities);
    }
  }, [presentClicked, entities]);

  const onEvent = (e) => {
    if (e.type === 'game-over') {
      onGameOver();
    }
  };

  return (
    <>
      {
        Object.keys(entities).length !== 0 && (
          <>
            <GameEngine
              style={styles.gameContainer}
              entities={entities}
              running={running}
              onEvent={onEvent}
              systems={[Physics, PresentObjectOffScreen]}
            >
              <Text style={styles.score}>Score: {score}</Text>
            </GameEngine >
          </>
        )}
    </>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  gameContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  score: {
    position: 'absolute',
    top: 80,
    left: 20,
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
  },
});
