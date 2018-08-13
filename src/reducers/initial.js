import images from "../images";

let parsedGameState;
if (window.localStorage) {
  const gameState = localStorage.getItem("pixelGameState");

  if (gameState) {
    parsedGameState = JSON.parse(gameState);
  } else {
    localStorage.setItem("pixelGameState", JSON.stringify(images));
    parsedGameState = images;
  }
} else {
  parsedGameState = images;
}

const initialState = [...parsedGameState];

export default (state = initialState, action) => {
  switch (action.type) {
  default:
    return state;
  }
};
