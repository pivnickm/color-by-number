import {combineReducers} from 'redux';
import color from './color';
import images from './images';

const rootReducer = combineReducers({
  color,
  activeImage: images
});

export default rootReducer;