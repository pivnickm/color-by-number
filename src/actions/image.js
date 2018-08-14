export const fillImageCell = (id, activeColorId) => ({
  type: 'FILL_CELL',
  payload: { id, activeColorId }
});

export const selectActiveImage = (image) => ({
  type: 'ACTIVE_IMAGE',
  payload: image
});

export const doFillCell = (id, activeColorId) =>  (dispatch, getState) => {
  const state = getState();
  // get the current localstorage "game state"
  const images = JSON.parse(localStorage.getItem("pixelGameState"));
  // get the active image information from the "game state"
  const activeImage = images[state.activeImage.id];
  // clone the active image and the overall state
  const newActiveImage = {
    ...activeImage
  };
  const newGameState = [
    ...images
  ];
  // update the active image with the filled cells
  // then update the cloned overall state with the active image state
  newActiveImage.image[id] = {
    ...newActiveImage.image[id],
    filled: true
  }
  newActiveImage.stats = state.activeImage.stats;
  newGameState[state.activeImage.id] = newActiveImage;
  // set that on the localStorage
  localStorage.setItem("pixelGameState", JSON.stringify(newGameState))

  return dispatch(fillImageCell(id, state.color.activeColorId));
};

export const selectImage = (id) =>  (dispatch, getState) => {
  const state = getState();
  return dispatch(selectActiveImage(state.initialGameState[id]));
};