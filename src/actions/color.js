export const changeActiveColor = (id) => ({
  type: 'CHANGE_COLOR',
  payload: id
});

export const changeColor = (id) =>  (dispatch) => {
  return dispatch(changeActiveColor(id));
};