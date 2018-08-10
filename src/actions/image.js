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
  return dispatch(fillImageCell(id, state.color.activeColorId));
};

export const selectImage = (id) =>  (dispatch, getState) => {
  const state = getState();
  return dispatch(selectActiveImage(state.initialGameState[id]));
};