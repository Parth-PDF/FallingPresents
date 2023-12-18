import React from 'react';
import { Image, TouchableOpacity, StyleSheet } from 'react-native';

const FallingObject = ({ id, position, handleTouch }) => {
  return (
    <TouchableOpacity
      key={id}
      onPress={() => handleTouch(id)}
      style={[styles.touchArea, { left: position.x, top: position.y }]}
    >
      <Image source={require('../assets/present.gif')} style={styles.image} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  touchArea: {
    position: 'absolute',
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    position: 'absolute',
    width: 50,
    height: 50,
  },
});

export default FallingObject;
