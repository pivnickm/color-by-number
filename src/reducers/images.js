import images from '../images/dragonair';

const initialState = images[1];

export default (state = initialState, action) => {
  switch (action.type) {
  case 'FILL_CELL':
    const { id, activeColorId } = action.payload;
    const { image } = state;
    if(!image[id].filled && image[id].color === activeColorId) {
      const newImage = state.image.slice();
      newImage[id] = {
        ...newImage[id],
        filled: true
      };

      return {
        ...state,
        image: newImage
      };
    } else {
      console.log(...state); // eslint-disable-line
      return { ...state }
    }
  default:
    return state;
  }
};
