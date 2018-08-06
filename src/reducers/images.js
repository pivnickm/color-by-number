import images from '../images/dragonair';

const updateStats = (statsObj, image) => {
  const accumulator = Object.keys(statsObj);
  return image.reduce((acc, cell) => {
    if (!cell.filled) {
      acc[cell.color]++;
    }
    return acc;
  }, accumulator);
};

const initialState = {
  ...images[3]
};

export default (state = initialState, action) => {
  switch (action.type) {
  case 'FILL_CELL':
    const { id, activeColorId } = action.payload;
    const { image } = state;
    if (!image[id].filled && image[id].color === activeColorId) {
      const newImage = state.image.slice();
      const newStats = state.stats.slice();
      newImage[id] = {
        ...newImage[id],
        filled: true
      };
      newStats[activeColorId]--;
      return {
        ...state,
        image: newImage,
        stats: newStats
      };
    } else {
      return { ...state }
    }
  default:
    return state;
  }
};
