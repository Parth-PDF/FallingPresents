import { Dimensions } from 'react-native';
const { height } = Dimensions.get('window');

const Physics = (entities) => {
  let newEntities = {};
  Object.keys(entities).forEach(key => {
    let entity = entities[key];
    if (entity.speed) {
      entity.position.y += entity.speed;
    }
    newEntities[key] = entity;
  });
  return newEntities;
};

const RemoveOffscreenObjects = (entities, { dispatch }) => {
  Object.keys(entities).forEach(key => {
    if (entities[key].position && entities[key].position.y > height) {
      dispatch({ type: 'game-over' });
    }
  });
  return entities;
};

export { Physics, RemoveOffscreenObjects };