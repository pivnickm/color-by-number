// import images from '../images';

const initialState = {
  // ...images[3]
  id: 0,
  completed: false,
  images: [],
  colors: [],
  stats: []
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
  case 'ACTIVE_IMAGE':
    console.log(action.payload); // eslint-disable-line
    return { ...state, ...action.payload };
  default:
    return state;
  }
};
