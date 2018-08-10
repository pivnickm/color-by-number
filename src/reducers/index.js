import {combineReducers} from "redux";
import color from "./color";
import images from "./images";
import initial from "./initial";

const rootReducer = combineReducers({
  color,
  activeImage: images,
  initialGameState: initial
});

export default rootReducer;