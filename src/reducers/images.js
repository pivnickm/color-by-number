// import images from '../images';

const updateLocalStorage = (imageId, newState) => {
  /* update localStorage here */
  // get the current localstorage "game state"
  const images = JSON.parse(localStorage.getItem("pixelGameState"));
  // clone and set the current "game state"
  const newGameState = [
    ...images
  ];
  newGameState[imageId] = newState;
  // set that on the localStorage
  localStorage.setItem("pixelGameState", JSON.stringify(newGameState));
  /* done with localStorage */

}

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
      const newImage = state.image.slice(0);
      const newStats = state.stats.slice(0);
      newImage[id] = {
        ...newImage[id],
        filled: true
      };
      newStats[activeColorId]--;

      const newState = {
        ...state,
        image: newImage,
        stats: newStats
      };

      updateLocalStorage(state.id, newState);

      return newState;
    } else {
      return { ...state }
    }
  case 'ACTIVE_IMAGE':
    return { ...state, ...action.payload };
  default:
    return state;
  }
};
