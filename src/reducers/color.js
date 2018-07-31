const initialState = {
  activeColorId: 0
};

export default (state = initialState, action) => {
  switch (action.type) {
  case 'CHANGE_COLOR':
    return { ...initialState, activeColorId: action.payload};
  default:
    return state;
  }
};
