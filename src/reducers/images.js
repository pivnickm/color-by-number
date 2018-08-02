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
  ...images[1],
  stats: updateStats(images[1].stats, images[1].image)
};

export default (state = initialState, action) => {
  switch (action.type) {
  case 'FILL_CELL':
    const { id, activeColorId } = action.payload;
    const { image } = state;
    if (!image[id].filled && image[id].color === activeColorId) {
      const newImage = state.image.slice();
      newImage[id] = {
        ...newImage[id],
        filled: true
      };

      return {
        ...state,
        image: newImage,
        stats: updateStats(state.stats, newImage)
      };
    } else {
      return { ...state }
    }
  default:
    return state;
  }
};
