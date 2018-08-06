export const fillImageCell = (id, activeColorId) => ({
  type: 'FILL_CELL',
  payload: { id, activeColorId }
});

export const doFillCell = (id, activeColorId) =>  (dispatch, getState) => {
  const state = getState();
  return dispatch(fillImageCell(id, state.color.activeColorId));
};