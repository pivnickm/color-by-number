const images = [{
  id: 0,
  completed: false,
  image: [
    {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true},
    {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true},
    {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true},
    {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: 3, filled: false }, {color: 3, filled: false }, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: 3, filled: false }, {color: 3, filled: false }, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color:"bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true},
    {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: 3, filled: false }, {color: 3, filled: false }, {color: 0, filled: false}, {color: 3, filled: false }, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: 3, filled: false }, {color: 4, filled: false}, {color: 3, filled: false }, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: 3, filled: false }, {color: 3, filled: false }, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true},
    {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: 3, filled: false }, {color: 4, filled: false}, {color: 0, filled: false}, {color: 3, filled: false }, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: 3, filled: false }, {color: 3, filled: false }, {color: 3, filled: false }, {color: 3, filled: false }, {color: 3, filled: false }, {color: "bk", filled: true}, {color: 3, filled: false }, {color: 4, filled: false}, {color: 4, filled: false}, {color: 3, filled: false }, {color: 3, filled: false }, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true},
    {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: 3, filled: false }, {color: 0, filled: false}, {color: 0, filled: false}, {color: 3, filled: false }, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: 3, filled: false }, {color: 0, filled: false}, {color: 0, filled: false}, {color: 0, filled: false}, {color: 0, filled: false}, {color: 0, filled: false}, {color: 3, filled: false }, {color: 4, filled: false}, {color: 4, filled: false}, {color: 1, filled: false}, {color: 1, filled: false}, {color: 3, filled: false }, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true},
    {color: "bk", filled: true}, {color: "bk", filled: true}, {color: 3, filled: false }, {color: 3, filled: false }, {color: 3, filled: false }, {color: 3, filled: false }, {color:"bk", filled: true}, {color: "bk", filled: true}, {color: 3, filled: false }, {color: 3, filled: false }, {color: 0, filled: false}, {color: 0, filled: false}, {color: 0, filled: false}, {color: 3, filled: false }, {color: 3, filled: false }, {color: 0, filled: false}, {color: 3, filled: false }, {color: 4, filled: false}, {color: 3, filled: false }, {color: 1, filled: false}, {color: 3, filled: false }, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true},
    {color: "bk", filled: true}, {color: 3, filled: false }, {color: 4, filled: false}, {color: 0, filled: false}, {color: 3, filled: false }, {color: "bk", filled: true}, {color:"bk", filled: true}, {color: 3, filled: false }, {color: 0, filled: false}, {color: 0, filled: false}, {color: 0, filled: false}, {color: 0, filled: false}, {color: 4, filled: false}, {color: 3, filled: false }, {color: 3, filled: false }, {color: 2, filled: false}, {color: 3, filled: false }, {color: 3, filled: false }, {color: 1, filled: false}, {color: 1, filled: false}, {color: 1, filled: false}, {color: 3, filled: false }, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true},
    {color: "bk", filled: true}, {color: 3, filled: false }, {color: 0, filled: false}, {color: 0, filled: false}, {color: 3, filled: false }, {color: "bk", filled: true}, {color:"bk", filled: true}, {color: 3, filled: false }, {color: 0, filled: false}, {color: 0, filled: false}, {color: 0, filled: false}, {color: 2, filled: false}, {color: 3, filled: false }, {color: 3, filled: false }, {color: 2, filled: false}, {color: 3, filled: false }, {color: 1, filled: false}, {color: 1, filled: false}, {color: 1, filled: false}, {color: 3, filled: false }, {color: 3, filled: false }, {color: 3, filled: false }, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true},
    {color: "bk", filled: true}, {color: "bk", filled: true}, {color: 3, filled: false }, {color: 3, filled: false }, {color: 3, filled: false }, {color: "bk", filled: true}, {color:"bk", filled: true}, {color: 3, filled: false }, {color: 2, filled: false}, {color: 2, filled: false}, {color: 2, filled: false}, {color: 2, filled: false}, {color: 2, filled: false}, {color: 2, filled: false}, {color: 2, filled: false}, {color: 2, filled: false}, {color: 3, filled: false }, {color: 3, filled: false }, {color: 3, filled: false }, {color: 3, filled: false }, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true},
    {color: "bk", filled: true}, {color: "bk", filled: true}, {color: 3, filled: false }, {color: 2, filled: false}, {color: 2, filled: false}, {color: 3, filled: false }, {color:"bk", filled: true}, {color: "bk", filled: true}, {color: 3, filled: false }, {color: 2, filled: false}, {color: 2, filled: false}, {color: 3, filled: false }, {color: 3, filled: false }, {color: 2, filled: false}, {color: 2, filled: false}, {color: 2, filled: false}, {color: 2, filled: false}, {color: 3, filled: false }, {color: 0, filled: false}, {color: 0, filled: false}, {color: 3, filled: false }, {color: 3, filled: false }, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true},
    {color: "bk", filled: true}, {color: "bk", filled: true}, {color: 3, filled: false }, {color: 2, filled: false}, {color: 2, filled: false}, {color: 2, filled: false}, {color: 3, filled: false }, {color: 3, filled: false }, {color: 3, filled: false }, {color: 3, filled: false }, {color: 3, filled: false }, {color: 4, filled: false}, {color: 0, filled: false}, {color: 3, filled: false }, {color: 2, filled: false}, {color: 2, filled: false}, {color: 2, filled: false}, {color: 3, filled: false }, {color: 0, filled: false}, {color: 0, filled: false}, {color: 0, filled: false}, {color: 0, filled: false}, {color: 3, filled: false }, {color: "bk", filled: true}, {color: "bk", filled: true},
    {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: 3, filled: false }, {color: 1, filled: false}, {color: 2, filled: false}, {color: 2, filled: false}, {color: 0, filled: false}, {color: 0, filled: false}, {color: 2, filled: false}, {color: 3, filled: false }, {color: 0, filled: false}, {color: 0, filled: false}, {color: 3, filled: false }, {color: 2, filled: false}, {color: 2, filled: false}, {color: 2, filled: false}, {color: 3, filled: false }, {color: 2, filled: false}, {color: 2, filled: false}, {color: 0, filled: false}, {color: 0, filled: false}, {color: 0, filled: false}, {color: 3, filled: false }, {color: "bk", filled: true},
    {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: 3, filled: false }, {color: 1, filled: false}, {color: 1, filled: false}, {color: 2, filled: false}, {color: 2, filled: false}, {color: 2, filled: false}, {color: 2, filled: false}, {color: 3, filled: false }, {color: 3, filled: false }, {color: 4, filled: false}, {color: 2, filled: false}, {color: 2, filled: false}, {color: 2, filled: false}, {color: 3, filled: false }, {color: 1, filled: false}, {color: 2, filled: false}, {color: 2, filled: false}, {color: 0, filled: false}, {color: 0, filled: false}, {color: 3, filled: false }, {color: "bk", filled: true},
    {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: 3, filled: false }, {color: 3, filled: false }, {color: 1, filled: false}, {color: 1, filled: false}, {color: 1, filled: false}, {color: 3, filled: false }, {color: 4, filled: false}, {color: 4, filled: false}, {color: 1, filled: false}, {color: 2, filled: false}, {color: 2, filled: false}, {color: 3, filled: false }, {color: 3, filled: false }, {color: 3, filled: false }, {color: 2, filled: false}, {color: 2, filled: false}, {color: 2, filled: false}, {color: 2, filled: false}, {color: 3, filled: false }, {color: "bk", filled: true},
    {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: 3, filled: false }, {color: 3, filled: false }, {color: 3, filled: false }, {color: 4, filled: false}, {color: 4, filled: false}, {color: 4, filled: false}, {color: 2, filled: false}, {color: 2, filled: false}, {color: 2, filled: false}, {color: 3, filled: false }, {color: 2, filled: false}, {color: 2, filled: false}, {color: 2, filled: false}, {color: 2, filled: false}, {color: 2, filled: false}, {color: 2, filled: false}, {color: 3, filled: false }, {color: "bk", filled: true},
    {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: 3, filled: false }, {color: 4, filled: false}, {color: 4, filled: false}, {color: 1, filled: false}, {color: 2, filled: false}, {color: 2, filled: false}, {color: 2, filled: false}, {color: 2, filled: false}, {color: 2, filled: false}, {color: 2, filled: false}, {color: 2, filled: false}, {color: 2, filled: false}, {color: 2, filled: false}, {color: 3, filled: false }, {color: "bk", filled: true}, {color: "bk", filled: true},
    {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: 3, filled: false }, {color: 1, filled: false}, {color: 1, filled: false}, {color: 1, filled: false}, {color: 1, filled: false}, {color: 2, filled: false}, {color: 2, filled: false}, {color: 2, filled: false}, {color: 2, filled: false}, {color: 2, filled: false}, {color: 2, filled: false}, {color: 2, filled: false}, {color: 3, filled: false }, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true},
    {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: 3, filled: false }, {color: 3, filled: false }, {color: 1, filled: false}, {color: 1, filled: false}, {color: 1, filled: false}, {color: 1, filled: false}, {color: 2, filled: false}, {color: 2, filled: false}, {color: 2, filled: false}, {color: 3, filled: false }, {color: 3, filled: false }, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true},
    {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: 3, filled: false }, {color: 3, filled: false }, {color: 3, filled: false }, {color: 3, filled: false }, {color: 3, filled: false }, {color: 3, filled: false }, {color: 3, filled: false }, {color: "bk", filled: true}, {color:"bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true},
    {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true},
    {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true},
    {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true},
    {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}
  ],
  colors: [
    "#578dd1", //light-blue
    "#bfbfbf", //gray
    "#1173be", //dark-blue
    "#000",
    "#fff"
  ],
  stats: [39, 26, 76, 116, 18]
}, {
  id: 1,
  completed: false,
  image: [
    {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true},
    {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true},
    {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true},
    {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: 3, filled: false }, {color: 3, filled: false }, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: 3, filled: false }, {color: 3, filled: false }, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color:"bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true},
    {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: 3, filled: false }, {color: 3, filled: false }, {color: 0, filled: false}, {color: 3, filled: false }, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: 3, filled: false }, {color: 4, filled: false}, {color: 3, filled: false }, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: 3, filled: false }, {color: 3, filled: false }, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true},
    {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: 3, filled: false }, {color: 4, filled: false}, {color: 0, filled: false}, {color: 3, filled: false }, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: 3, filled: false }, {color: 3, filled: false }, {color: 3, filled: false }, {color: 3, filled: false }, {color: 3, filled: false }, {color: "bk", filled: true}, {color: 3, filled: false }, {color: 4, filled: false}, {color: 4, filled: false}, {color: 3, filled: false }, {color: 3, filled: false }, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true},
    {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: 3, filled: false }, {color: 0, filled: false}, {color: 0, filled: false}, {color: 3, filled: false }, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: 3, filled: false }, {color: 0, filled: false}, {color: 0, filled: false}, {color: 0, filled: false}, {color: 0, filled: false}, {color: 0, filled: false}, {color: 3, filled: false }, {color: 4, filled: false}, {color: 4, filled: false}, {color: 1, filled: false}, {color: 1, filled: false}, {color: 3, filled: false }, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true},
    {color: "bk", filled: true}, {color: "bk", filled: true}, {color: 3, filled: false }, {color: 3, filled: false }, {color: 3, filled: false }, {color: 3, filled: false }, {color:"bk", filled: true}, {color: "bk", filled: true}, {color: 3, filled: false }, {color: 3, filled: false }, {color: 0, filled: false}, {color: 0, filled: false}, {color: 0, filled: false}, {color: 3, filled: false }, {color: 3, filled: false }, {color: 0, filled: false}, {color: 3, filled: false }, {color: 4, filled: false}, {color: 3, filled: false }, {color: 1, filled: false}, {color: 3, filled: false }, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true},
    {color: "bk", filled: true}, {color: 3, filled: false }, {color: 4, filled: false}, {color: 0, filled: false}, {color: 3, filled: false }, {color: "bk", filled: true}, {color:"bk", filled: true}, {color: 3, filled: false }, {color: 0, filled: false}, {color: 0, filled: false}, {color: 0, filled: false}, {color: 0, filled: false}, {color: 4, filled: false}, {color: 3, filled: false }, {color: 3, filled: false }, {color: 2, filled: false}, {color: 3, filled: false }, {color: 3, filled: false }, {color: 1, filled: false}, {color: 1, filled: false}, {color: 1, filled: false}, {color: 3, filled: false }, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true},
    {color: "bk", filled: true}, {color: 3, filled: false }, {color: 0, filled: false}, {color: 0, filled: false}, {color: 3, filled: false }, {color: "bk", filled: true}, {color:"bk", filled: true}, {color: 3, filled: false }, {color: 0, filled: false}, {color: 0, filled: false}, {color: 0, filled: false}, {color: 2, filled: false}, {color: 3, filled: false }, {color: 3, filled: false }, {color: 2, filled: false}, {color: 3, filled: false }, {color: 1, filled: false}, {color: 1, filled: false}, {color: 1, filled: false}, {color: 3, filled: false }, {color: 3, filled: false }, {color: 3, filled: false }, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true},
    {color: "bk", filled: true}, {color: "bk", filled: true}, {color: 3, filled: false }, {color: 3, filled: false }, {color: 3, filled: false }, {color: "bk", filled: true}, {color:"bk", filled: true}, {color: 3, filled: false }, {color: 2, filled: false}, {color: 2, filled: false}, {color: 2, filled: false}, {color: 2, filled: false}, {color: 2, filled: false}, {color: 2, filled: false}, {color: 2, filled: false}, {color: 2, filled: false}, {color: 3, filled: false }, {color: 3, filled: false }, {color: 3, filled: false }, {color: 3, filled: false }, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true},
    {color: "bk", filled: true}, {color: "bk", filled: true}, {color: 3, filled: false }, {color: 2, filled: false}, {color: 2, filled: false}, {color: 3, filled: false }, {color:"bk", filled: true}, {color: "bk", filled: true}, {color: 3, filled: false }, {color: 2, filled: false}, {color: 2, filled: false}, {color: 3, filled: false }, {color: 3, filled: false }, {color: 2, filled: false}, {color: 2, filled: false}, {color: 2, filled: false}, {color: 2, filled: false}, {color: 3, filled: false }, {color: 0, filled: false}, {color: 0, filled: false}, {color: 3, filled: false }, {color: 3, filled: false }, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true},
    {color: "bk", filled: true}, {color: "bk", filled: true}, {color: 3, filled: false }, {color: 2, filled: false}, {color: 2, filled: false}, {color: 2, filled: false}, {color: 3, filled: false }, {color: 3, filled: false }, {color: 3, filled: false }, {color: 3, filled: false }, {color: 3, filled: false }, {color: 4, filled: false}, {color: 0, filled: false}, {color: 3, filled: false }, {color: 2, filled: false}, {color: 2, filled: false}, {color: 2, filled: false}, {color: 3, filled: false }, {color: 0, filled: false}, {color: 0, filled: false}, {color: 0, filled: false}, {color: 0, filled: false}, {color: 3, filled: false }, {color: "bk", filled: true}, {color: "bk", filled: true},
    {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: 3, filled: false }, {color: 1, filled: false}, {color: 2, filled: false}, {color: 2, filled: false}, {color: 0, filled: false}, {color: 0, filled: false}, {color: 2, filled: false}, {color: 3, filled: false }, {color: 0, filled: false}, {color: 0, filled: false}, {color: 3, filled: false }, {color: 2, filled: false}, {color: 2, filled: false}, {color: 2, filled: false}, {color: 3, filled: false }, {color: 2, filled: false}, {color: 2, filled: false}, {color: 0, filled: false}, {color: 0, filled: false}, {color: 0, filled: false}, {color: 3, filled: false }, {color: "bk", filled: true},
    {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: 3, filled: false }, {color: 1, filled: false}, {color: 1, filled: false}, {color: 2, filled: false}, {color: 2, filled: false}, {color: 2, filled: false}, {color: 2, filled: false}, {color: 3, filled: false }, {color: 3, filled: false }, {color: 4, filled: false}, {color: 2, filled: false}, {color: 2, filled: false}, {color: 2, filled: false}, {color: 3, filled: false }, {color: 1, filled: false}, {color: 2, filled: false}, {color: 2, filled: false}, {color: 0, filled: false}, {color: 0, filled: false}, {color: 3, filled: false }, {color: "bk", filled: true},
    {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: 3, filled: false }, {color: 3, filled: false }, {color: 1, filled: false}, {color: 1, filled: false}, {color: 1, filled: false}, {color: 3, filled: false }, {color: 4, filled: false}, {color: 4, filled: false}, {color: 1, filled: false}, {color: 2, filled: false}, {color: 2, filled: false}, {color: 3, filled: false }, {color: 3, filled: false }, {color: 3, filled: false }, {color: 2, filled: false}, {color: 2, filled: false}, {color: 2, filled: false}, {color: 2, filled: false}, {color: 3, filled: false }, {color: "bk", filled: true},
    {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: 3, filled: false }, {color: 3, filled: false }, {color: 3, filled: false }, {color: 4, filled: false}, {color: 4, filled: false}, {color: 4, filled: false}, {color: 2, filled: false}, {color: 2, filled: false}, {color: 2, filled: false}, {color: 3, filled: false }, {color: 2, filled: false}, {color: 2, filled: false}, {color: 2, filled: false}, {color: 2, filled: false}, {color: 2, filled: false}, {color: 2, filled: false}, {color: 3, filled: false }, {color: "bk", filled: true},
    {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: 3, filled: false }, {color: 4, filled: false}, {color: 4, filled: false}, {color: 1, filled: false}, {color: 2, filled: false}, {color: 2, filled: false}, {color: 2, filled: false}, {color: 2, filled: false}, {color: 2, filled: false}, {color: 2, filled: false}, {color: 2, filled: false}, {color: 2, filled: false}, {color: 2, filled: false}, {color: 3, filled: false }, {color: "bk", filled: true}, {color: "bk", filled: true},
    {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: 3, filled: false }, {color: 1, filled: false}, {color: 1, filled: false}, {color: 1, filled: false}, {color: 1, filled: false}, {color: 2, filled: false}, {color: 2, filled: false}, {color: 2, filled: false}, {color: 2, filled: false}, {color: 2, filled: false}, {color: 2, filled: false}, {color: 2, filled: false}, {color: 3, filled: false }, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true},
    {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: 3, filled: false }, {color: 3, filled: false }, {color: 1, filled: false}, {color: 1, filled: false}, {color: 1, filled: false}, {color: 1, filled: false}, {color: 2, filled: false}, {color: 2, filled: false}, {color: 2, filled: false}, {color: 3, filled: false }, {color: 3, filled: false }, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true},
    {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: 3, filled: false }, {color: 3, filled: false }, {color: 3, filled: false }, {color: 3, filled: false }, {color: 3, filled: false }, {color: 3, filled: false }, {color: 3, filled: false }, {color: "bk", filled: true}, {color:"bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true},
    {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true},
    {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true},
    {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true},
    {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}, {color: "bk", filled: true}
  ],
  colors: [
    "#E799D6", //light-pink
    "#bfbfbf", //gray
    "#D682BF", //dark-pink
    "#000",
    "#fff"
  ],
  stats: [39, 26, 76, 116, 18]
}, {
  id: 2,
  completed: false,
  image: [
    {color:0,filled:false},{color:0,filled:false},{color:0,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:3,filled:false},{color:3,filled:false},{color:3,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:4,filled:false},{color:4,filled:false},{color:4,filled:false},{color:5,filled:false},{color:5,filled:false},{color:5,filled:false},{color:1,filled:false},{color:1,filled:false}
  ],
  colors: [
    "#2ccce4",
    "#000000",
    "#37d67a",
    "#ff8a65",
    "#dce775",
    "#ba68c8"
  ],
  stats: [3, 10, 3, 3, 3, 3]
}, {
  id: 3,
  completed: false,
  image:[
    {color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:0,filled:false},{color:0,filled:false},{color:0,filled:false},{color:0,filled:false},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:0,filled:false},{color:0,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:0,filled:false},{color:0,filled:false},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:0,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:0,filled:false},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:0,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:0,filled:false},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:0,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:0,filled:false},{color:"bk",filled:true},{color:"bk",filled:true},{color:0,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:0,filled:false},{color:0,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:0,filled:false},{color:"bk",filled:true},{color:"bk",filled:true},{color:0,filled:false},{color:0,filled:false},{color:1,filled:false},{color:1,filled:false},{color:0,filled:false},{color:2,filled:false},{color:3,filled:false},{color:0,filled:false},{color:1,filled:false},{color:1,filled:false},{color:0,filled:false},{color:0,filled:false},{color:"bk",filled:true},{color:"bk",filled:true},{color:0,filled:false},{color:2,filled:false},{color:0,filled:false},{color:0,filled:false},{color:0,filled:false},{color:3,filled:false},{color:3,filled:false},{color:0,filled:false},{color:0,filled:false},{color:0,filled:false},{color:3,filled:false},{color:0,filled:false},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:0,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:0,filled:false},{color:0,filled:false},{color:3,filled:false},{color:3,filled:false},{color:3,filled:false},{color:0,filled:false},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:0,filled:false},{color:3,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:3,filled:false},{color:3,filled:false},{color:3,filled:false},{color:3,filled:false},{color:0,filled:false},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:0,filled:false},{color:0,filled:false},{color:3,filled:false},{color:3,filled:false},{color:3,filled:false},{color:3,filled:false},{color:0,filled:false},{color:0,filled:false},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:0,filled:false},{color:0,filled:false},{color:0,filled:false},{color:0,filled:false},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true}
  ],
  colors: [
    "#000000",
    "#fc323c",
    "#ffffff",
    "#c0c0c0"
  ],
  stats: [46, 42, 8, 16]
}, {
  id: 4,
  completed:false,
  image:[{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:0,filled:false},{color:0,filled:false},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:0,filled:false},{color:0,filled:false},{color:"bk",filled:true},{color:0,filled:false},{color:1,filled:false},{color:1,filled:false},{color:0,filled:false},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:0,filled:false},{color:0,filled:false},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:0,filled:false},{color:1,filled:false},{color:1,filled:false},{color:0,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:0,filled:false},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:0,filled:false},{color:2,filled:false},{color:2,filled:false},{color:0,filled:false},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:0,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:0,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:0,filled:false},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:0,filled:false},{color:0,filled:false},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:0,filled:false},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:0,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:0,filled:false},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:0,filled:false},{color:0,filled:false},{color:0,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:0,filled:false},{color:1,filled:false},{color:3,filled:false},{color:1,filled:false},{color:0,filled:false},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:0,filled:false},{color:2,filled:false},{color:2,filled:false},{color:0,filled:false},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:0,filled:false},{color:2,filled:false},{color:0,filled:false},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:0,filled:false},{color:3,filled:false},{color:2,filled:false},{color:2,filled:false},{color:0,filled:false},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:0,filled:false},{color:1,filled:false},{color:1,filled:false},{color:0,filled:false},{color:1,filled:false},{color:1,filled:false},{color:3,filled:false},{color:0,filled:false},{color:3,filled:false},{color:1,filled:false},{color:3,filled:false},{color:0,filled:false},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:0,filled:false},{color:2,filled:false},{color:2,filled:false},{color:0,filled:false},{color:"bk",filled:true},{color:"bk",filled:true},{color:0,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:0,filled:false},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:0,filled:false},{color:3,filled:false},{color:3,filled:false},{color:3,filled:false},{color:0,filled:false},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:0,filled:false},{color:1,filled:false},{color:1,filled:false},{color:0,filled:false},{color:1,filled:false},{color:3,filled:false},{color:1,filled:false},{color:1,filled:false},{color:3,filled:false},{color:1,filled:false},{color:1,filled:false},{color:0,filled:false},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:0,filled:false},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:0,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:0,filled:false},{color:"bk",filled:true},{color:"bk",filled:true},{color:0,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:0,filled:false},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:0,filled:false},{color:1,filled:false},{color:1,filled:false},{color:3,filled:false},{color:0,filled:false},{color:0,filled:false},{color:0,filled:false},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:0,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:0,filled:false},{color:1,filled:false},{color:3,filled:false},{color:3,filled:false},{color:1,filled:false},{color:2,filled:false},{color:2,filled:false},{color:1,filled:false},{color:0,filled:false},{color:"bk",filled:true},{color:0,filled:false},{color:2,filled:false},{color:0,filled:false},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:0,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:0,filled:false},{color:"bk",filled:true},{color:0,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:0,filled:false},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:0,filled:false},{color:0,filled:false},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:0,filled:false},{color:2,filled:false},{color:2,filled:false},{color:1,filled:false},{color:0,filled:false},{color:2,filled:false},{color:2,filled:false},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:0,filled:false},{color:0,filled:false},{color:1,filled:false},{color:1,filled:false},{color:3,filled:false},{color:0,filled:false},{color:3,filled:false},{color:3,filled:false},{color:1,filled:false},{color:1,filled:false},{color:2,filled:false},{color:2,filled:false},{color:3,filled:false},{color:0,filled:false},{color:0,filled:false},{color:2,filled:false},{color:2,filled:false},{color:0,filled:false},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:0,filled:false},{color:2,filled:false},{color:3,filled:false},{color:2,filled:false},{color:0,filled:false},{color:"bk",filled:true},{color:0,filled:false},{color:3,filled:false},{color:2,filled:false},{color:3,filled:false},{color:0,filled:false},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:0,filled:false},{color:2,filled:false},{color:2,filled:false},{color:0,filled:false},{color:"bk",filled:true},{color:"bk",filled:true},{color:1,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:1,filled:false},{color:3,filled:false},{color:3,filled:false},{color:2,filled:false},{color:"bk",filled:true},{color:"bk",filled:true},{color:0,filled:false},{color:1,filled:false},{color:1,filled:false},{color:0,filled:false},{color:3,filled:false},{color:1,filled:false},{color:0,filled:false},{color:3,filled:false},{color:1,filled:false},{color:2,filled:false},{color:1,filled:false},{color:2,filled:false},{color:2,filled:false},{color:3,filled:false},{color:0,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:0,filled:false},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:0,filled:false},{color:3,filled:false},{color:2,filled:false},{color:3,filled:false},{color:0,filled:false},{color:0,filled:false},{color:3,filled:false},{color:2,filled:false},{color:3,filled:false},{color:2,filled:false},{color:0,filled:false},{color:"bk",filled:true},{color:"bk",filled:true},{color:0,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:0,filled:false},{color:"bk",filled:true},{color:0,filled:false},{color:3,filled:false},{color:2,filled:false},{color:2,filled:false},{color:0,filled:false},{color:1,filled:false},{color:3,filled:false},{color:3,filled:false},{color:"bk",filled:true},{color:"bk",filled:true},{color:0,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:3,filled:false},{color:3,filled:false},{color:1,filled:false},{color:2,filled:false},{color:2,filled:false},{color:1,filled:false},{color:2,filled:false},{color:2,filled:false},{color:3,filled:false},{color:0,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:0,filled:false},{color:"bk",filled:true},{color:0,filled:false},{color:3,filled:false},{color:2,filled:false},{color:3,filled:false},{color:2,filled:false},{color:0,filled:false},{color:0,filled:false},{color:2,filled:false},{color:3,filled:false},{color:2,filled:false},{color:0,filled:false},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:0,filled:false},{color:3,filled:false},{color:2,filled:false},{color:3,filled:false},{color:2,filled:false},{color:0,filled:false},{color:"bk",filled:true},{color:0,filled:false},{color:3,filled:false},{color:2,filled:false},{color:2,filled:false},{color:0,filled:false},{color:2,filled:false},{color:1,filled:false},{color:3,filled:false},{color:"bk",filled:true},{color:"bk",filled:true},{color:0,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:0,filled:false},{color:3,filled:false},{color:3,filled:false},{color:1,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:1,filled:false},{color:2,filled:false},{color:3,filled:false},{color:0,filled:false},{color:0,filled:false},{color:2,filled:false},{color:3,filled:false},{color:2,filled:false},{color:0,filled:false},{color:"bk",filled:true},{color:0,filled:false},{color:3,filled:false},{color:3,filled:false},{color:3,filled:false},{color:3,filled:false},{color:0,filled:false},{color:0,filled:false},{color:3,filled:false},{color:3,filled:false},{color:3,filled:false},{color:0,filled:false},{color:"bk",filled:true},{color:"bk",filled:true},{color:0,filled:false},{color:3,filled:false},{color:2,filled:false},{color:3,filled:false},{color:2,filled:false},{color:0,filled:false},{color:"bk",filled:true},{color:0,filled:false},{color:3,filled:false},{color:2,filled:false},{color:2,filled:false},{color:1,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:1,filled:false},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:0,filled:false},{color:1,filled:false},{color:3,filled:false},{color:0,filled:false},{color:3,filled:false},{color:1,filled:false},{color:3,filled:false},{color:1,filled:false},{color:2,filled:false},{color:2,filled:false},{color:1,filled:false},{color:2,filled:false},{color:3,filled:false},{color:3,filled:false},{color:0,filled:false},{color:3,filled:false},{color:2,filled:false},{color:3,filled:false},{color:0,filled:false},{color:"bk",filled:true},{color:0,filled:false},{color:3,filled:false},{color:3,filled:false},{color:3,filled:false},{color:3,filled:false},{color:0,filled:false},{color:3,filled:false},{color:3,filled:false},{color:3,filled:false},{color:3,filled:false},{color:0,filled:false},{color:0,filled:false},{color:0,filled:false},{color:0,filled:false},{color:3,filled:false},{color:3,filled:false},{color:2,filled:false},{color:3,filled:false},{color:0,filled:false},{color:"bk",filled:true},{color:0,filled:false},{color:3,filled:false},{color:2,filled:false},{color:2,filled:false},{color:1,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:0,filled:false},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:0,filled:false},{color:3,filled:false},{color:1,filled:false},{color:3,filled:false},{color:0,filled:false},{color:2,filled:false},{color:1,filled:false},{color:1,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:3,filled:false},{color:0,filled:false},{color:2,filled:false},{color:3,filled:false},{color:2,filled:false},{color:0,filled:false},{color:0,filled:false},{color:3,filled:false},{color:0,filled:false},{color:3,filled:false},{color:3,filled:false},{color:3,filled:false},{color:0,filled:false},{color:3,filled:false},{color:3,filled:false},{color:3,filled:false},{color:3,filled:false},{color:0,filled:false},{color:3,filled:false},{color:3,filled:false},{color:0,filled:false},{color:3,filled:false},{color:3,filled:false},{color:3,filled:false},{color:0,filled:false},{color:"bk",filled:true},{color:0,filled:false},{color:3,filled:false},{color:3,filled:false},{color:2,filled:false},{color:1,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:1,filled:false},{color:0,filled:false},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:0,filled:false},{color:3,filled:false},{color:3,filled:false},{color:1,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:1,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:3,filled:false},{color:0,filled:false},{color:3,filled:false},{color:2,filled:false},{color:3,filled:false},{color:0,filled:false},{color:0,filled:false},{color:3,filled:false},{color:0,filled:false},{color:3,filled:false},{color:3,filled:false},{color:3,filled:false},{color:0,filled:false},{color:3,filled:false},{color:3,filled:false},{color:3,filled:false},{color:0,filled:false},{color:3,filled:false},{color:3,filled:false},{color:0,filled:false},{color:3,filled:false},{color:3,filled:false},{color:3,filled:false},{color:3,filled:false},{color:0,filled:false},{color:"bk",filled:true},{color:0,filled:false},{color:3,filled:false},{color:2,filled:false},{color:1,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:1,filled:false},{color:1,filled:false},{color:0,filled:false},{color:"bk",filled:true},{color:"bk",filled:true},{color:0,filled:false},{color:0,filled:false},{color:0,filled:false},{color:1,filled:false},{color:3,filled:false},{color:1,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:3,filled:false},{color:3,filled:false},{color:0,filled:false},{color:3,filled:false},{color:3,filled:false},{color:0,filled:false},{color:3,filled:false},{color:3,filled:false},{color:0,filled:false},{color:3,filled:false},{color:3,filled:false},{color:0,filled:false},{color:3,filled:false},{color:3,filled:false},{color:3,filled:false},{color:3,filled:false},{color:0,filled:false},{color:3,filled:false},{color:3,filled:false},{color:0,filled:false},{color:3,filled:false},{color:3,filled:false},{color:3,filled:false},{color:0,filled:false},{color:"bk",filled:true},{color:0,filled:false},{color:3,filled:false},{color:3,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:1,filled:false},{color:1,filled:false},{color:2,filled:false},{color:1,filled:false},{color:"bk",filled:true},{color:0,filled:false},{color:1,filled:false},{color:1,filled:false},{color:0,filled:false},{color:0,filled:false},{color:3,filled:false},{color:3,filled:false},{color:1,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:3,filled:false},{color:0,filled:false},{color:3,filled:false},{color:3,filled:false},{color:3,filled:false},{color:0,filled:false},{color:3,filled:false},{color:0,filled:false},{color:3,filled:false},{color:3,filled:false},{color:0,filled:false},{color:3,filled:false},{color:3,filled:false},{color:3,filled:false},{color:0,filled:false},{color:3,filled:false},{color:3,filled:false},{color:0,filled:false},{color:3,filled:false},{color:3,filled:false},{color:3,filled:false},{color:3,filled:false},{color:0,filled:false},{color:0,filled:false},{color:3,filled:false},{color:3,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:1,filled:false},{color:1,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:1,filled:false},{color:"bk",filled:true},{color:0,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:3,filled:false},{color:1,filled:false},{color:3,filled:false},{color:3,filled:false},{color:1,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:3,filled:false},{color:0,filled:false},{color:3,filled:false},{color:3,filled:false},{color:3,filled:false},{color:0,filled:false},{color:3,filled:false},{color:3,filled:false},{color:3,filled:false},{color:3,filled:false},{color:0,filled:false},{color:3,filled:false},{color:3,filled:false},{color:3,filled:false},{color:0,filled:false},{color:3,filled:false},{color:3,filled:false},{color:0,filled:false},{color:3,filled:false},{color:3,filled:false},{color:3,filled:false},{color:0,filled:false},{color:0,filled:false},{color:3,filled:false},{color:3,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:1,filled:false},{color:"bk",filled:true},{color:0,filled:false},{color:1,filled:false},{color:1,filled:false},{color:3,filled:false},{color:1,filled:false},{color:3,filled:false},{color:3,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:3,filled:false},{color:3,filled:false},{color:0,filled:false},{color:3,filled:false},{color:3,filled:false},{color:0,filled:false},{color:3,filled:false},{color:3,filled:false},{color:3,filled:false},{color:3,filled:false},{color:3,filled:false},{color:3,filled:false},{color:3,filled:false},{color:3,filled:false},{color:3,filled:false},{color:3,filled:false},{color:3,filled:false},{color:3,filled:false},{color:3,filled:false},{color:3,filled:false},{color:0,filled:false},{color:0,filled:false},{color:3,filled:false},{color:3,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:1,filled:false},{color:1,filled:false},{color:3,filled:false},{color:"bk",filled:true},{color:"bk",filled:true},{color:0,filled:false},{color:3,filled:false},{color:1,filled:false},{color:3,filled:false},{color:3,filled:false},{color:1,filled:false},{color:2,filled:false},{color:2,filled:false},{color:1,filled:false},{color:1,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:3,filled:false},{color:0,filled:false},{color:3,filled:false},{color:3,filled:false},{color:3,filled:false},{color:0,filled:false},{color:3,filled:false},{color:3,filled:false},{color:3,filled:false},{color:3,filled:false},{color:3,filled:false},{color:3,filled:false},{color:3,filled:false},{color:3,filled:false},{color:3,filled:false},{color:3,filled:false},{color:3,filled:false},{color:0,filled:false},{color:0,filled:false},{color:3,filled:false},{color:3,filled:false},{color:3,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:3,filled:false},{color:3,filled:false},{color:3,filled:false},{color:"bk",filled:true},{color:"bk",filled:true},{color:0,filled:false},{color:0,filled:false},{color:0,filled:false},{color:1,filled:false},{color:3,filled:false},{color:1,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:3,filled:false},{color:2,filled:false},{color:0,filled:false},{color:3,filled:false},{color:3,filled:false},{color:0,filled:false},{color:0,filled:false},{color:0,filled:false},{color:0,filled:false},{color:3,filled:false},{color:3,filled:false},{color:3,filled:false},{color:3,filled:false},{color:3,filled:false},{color:3,filled:false},{color:3,filled:false},{color:0,filled:false},{color:0,filled:false},{color:3,filled:false},{color:3,filled:false},{color:3,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:1,filled:false},{color:3,filled:false},{color:3,filled:false},{color:0,filled:false},{color:"bk",filled:true},{color:0,filled:false},{color:1,filled:false},{color:3,filled:false},{color:0,filled:false},{color:0,filled:false},{color:3,filled:false},{color:3,filled:false},{color:1,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:3,filled:false},{color:2,filled:false},{color:0,filled:false},{color:0,filled:false},{color:0,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:0,filled:false},{color:0,filled:false},{color:0,filled:false},{color:3,filled:false},{color:3,filled:false},{color:0,filled:false},{color:0,filled:false},{color:3,filled:false},{color:3,filled:false},{color:3,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:1,filled:false},{color:1,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:1,filled:false},{color:3,filled:false},{color:1,filled:false},{color:3,filled:false},{color:"bk",filled:true},{color:0,filled:false},{color:1,filled:false},{color:1,filled:false},{color:3,filled:false},{color:1,filled:false},{color:0,filled:false},{color:0,filled:false},{color:3,filled:false},{color:1,filled:false},{color:1,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:0,filled:false},{color:0,filled:false},{color:3,filled:false},{color:2,filled:false},{color:3,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:0,filled:false},{color:0,filled:false},{color:3,filled:false},{color:3,filled:false},{color:2,filled:false},{color:3,filled:false},{color:2,filled:false},{color:3,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:3,filled:false},{color:3,filled:false},{color:3,filled:false},{color:1,filled:false},{color:"bk",filled:true},{color:0,filled:false},{color:1,filled:false},{color:3,filled:false},{color:1,filled:false},{color:3,filled:false},{color:3,filled:false},{color:3,filled:false},{color:1,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:1,filled:false},{color:2,filled:false},{color:3,filled:false},{color:2,filled:false},{color:3,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:0,filled:false},{color:0,filled:false},{color:0,filled:false},{color:3,filled:false},{color:3,filled:false},{color:3,filled:false},{color:2,filled:false},{color:3,filled:false},{color:2,filled:false},{color:3,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:1,filled:false},{color:3,filled:false},{color:3,filled:false},{color:3,filled:false},{color:3,filled:false},{color:1,filled:false},{color:3,filled:false},{color:"bk",filled:true},{color:"bk",filled:true},{color:0,filled:false},{color:0,filled:false},{color:3,filled:false},{color:1,filled:false},{color:3,filled:false},{color:1,filled:false},{color:2,filled:false},{color:0,filled:false},{color:0,filled:false},{color:0,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:0,filled:false},{color:3,filled:false},{color:3,filled:false},{color:2,filled:false},{color:3,filled:false},{color:2,filled:false},{color:3,filled:false},{color:2,filled:false},{color:0,filled:false},{color:3,filled:false},{color:2,filled:false},{color:3,filled:false},{color:2,filled:false},{color:3,filled:false},{color:2,filled:false},{color:3,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:1,filled:false},{color:1,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:1,filled:false},{color:3,filled:false},{color:3,filled:false},{color:0,filled:false},{color:0,filled:false},{color:0,filled:false},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:0,filled:false},{color:0,filled:false},{color:0,filled:false},{color:0,filled:false},{color:0,filled:false},{color:1,filled:false},{color:3,filled:false},{color:0,filled:false},{color:3,filled:false},{color:0,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:0,filled:false},{color:3,filled:false},{color:3,filled:false},{color:2,filled:false},{color:3,filled:false},{color:2,filled:false},{color:3,filled:false},{color:2,filled:false},{color:1,filled:false},{color:3,filled:false},{color:2,filled:false},{color:3,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:1,filled:false},{color:1,filled:false},{color:2,filled:false},{color:2,filled:false},{color:1,filled:false},{color:3,filled:false},{color:3,filled:false},{color:1,filled:false},{color:3,filled:false},{color:1,filled:false},{color:0,filled:false},{color:"bk",filled:true},{color:"bk",filled:true},{color:0,filled:false},{color:1,filled:false},{color:1,filled:false},{color:0,filled:false},{color:3,filled:false},{color:3,filled:false},{color:3,filled:false},{color:1,filled:false},{color:3,filled:false},{color:3,filled:false},{color:3,filled:false},{color:0,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:0,filled:false},{color:3,filled:false},{color:2,filled:false},{color:3,filled:false},{color:2,filled:false},{color:3,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:3,filled:false},{color:3,filled:false},{color:2,filled:false},{color:2,filled:false},{color:0,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:1,filled:false},{color:1,filled:false},{color:2,filled:false},{color:2,filled:false},{color:1,filled:false},{color:3,filled:false},{color:1,filled:false},{color:1,filled:false},{color:3,filled:false},{color:3,filled:false},{color:1,filled:false},{color:3,filled:false},{color:1,filled:false},{color:3,filled:false},{color:1,filled:false},{color:"bk",filled:true},{color:"bk",filled:true},{color:0,filled:false},{color:1,filled:false},{color:0,filled:false},{color:1,filled:false},{color:1,filled:false},{color:3,filled:false},{color:3,filled:false},{color:1,filled:false},{color:3,filled:false},{color:3,filled:false},{color:3,filled:false},{color:0,filled:false},{color:2,filled:false},{color:2,filled:false},{color:1,filled:false},{color:2,filled:false},{color:2,filled:false},{color:3,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:0,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:1,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:1,filled:false},{color:1,filled:false},{color:3,filled:false},{color:3,filled:false},{color:3,filled:false},{color:3,filled:false},{color:3,filled:false},{color:1,filled:false},{color:0,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:0,filled:false},{color:3,filled:false},{color:3,filled:false},{color:3,filled:false},{color:1,filled:false},{color:3,filled:false},{color:3,filled:false},{color:1,filled:false},{color:3,filled:false},{color:3,filled:false},{color:0,filled:false},{color:2,filled:false},{color:2,filled:false},{color:0,filled:false},{color:2,filled:false},{color:1,filled:false},{color:1,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:1,filled:false},{color:2,filled:false},{color:2,filled:false},{color:1,filled:false},{color:1,filled:false},{color:2,filled:false},{color:2,filled:false},{color:1,filled:false},{color:3,filled:false},{color:3,filled:false},{color:3,filled:false},{color:3,filled:false},{color:1,filled:false},{color:3,filled:false},{color:1,filled:false},{color:3,filled:false},{color:1,filled:false},{color:0,filled:false},{color:0,filled:false},{color:0,filled:false},{color:1,filled:false},{color:"bk",filled:true},{color:"bk",filled:true},{color:0,filled:false},{color:3,filled:false},{color:3,filled:false},{color:3,filled:false},{color:3,filled:false},{color:1,filled:false},{color:3,filled:false},{color:3,filled:false},{color:1,filled:false},{color:3,filled:false},{color:0,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:0,filled:false},{color:1,filled:false},{color:3,filled:false},{color:1,filled:false},{color:1,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:0,filled:false},{color:1,filled:false},{color:1,filled:false},{color:3,filled:false},{color:3,filled:false},{color:1,filled:false},{color:1,filled:false},{color:3,filled:false},{color:3,filled:false},{color:1,filled:false},{color:3,filled:false},{color:1,filled:false},{color:3,filled:false},{color:1,filled:false},{color:3,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:0,filled:false},{color:"bk",filled:true},{color:0,filled:false},{color:"bk",filled:true},{color:"bk",filled:true},{color:0,filled:false},{color:3,filled:false},{color:3,filled:false},{color:1,filled:false},{color:3,filled:false},{color:1,filled:false},{color:3,filled:false},{color:3,filled:false},{color:1,filled:false},{color:3,filled:false},{color:0,filled:false},{color:2,filled:false},{color:2,filled:false},{color:0,filled:false},{color:1,filled:false},{color:3,filled:false},{color:3,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:1,filled:false},{color:3,filled:false},{color:3,filled:false},{color:3,filled:false},{color:3,filled:false},{color:3,filled:false},{color:3,filled:false},{color:1,filled:false},{color:3,filled:false},{color:1,filled:false},{color:3,filled:false},{color:1,filled:false},{color:3,filled:false},{color:0,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:0,filled:false},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:0,filled:false},{color:3,filled:false},{color:1,filled:false},{color:3,filled:false},{color:3,filled:false},{color:1,filled:false},{color:3,filled:false},{color:1,filled:false},{color:3,filled:false},{color:0,filled:false},{color:2,filled:false},{color:2,filled:false},{color:0,filled:false},{color:0,filled:false},{color:3,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:0,filled:false},{color:0,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:0,filled:false},{color:1,filled:false},{color:3,filled:false},{color:1,filled:false},{color:3,filled:false},{color:1,filled:false},{color:3,filled:false},{color:0,filled:false},{color:1,filled:false},{color:3,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:0,filled:false},{color:1,filled:false},{color:1,filled:false},{color:0,filled:false},{color:"bk",filled:true},{color:0,filled:false},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:0,filled:false},{color:1,filled:false},{color:1,filled:false},{color:3,filled:false},{color:3,filled:false},{color:1,filled:false},{color:3,filled:false},{color:3,filled:false},{color:1,filled:false},{color:3,filled:false},{color:0,filled:false},{color:0,filled:false},{color:2,filled:false},{color:2,filled:false},{color:0,filled:false},{color:1,filled:false},{color:1,filled:false},{color:0,filled:false},{color:0,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:0,filled:false},{color:3,filled:false},{color:1,filled:false},{color:0,filled:false},{color:1,filled:false},{color:3,filled:false},{color:1,filled:false},{color:3,filled:false},{color:0,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:0,filled:false},{color:0,filled:false},{color:0,filled:false},{color:0,filled:false},{color:2,filled:false},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:0,filled:false},{color:1,filled:false},{color:3,filled:false},{color:3,filled:false},{color:1,filled:false},{color:3,filled:false},{color:3,filled:false},{color:1,filled:false},{color:3,filled:false},{color:0,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:0,filled:false},{color:1,filled:false},{color:0,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:0,filled:false},{color:1,filled:false},{color:3,filled:false},{color:0,filled:false},{color:0,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:0,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:0,filled:false},{color:3,filled:false},{color:3,filled:false},{color:3,filled:false},{color:3,filled:false},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:0,filled:false},{color:1,filled:false},{color:3,filled:false},{color:3,filled:false},{color:1,filled:false},{color:3,filled:false},{color:3,filled:false},{color:1,filled:false},{color:2,filled:false},{color:0,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:1,filled:false},{color:0,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:0,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:0,filled:false},{color:0,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:0,filled:false},{color:0,filled:false},{color:1,filled:false},{color:1,filled:false},{color:0,filled:false},{color:0,filled:false},{color:3,filled:false},{color:3,filled:false},{color:3,filled:false},{color:3,filled:false},{color:2,filled:false},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:0,filled:false},{color:1,filled:false},{color:3,filled:false},{color:3,filled:false},{color:1,filled:false},{color:3,filled:false},{color:3,filled:false},{color:1,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:0,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:0,filled:false},{color:1,filled:false},{color:0,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:0,filled:false},{color:0,filled:false},{color:1,filled:false},{color:0,filled:false},{color:3,filled:false},{color:0,filled:false},{color:0,filled:false},{color:0,filled:false},{color:3,filled:false},{color:3,filled:false},{color:3,filled:false},{color:3,filled:false},{color:0,filled:false},{color:0,filled:false},{color:0,filled:false},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:0,filled:false},{color:1,filled:false},{color:3,filled:false},{color:3,filled:false},{color:1,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:1,filled:false},{color:1,filled:false},{color:2,filled:false},{color:0,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:0,filled:false},{color:1,filled:false},{color:1,filled:false},{color:0,filled:false},{color:1,filled:false},{color:1,filled:false},{color:0,filled:false},{color:0,filled:false},{color:0,filled:false},{color:0,filled:false},{color:3,filled:false},{color:3,filled:false},{color:3,filled:false},{color:3,filled:false},{color:3,filled:false},{color:0,filled:false},{color:0,filled:false},{color:0,filled:false},{color:0,filled:false},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:0,filled:false},{color:3,filled:false},{color:3,filled:false},{color:1,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:0,filled:false},{color:0,filled:false},{color:1,filled:false},{color:2,filled:false},{color:0,filled:false},{color:0,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:0,filled:false},{color:2,filled:false},{color:0,filled:false},{color:0,filled:false},{color:2,filled:false},{color:0,filled:false},{color:0,filled:false},{color:0,filled:false},{color:3,filled:false},{color:3,filled:false},{color:0,filled:false},{color:0,filled:false},{color:3,filled:false},{color:3,filled:false},{color:3,filled:false},{color:3,filled:false},{color:3,filled:false},{color:3,filled:false},{color:0,filled:false},{color:0,filled:false},{color:0,filled:false},{color:0,filled:false},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:0,filled:false},{color:1,filled:false},{color:3,filled:false},{color:3,filled:false},{color:1,filled:false},{color:2,filled:false},{color:2,filled:false},{color:1,filled:false},{color:0,filled:false},{color:0,filled:false},{color:0,filled:false},{color:2,filled:false},{color:0,filled:false},{color:0,filled:false},{color:0,filled:false},{color:0,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:0,filled:false},{color:0,filled:false},{color:0,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:0,filled:false},{color:1,filled:false},{color:0,filled:false},{color:0,filled:false},{color:3,filled:false},{color:3,filled:false},{color:3,filled:false},{color:0,filled:false},{color:0,filled:false},{color:3,filled:false},{color:3,filled:false},{color:3,filled:false},{color:2,filled:false},{color:3,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:0,filled:false},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:0,filled:false},{color:0,filled:false},{color:1,filled:false},{color:3,filled:false},{color:1,filled:false},{color:2,filled:false},{color:2,filled:false},{color:0,filled:false},{color:3,filled:false},{color:1,filled:false},{color:0,filled:false},{color:2,filled:false},{color:0,filled:false},{color:0,filled:false},{color:3,filled:false},{color:0,filled:false},{color:0,filled:false},{color:0,filled:false},{color:0,filled:false},{color:0,filled:false},{color:0,filled:false},{color:0,filled:false},{color:0,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:0,filled:false},{color:3,filled:false},{color:0,filled:false},{color:0,filled:false},{color:3,filled:false},{color:3,filled:false},{color:3,filled:false},{color:3,filled:false},{color:0,filled:false},{color:0,filled:false},{color:3,filled:false},{color:3,filled:false},{color:2,filled:false},{color:3,filled:false},{color:2,filled:false},{color:2,filled:false},{color:0,filled:false},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:0,filled:false},{color:0,filled:false},{color:0,filled:false},{color:3,filled:false},{color:3,filled:false},{color:0,filled:false},{color:0,filled:false},{color:2,filled:false},{color:2,filled:false},{color:1,filled:false},{color:0,filled:false},{color:1,filled:false},{color:3,filled:false},{color:0,filled:false},{color:2,filled:false},{color:0,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:3,filled:false},{color:0,filled:false},{color:3,filled:false},{color:3,filled:false},{color:3,filled:false},{color:0,filled:false},{color:0,filled:false},{color:3,filled:false},{color:0,filled:false},{color:2,filled:false},{color:0,filled:false},{color:2,filled:false},{color:0,filled:false},{color:0,filled:false},{color:3,filled:false},{color:0,filled:false},{color:3,filled:false},{color:3,filled:false},{color:3,filled:false},{color:3,filled:false},{color:0,filled:false},{color:"bk",filled:true},{color:0,filled:false},{color:0,filled:false},{color:3,filled:false},{color:2,filled:false},{color:2,filled:false},{color:0,filled:false},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:0,filled:false},{color:1,filled:false},{color:3,filled:false},{color:3,filled:false},{color:3,filled:false},{color:3,filled:false},{color:3,filled:false},{color:3,filled:false},{color:0,filled:false},{color:0,filled:false},{color:0,filled:false},{color:3,filled:false},{color:1,filled:false},{color:2,filled:false},{color:0,filled:false},{color:2,filled:false},{color:0,filled:false},{color:3,filled:false},{color:2,filled:false},{color:2,filled:false},{color:0,filled:false},{color:3,filled:false},{color:3,filled:false},{color:3,filled:false},{color:3,filled:false},{color:0,filled:false},{color:0,filled:false},{color:3,filled:false},{color:0,filled:false},{color:2,filled:false},{color:0,filled:false},{color:0,filled:false},{color:3,filled:false},{color:0,filled:false},{color:3,filled:false},{color:3,filled:false},{color:0,filled:false},{color:3,filled:false},{color:3,filled:false},{color:3,filled:false},{color:3,filled:false},{color:0,filled:false},{color:"bk",filled:true},{color:"bk",filled:true},{color:0,filled:false},{color:0,filled:false},{color:2,filled:false},{color:2,filled:false},{color:0,filled:false},{color:"bk",filled:true},{color:"bk",filled:true},{color:0,filled:false},{color:3,filled:false},{color:3,filled:false},{color:3,filled:false},{color:3,filled:false},{color:3,filled:false},{color:3,filled:false},{color:3,filled:false},{color:1,filled:false},{color:2,filled:false},{color:0,filled:false},{color:0,filled:false},{color:1,filled:false},{color:0,filled:false},{color:0,filled:false},{color:2,filled:false},{color:0,filled:false},{color:3,filled:false},{color:0,filled:false},{color:0,filled:false},{color:3,filled:false},{color:0,filled:false},{color:0,filled:false},{color:3,filled:false},{color:3,filled:false},{color:3,filled:false},{color:0,filled:false},{color:3,filled:false},{color:0,filled:false},{color:0,filled:false},{color:0,filled:false},{color:3,filled:false},{color:0,filled:false},{color:0,filled:false},{color:3,filled:false},{color:3,filled:false},{color:3,filled:false},{color:3,filled:false},{color:0,filled:false},{color:3,filled:false},{color:3,filled:false},{color:0,filled:false},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:0,filled:false},{color:0,filled:false},{color:"bk",filled:true},{color:"bk",filled:true},{color:1,filled:false},{color:3,filled:false},{color:3,filled:false},{color:3,filled:false},{color:3,filled:false},{color:3,filled:false},{color:3,filled:false},{color:3,filled:false},{color:3,filled:false},{color:0,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:0,filled:false},{color:0,filled:false},{color:0,filled:false},{color:2,filled:false},{color:0,filled:false},{color:3,filled:false},{color:3,filled:false},{color:0,filled:false},{color:0,filled:false},{color:0,filled:false},{color:0,filled:false},{color:3,filled:false},{color:3,filled:false},{color:3,filled:false},{color:0,filled:false},{color:0,filled:false},{color:3,filled:false},{color:3,filled:false},{color:3,filled:false},{color:0,filled:false},{color:3,filled:false},{color:3,filled:false},{color:0,filled:false},{color:0,filled:false},{color:3,filled:false},{color:3,filled:false},{color:3,filled:false},{color:0,filled:false},{color:0,filled:false},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:0,filled:false},{color:3,filled:false},{color:3,filled:false},{color:3,filled:false},{color:3,filled:false},{color:3,filled:false},{color:3,filled:false},{color:3,filled:false},{color:3,filled:false},{color:2,filled:false},{color:2,filled:false},{color:0,filled:false},{color:0,filled:false},{color:2,filled:false},{color:0,filled:false},{color:1,filled:false},{color:0,filled:false},{color:3,filled:false},{color:3,filled:false},{color:3,filled:false},{color:0,filled:false},{color:3,filled:false},{color:3,filled:false},{color:0,filled:false},{color:3,filled:false},{color:3,filled:false},{color:3,filled:false},{color:0,filled:false},{color:0,filled:false},{color:3,filled:false},{color:3,filled:false},{color:3,filled:false},{color:0,filled:false},{color:3,filled:false},{color:3,filled:false},{color:3,filled:false},{color:3,filled:false},{color:0,filled:false},{color:3,filled:false},{color:3,filled:false},{color:3,filled:false},{color:0,filled:false},{color:0,filled:false},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:0,filled:false},{color:3,filled:false},{color:3,filled:false},{color:3,filled:false},{color:3,filled:false},{color:3,filled:false},{color:3,filled:false},{color:3,filled:false},{color:2,filled:false},{color:2,filled:false},{color:0,filled:false},{color:0,filled:false},{color:2,filled:false},{color:2,filled:false},{color:0,filled:false},{color:2,filled:false},{color:0,filled:false},{color:2,filled:false},{color:3,filled:false},{color:3,filled:false},{color:0,filled:false},{color:3,filled:false},{color:2,filled:false},{color:0,filled:false},{color:3,filled:false},{color:3,filled:false},{color:3,filled:false},{color:0,filled:false},{color:3,filled:false},{color:0,filled:false},{color:3,filled:false},{color:3,filled:false},{color:3,filled:false},{color:0,filled:false},{color:3,filled:false},{color:3,filled:false},{color:3,filled:false},{color:0,filled:false},{color:3,filled:false},{color:3,filled:false},{color:3,filled:false},{color:3,filled:false},{color:2,filled:false},{color:0,filled:false},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:0,filled:false},{color:3,filled:false},{color:3,filled:false},{color:3,filled:false},{color:3,filled:false},{color:3,filled:false},{color:2,filled:false},{color:0,filled:false},{color:0,filled:false},{color:0,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:0,filled:false},{color:2,filled:false},{color:0,filled:false},{color:2,filled:false},{color:2,filled:false},{color:0,filled:false},{color:3,filled:false},{color:2,filled:false},{color:3,filled:false},{color:0,filled:false},{color:3,filled:false},{color:3,filled:false},{color:3,filled:false},{color:0,filled:false},{color:3,filled:false},{color:0,filled:false},{color:3,filled:false},{color:3,filled:false},{color:3,filled:false},{color:0,filled:false},{color:3,filled:false},{color:3,filled:false},{color:3,filled:false},{color:0,filled:false},{color:0,filled:false},{color:3,filled:false},{color:3,filled:false},{color:2,filled:false},{color:3,filled:false},{color:2,filled:false},{color:0,filled:false},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:0,filled:false},{color:3,filled:false},{color:3,filled:false},{color:3,filled:false},{color:2,filled:false},{color:2,filled:false},{color:0,filled:false},{color:"bk",filled:true},{color:0,filled:false},{color:0,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:0,filled:false},{color:2,filled:false},{color:0,filled:false},{color:2,filled:false},{color:0,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:0,filled:false},{color:0,filled:false},{color:2,filled:false},{color:3,filled:false},{color:3,filled:false},{color:0,filled:false},{color:"bk",filled:true},{color:0,filled:false},{color:3,filled:false},{color:3,filled:false},{color:3,filled:false},{color:0,filled:false},{color:0,filled:false},{color:0,filled:false},{color:"bk",filled:true},{color:"bk",filled:true},{color:0,filled:false},{color:2,filled:false},{color:3,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:0,filled:false},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:1,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:0,filled:false},{color:"bk",filled:true},{color:"bk",filled:true},{color:1,filled:false},{color:0,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:0,filled:false},{color:2,filled:false},{color:0,filled:false},{color:0,filled:false},{color:0,filled:false},{color:2,filled:false},{color:2,filled:false},{color:0,filled:false},{color:"bk",filled:true},{color:0,filled:false},{color:3,filled:false},{color:2,filled:false},{color:3,filled:false},{color:0,filled:false},{color:"bk",filled:true},{color:0,filled:false},{color:3,filled:false},{color:3,filled:false},{color:3,filled:false},{color:0,filled:false},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:0,filled:false},{color:2,filled:false},{color:2,filled:false},{color:0,filled:false},{color:0,filled:false},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:0,filled:false},{color:2,filled:false},{color:2,filled:false},{color:0,filled:false},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:0,filled:false},{color:0,filled:false},{color:3,filled:false},{color:2,filled:false},{color:0,filled:false},{color:0,filled:false},{color:2,filled:false},{color:0,filled:false},{color:"bk",filled:true},{color:0,filled:false},{color:2,filled:false},{color:2,filled:false},{color:0,filled:false},{color:"bk",filled:true},{color:0,filled:false},{color:2,filled:false},{color:3,filled:false},{color:2,filled:false},{color:0,filled:false},{color:"bk",filled:true},{color:"bk",filled:true},{color:0,filled:false},{color:2,filled:false},{color:3,filled:false},{color:2,filled:false},{color:0,filled:false},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:0,filled:false},{color:2,filled:false},{color:2,filled:false},{color:0,filled:false},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:0,filled:false},{color:2,filled:false},{color:0,filled:false},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:0,filled:false},{color:0,filled:false},{color:2,filled:false},{color:2,filled:false},{color:0,filled:false},{color:2,filled:false},{color:0,filled:false},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:0,filled:false},{color:2,filled:false},{color:0,filled:false},{color:"bk",filled:true},{color:0,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:0,filled:false},{color:"bk",filled:true},{color:"bk",filled:true},{color:0,filled:false},{color:3,filled:false},{color:2,filled:false},{color:3,filled:false},{color:0,filled:false},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:0,filled:false},{color:0,filled:false},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:0,filled:false},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:1,filled:false},{color:0,filled:false},{color:2,filled:false},{color:0,filled:false},{color:0,filled:false},{color:2,filled:false},{color:0,filled:false},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:0,filled:false},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:0,filled:false},{color:2,filled:false},{color:2,filled:false},{color:0,filled:false},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:0,filled:false},{color:3,filled:false},{color:2,filled:false},{color:2,filled:false},{color:0,filled:false},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true}],
  colors:["#000000","#387818","#f83818","#f8f8f8"], //green, orange, off-white
  stats: [0, 0, 0]
},{
  id: 5,
  completed:false,
  image:[{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:0,filled:false},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:0,filled:false},{color:1,filled:false},{color:1,filled:false},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:1,filled:false},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:1,filled:false},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:0,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:0,filled:false},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:1,filled:false},{color:1,filled:false},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:0,filled:false},{color:1,filled:false},{color:1,filled:false},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:0,filled:false},{color:1,filled:false},{color:1,filled:false},{color:0,filled:false},{color:0,filled:false},{color:1,filled:false},{color:1,filled:false},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:1,filled:false},{color:"bk",filled:true},{color:"bk",filled:true},{color:0,filled:false},{color:0,filled:false},{color:1,filled:false},{color:1,filled:false},{color:"bk",filled:true},{color:0,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:0,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:0,filled:false},{color:0,filled:false},{color:0,filled:false},{color:1,filled:false},{color:1,filled:false},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:0,filled:false},{color:1,filled:false},{color:0,filled:false},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:0,filled:false},{color:1,filled:false},{color:1,filled:false},{color:"bk",filled:true},{color:0,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:0,filled:false},{color:0,filled:false},{color:0,filled:false},{color:0,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:0,filled:false},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:0,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:0,filled:false},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:0,filled:false},{color:1,filled:false},{color:0,filled:false},{color:1,filled:false},{color:0,filled:false},{color:0,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:0,filled:false},{color:1,filled:false},{color:0,filled:false},{color:0,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:0,filled:false},{color:"bk",filled:true},{color:0,filled:false},{color:1,filled:false},{color:0,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:0,filled:false},{color:1,filled:false},{color:0,filled:false},{color:1,filled:false},{color:0,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:0,filled:false},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:1,filled:false},{color:1,filled:false},{color:0,filled:false},{color:0,filled:false},{color:0,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:0,filled:false},{color:1,filled:false},{color:0,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:0,filled:false},{color:1,filled:false},{color:1,filled:false},{color:0,filled:false},{color:0,filled:false},{color:0,filled:false},{color:0,filled:false},{color:0,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:0,filled:false},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:0,filled:false},{color:1,filled:false},{color:1,filled:false},{color:0,filled:false},{color:0,filled:false},{color:0,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:0,filled:false},{color:1,filled:false},{color:1,filled:false},{color:0,filled:false},{color:0,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:0,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:0,filled:false},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:0,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:0,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:0,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:0,filled:false},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:0,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:0,filled:false},{color:0,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:0,filled:false},{color:0,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:"bk",filled:true},{color:"bk",filled:true},{color:0,filled:false},{color:1,filled:false},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:0,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:0,filled:false},{color:0,filled:false},{color:0,filled:false},{color:1,filled:false},{color:1,filled:false},{color:0,filled:false},{color:0,filled:false},{color:2,filled:false},{color:2,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:0,filled:false},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:0,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:0,filled:false},{color:0,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:0,filled:false},{color:0,filled:false},{color:0,filled:false},{color:0,filled:false},{color:0,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:0,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:0,filled:false},{color:0,filled:false},{color:0,filled:false},{color:0,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:0,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:0,filled:false},{color:0,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:0,filled:false},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:0,filled:false},{color:1,filled:false},{color:0,filled:false},{color:1,filled:false},{color:1,filled:false},{color:2,filled:false},{color:2,filled:false},{color:0,filled:false},{color:0,filled:false},{color:0,filled:false},{color:1,filled:false},{color:1,filled:false},{color:0,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:0,filled:false},{color:2,filled:false},{color:2,filled:false},{color:1,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:0,filled:false},{color:0,filled:false},{color:1,filled:false},{color:0,filled:false},{color:1,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:0,filled:false},{color:0,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:2,filled:false},{color:2,filled:false},{color:1,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:0,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:0,filled:false},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:0,filled:false},{color:0,filled:false},{color:0,filled:false},{color:1,filled:false},{color:1,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:1,filled:false},{color:2,filled:false},{color:0,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:0,filled:false},{color:0,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:0,filled:false},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:0,filled:false},{color:0,filled:false},{color:1,filled:false},{color:0,filled:false},{color:1,filled:false},{color:1,filled:false},{color:2,filled:false},{color:2,filled:false},{color:2,filled:false},{color:1,filled:false},{color:2,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:0,filled:false},{color:3,filled:false},{color:3,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:0,filled:false},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:0,filled:false},{color:0,filled:false},{color:0,filled:false},{color:0,filled:false},{color:1,filled:false},{color:0,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:0,filled:false},{color:0,filled:false},{color:0,filled:false},{color:3,filled:false},{color:3,filled:false},{color:3,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:0,filled:false},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:0,filled:false},{color:0,filled:false},{color:0,filled:false},{color:0,filled:false},{color:0,filled:false},{color:3,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:0,filled:false},{color:0,filled:false},{color:0,filled:false},{color:3,filled:false},{color:3,filled:false},{color:3,filled:false},{color:3,filled:false},{color:0,filled:false},{color:3,filled:false},{color:3,filled:false},{color:0,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:0,filled:false},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:1,filled:false},{color:0,filled:false},{color:0,filled:false},{color:0,filled:false},{color:0,filled:false},{color:3,filled:false},{color:0,filled:false},{color:0,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:0,filled:false},{color:0,filled:false},{color:3,filled:false},{color:3,filled:false},{color:3,filled:false},{color:3,filled:false},{color:0,filled:false},{color:3,filled:false},{color:3,filled:false},{color:3,filled:false},{color:3,filled:false},{color:0,filled:false},{color:3,filled:false},{color:3,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:1,filled:false},{color:0,filled:false},{color:0,filled:false},{color:0,filled:false},{color:0,filled:false},{color:3,filled:false},{color:3,filled:false},{color:3,filled:false},{color:0,filled:false},{color:3,filled:false},{color:3,filled:false},{color:3,filled:false},{color:0,filled:false},{color:3,filled:false},{color:3,filled:false},{color:3,filled:false},{color:3,filled:false},{color:3,filled:false},{color:3,filled:false},{color:0,filled:false},{color:3,filled:false},{color:3,filled:false},{color:3,filled:false},{color:3,filled:false},{color:0,filled:false},{color:3,filled:false},{color:0,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:1,filled:false},{color:0,filled:false},{color:0,filled:false},{color:0,filled:false},{color:0,filled:false},{color:1,filled:false},{color:3,filled:false},{color:3,filled:false},{color:0,filled:false},{color:3,filled:false},{color:3,filled:false},{color:3,filled:false},{color:0,filled:false},{color:3,filled:false},{color:3,filled:false},{color:3,filled:false},{color:3,filled:false},{color:3,filled:false},{color:3,filled:false},{color:0,filled:false},{color:3,filled:false},{color:3,filled:false},{color:3,filled:false},{color:3,filled:false},{color:0,filled:false},{color:3,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:1,filled:false},{color:1,filled:false},{color:0,filled:false},{color:0,filled:false},{color:0,filled:false},{color:0,filled:false},{color:0,filled:false},{color:3,filled:false},{color:3,filled:false},{color:0,filled:false},{color:3,filled:false},{color:3,filled:false},{color:3,filled:false},{color:0,filled:false},{color:3,filled:false},{color:3,filled:false},{color:3,filled:false},{color:3,filled:false},{color:3,filled:false},{color:3,filled:false},{color:0,filled:false},{color:3,filled:false},{color:3,filled:false},{color:3,filled:false},{color:3,filled:false},{color:0,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:0,filled:false},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:1,filled:false},{color:0,filled:false},{color:1,filled:false},{color:0,filled:false},{color:0,filled:false},{color:0,filled:false},{color:0,filled:false},{color:0,filled:false},{color:1,filled:false},{color:3,filled:false},{color:0,filled:false},{color:3,filled:false},{color:3,filled:false},{color:3,filled:false},{color:0,filled:false},{color:3,filled:false},{color:3,filled:false},{color:3,filled:false},{color:3,filled:false},{color:3,filled:false},{color:3,filled:false},{color:0,filled:false},{color:3,filled:false},{color:3,filled:false},{color:0,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:0,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:0,filled:false},{color:0,filled:false},{color:0,filled:false},{color:1,filled:false},{color:0,filled:false},{color:0,filled:false},{color:0,filled:false},{color:0,filled:false},{color:0,filled:false},{color:0,filled:false},{color:1,filled:false},{color:0,filled:false},{color:3,filled:false},{color:3,filled:false},{color:3,filled:false},{color:0,filled:false},{color:3,filled:false},{color:3,filled:false},{color:3,filled:false},{color:3,filled:false},{color:3,filled:false},{color:3,filled:false},{color:0,filled:false},{color:0,filled:false},{color:0,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:0,filled:false},{color:0,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:1,filled:false},{color:0,filled:false},{color:0,filled:false},{color:0,filled:false},{color:0,filled:false},{color:1,filled:false},{color:0,filled:false},{color:0,filled:false},{color:0,filled:false},{color:1,filled:false},{color:0,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:0,filled:false},{color:0,filled:false},{color:0,filled:false},{color:0,filled:false},{color:0,filled:false},{color:0,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:0,filled:false},{color:0,filled:false},{color:0,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:0,filled:false},{color:0,filled:false},{color:0,filled:false},{color:0,filled:false},{color:1,filled:false},{color:1,filled:false},{color:0,filled:false},{color:0,filled:false},{color:0,filled:false},{color:0,filled:false},{color:0,filled:false},{color:1,filled:false},{color:0,filled:false},{color:1,filled:false},{color:0,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:0,filled:false},{color:0,filled:false},{color:1,filled:false},{color:0,filled:false},{color:1,filled:false},{color:1,filled:false},{color:0,filled:false},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:1,filled:false},{color:0,filled:false},{color:0,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:0,filled:false},{color:0,filled:false},{color:0,filled:false},{color:0,filled:false},{color:0,filled:false},{color:0,filled:false},{color:1,filled:false},{color:0,filled:false},{color:1,filled:false},{color:0,filled:false},{color:1,filled:false},{color:0,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:0,filled:false},{color:1,filled:false},{color:0,filled:false},{color:1,filled:false},{color:1,filled:false},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:0,filled:false},{color:0,filled:false},{color:0,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:0,filled:false},{color:0,filled:false},{color:0,filled:false},{color:0,filled:false},{color:1,filled:false},{color:0,filled:false},{color:1,filled:false},{color:0,filled:false},{color:1,filled:false},{color:0,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:0,filled:false},{color:0,filled:false},{color:1,filled:false},{color:1,filled:false},{color:0,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:1,filled:false},{color:0,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:0,filled:false},{color:0,filled:false},{color:0,filled:false},{color:0,filled:false},{color:0,filled:false},{color:1,filled:false},{color:0,filled:false},{color:1,filled:false},{color:0,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:"bk",filled:true},{color:"bk",filled:true},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:"bk",filled:true},{color:"bk",filled:true},{color:1,filled:false},{color:1,filled:false},{color:0,filled:false},{color:0,filled:false},{color:0,filled:false},{color:0,filled:false},{color:0,filled:false},{color:1,filled:false},{color:0,filled:false},{color:1,filled:false},{color:0,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:0,filled:false},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:1,filled:false},{color:"bk",filled:true},{color:"bk",filled:true},{color:1,filled:false},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:0,filled:false},{color:1,filled:false},{color:1,filled:false},{color:0,filled:false},{color:1,filled:false},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:1,filled:false},{color:0,filled:false},{color:0,filled:false},{color:0,filled:false},{color:0,filled:false},{color:1,filled:false},{color:0,filled:false},{color:1,filled:false},{color:0,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:0,filled:false},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:1,filled:false},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:1,filled:false},{color:0,filled:false},{color:1,filled:false},{color:0,filled:false},{color:1,filled:false},{color:0,filled:false},{color:1,filled:false},{color:0,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:0,filled:false},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:1,filled:false},{color:1,filled:false},{color:0,filled:false},{color:1,filled:false},{color:0,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:0,filled:false},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:0,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:0,filled:false},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:1,filled:false},{color:1,filled:false},{color:0,filled:false},{color:0,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:1,filled:false},{color:0,filled:false},{color:1,filled:false},{color:0,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:1,filled:false},{color:0,filled:false},{color:1,filled:false},{color:0,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:1,filled:false},{color:0,filled:false},{color:1,filled:false},{color:1,filled:false},{color:0,filled:false},{color:0,filled:false},{color:0,filled:false},{color:0,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:0,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:1,filled:false},{color:1,filled:false},{color:0,filled:false},{color:0,filled:false},{color:0,filled:false},{color:0,filled:false},{color:0,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:0,filled:false},{color:0,filled:false},{color:0,filled:false},{color:0,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:0,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:0,filled:false},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:1,filled:false},{color:0,filled:false},{color:0,filled:false},{color:0,filled:false},{color:0,filled:false},{color:0,filled:false},{color:1,filled:false},{color:1,filled:false},{color:0,filled:false},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:0,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:0,filled:false},{color:"bk",filled:true},{color:"bk",filled:true},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:1,filled:false},{color:0,filled:false},{color:0,filled:false},{color:0,filled:false},{color:0,filled:false},{color:1,filled:false},{color:1,filled:false},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:0,filled:false},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:1,filled:false},{color:0,filled:false},{color:0,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:1,filled:false},{color:1,filled:false},{color:1,filled:false},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:1,filled:false},{color:0,filled:false},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:1,filled:false},{color:0,filled:false},{color:1,filled:false},{color:1,filled:false},{color:0,filled:false},{color:1,filled:false},{color:1,filled:false},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true},{color:"bk",filled:true}],
  colors:["#880098","#000000","#f84010","#f8f8f8"],
  stats: [0, 0, 0, 0]
  }, {
    id: 6,
    completed: false,
    image: [
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": 0,
        "filled": false
      },
      {
        "color": 1,
        "filled": false
      },
      {
        "color": 2,
        "filled": false
      },
      {
        "color": 3,
        "filled": false
      },
      {
        "color": 4,
        "filled": false
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": 5,
        "filled": false
      },
      {
        "color": 6,
        "filled": false
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": 7,
        "filled": false
      },
      {
        "color": 6,
        "filled": false
      },
      {
        "color": 8,
        "filled": false
      },
      {
        "color": 9,
        "filled": false
      },
      {
        "color": 10,
        "filled": false
      },
      {
        "color": 11,
        "filled": false
      },
      {
        "color": 12,
        "filled": false
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": 13,
        "filled": false
      },
      {
        "color": 14,
        "filled": false
      },
      {
        "color": 15,
        "filled": false
      },
      {
        "color": 16,
        "filled": false
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": 17,
        "filled": false
      },
      {
        "color": 18,
        "filled": false
      },
      {
        "color": 14,
        "filled": false
      },
      {
        "color": 14,
        "filled": false
      },
      {
        "color": 19,
        "filled": false
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": 20,
        "filled": false
      },
      {
        "color": 21,
        "filled": false
      },
      {
        "color": 22,
        "filled": false
      },
      {
        "color": 23,
        "filled": false
      },
      {
        "color": 24,
        "filled": false
      },
      {
        "color": 25,
        "filled": false
      },
      {
        "color": 26,
        "filled": false
      },
      {
        "color": 27,
        "filled": false
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": 28,
        "filled": false
      },
      {
        "color": 29,
        "filled": false
      },
      {
        "color": 30,
        "filled": false
      },
      {
        "color": 30,
        "filled": false
      },
      {
        "color": 31,
        "filled": false
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": 32,
        "filled": false
      },
      {
        "color": 33,
        "filled": false
      },
      {
        "color": 34,
        "filled": false
      },
      {
        "color": 35,
        "filled": false
      },
      {
        "color": 30,
        "filled": false
      },
      {
        "color": 36,
        "filled": false
      },
      {
        "color": 3,
        "filled": false
      },
      {
        "color": 37,
        "filled": false
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": 38,
        "filled": false
      },
      {
        "color": 39,
        "filled": false
      },
      {
        "color": 40,
        "filled": false
      },
      {
        "color": 24,
        "filled": false
      },
      {
        "color": 24,
        "filled": false
      },
      {
        "color": 41,
        "filled": false
      },
      {
        "color": 42,
        "filled": false
      },
      {
        "color": 43,
        "filled": false
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": 44,
        "filled": false
      },
      {
        "color": 45,
        "filled": false
      },
      {
        "color": 30,
        "filled": false
      },
      {
        "color": 30,
        "filled": false
      },
      {
        "color": 30,
        "filled": false
      },
      {
        "color": 46,
        "filled": false
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": 47,
        "filled": false
      },
      {
        "color": 48,
        "filled": false
      },
      {
        "color": 49,
        "filled": false
      },
      {
        "color": 50,
        "filled": false
      },
      {
        "color": 30,
        "filled": false
      },
      {
        "color": 51,
        "filled": false
      },
      {
        "color": 52,
        "filled": false
      },
      {
        "color": 53,
        "filled": false
      },
      {
        "color": 14,
        "filled": false
      },
      {
        "color": 44,
        "filled": false
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": 54,
        "filled": false
      },
      {
        "color": 55,
        "filled": false
      },
      {
        "color": 23,
        "filled": false
      },
      {
        "color": 24,
        "filled": false
      },
      {
        "color": 24,
        "filled": false
      },
      {
        "color": 56,
        "filled": false
      },
      {
        "color": 57,
        "filled": false
      },
      {
        "color": 58,
        "filled": false
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": 59,
        "filled": false
      },
      {
        "color": 60,
        "filled": false
      },
      {
        "color": 30,
        "filled": false
      },
      {
        "color": 30,
        "filled": false
      },
      {
        "color": 30,
        "filled": false
      },
      {
        "color": 61,
        "filled": false
      },
      {
        "color": 62,
        "filled": false
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": 43,
        "filled": false
      },
      {
        "color": 63,
        "filled": false
      },
      {
        "color": 64,
        "filled": false
      },
      {
        "color": 30,
        "filled": false
      },
      {
        "color": 65,
        "filled": false
      },
      {
        "color": 66,
        "filled": false
      },
      {
        "color": 67,
        "filled": false
      },
      {
        "color": 68,
        "filled": false
      },
      {
        "color": 28,
        "filled": false
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": 69,
        "filled": false
      },
      {
        "color": 70,
        "filled": false
      },
      {
        "color": 71,
        "filled": false
      },
      {
        "color": 72,
        "filled": false
      },
      {
        "color": 24,
        "filled": false
      },
      {
        "color": 24,
        "filled": false
      },
      {
        "color": 73,
        "filled": false
      },
      {
        "color": 74,
        "filled": false
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": 75,
        "filled": false
      },
      {
        "color": 76,
        "filled": false
      },
      {
        "color": 77,
        "filled": false
      },
      {
        "color": 30,
        "filled": false
      },
      {
        "color": 30,
        "filled": false
      },
      {
        "color": 78,
        "filled": false
      },
      {
        "color": 79,
        "filled": false
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": 80,
        "filled": false
      },
      {
        "color": 30,
        "filled": false
      },
      {
        "color": 30,
        "filled": false
      },
      {
        "color": 36,
        "filled": false
      },
      {
        "color": 81,
        "filled": false
      },
      {
        "color": 82,
        "filled": false
      },
      {
        "color": 83,
        "filled": false
      },
      {
        "color": 1,
        "filled": false
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": 84,
        "filled": false
      },
      {
        "color": 85,
        "filled": false
      },
      {
        "color": 86,
        "filled": false
      },
      {
        "color": 87,
        "filled": false
      },
      {
        "color": 88,
        "filled": false
      },
      {
        "color": 89,
        "filled": false
      },
      {
        "color": 56,
        "filled": false
      },
      {
        "color": 90,
        "filled": false
      },
      {
        "color": 0,
        "filled": false
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": 1,
        "filled": false
      },
      {
        "color": 91,
        "filled": false
      },
      {
        "color": 92,
        "filled": false
      },
      {
        "color": 30,
        "filled": false
      },
      {
        "color": 30,
        "filled": false
      },
      {
        "color": 30,
        "filled": false
      },
      {
        "color": 59,
        "filled": false
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": 30,
        "filled": false
      },
      {
        "color": 30,
        "filled": false
      },
      {
        "color": 30,
        "filled": false
      },
      {
        "color": 93,
        "filled": false
      },
      {
        "color": 94,
        "filled": false
      },
      {
        "color": 95,
        "filled": false
      },
      {
        "color": 96,
        "filled": false
      },
      {
        "color": 97,
        "filled": false
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": 74,
        "filled": false
      },
      {
        "color": 98,
        "filled": false
      },
      {
        "color": 99,
        "filled": false
      },
      {
        "color": 99,
        "filled": false
      },
      {
        "color": 99,
        "filled": false
      },
      {
        "color": 100,
        "filled": false
      },
      {
        "color": 13,
        "filled": false
      },
      {
        "color": 101,
        "filled": false
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": 102,
        "filled": false
      },
      {
        "color": 103,
        "filled": false
      },
      {
        "color": 92,
        "filled": false
      },
      {
        "color": 30,
        "filled": false
      },
      {
        "color": 30,
        "filled": false
      },
      {
        "color": 104,
        "filled": false
      },
      {
        "color": 105,
        "filled": false
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": 106,
        "filled": false
      },
      {
        "color": 107,
        "filled": false
      },
      {
        "color": 30,
        "filled": false
      },
      {
        "color": 30,
        "filled": false
      },
      {
        "color": 108,
        "filled": false
      },
      {
        "color": 109,
        "filled": false
      },
      {
        "color": 94,
        "filled": false
      },
      {
        "color": 110,
        "filled": false
      },
      {
        "color": 91,
        "filled": false
      },
      {
        "color": 1,
        "filled": false
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": 14,
        "filled": false
      },
      {
        "color": 111,
        "filled": false
      },
      {
        "color": 99,
        "filled": false
      },
      {
        "color": 99,
        "filled": false
      },
      {
        "color": 99,
        "filled": false
      },
      {
        "color": 99,
        "filled": false
      },
      {
        "color": 112,
        "filled": false
      },
      {
        "color": 113,
        "filled": false
      },
      {
        "color": 114,
        "filled": false
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": 97,
        "filled": false
      },
      {
        "color": 115,
        "filled": false
      },
      {
        "color": 116,
        "filled": false
      },
      {
        "color": 30,
        "filled": false
      },
      {
        "color": 30,
        "filled": false
      },
      {
        "color": 117,
        "filled": false
      },
      {
        "color": 118,
        "filled": false
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": 119,
        "filled": false
      },
      {
        "color": 120,
        "filled": false
      },
      {
        "color": 30,
        "filled": false
      },
      {
        "color": 121,
        "filled": false
      },
      {
        "color": 122,
        "filled": false
      },
      {
        "color": 123,
        "filled": false
      },
      {
        "color": 124,
        "filled": false
      },
      {
        "color": 125,
        "filled": false
      },
      {
        "color": 126,
        "filled": false
      },
      {
        "color": 43,
        "filled": false
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": 46,
        "filled": false
      },
      {
        "color": 127,
        "filled": false
      },
      {
        "color": 128,
        "filled": false
      },
      {
        "color": 99,
        "filled": false
      },
      {
        "color": 99,
        "filled": false
      },
      {
        "color": 99,
        "filled": false
      },
      {
        "color": 99,
        "filled": false
      },
      {
        "color": 115,
        "filled": false
      },
      {
        "color": 129,
        "filled": false
      },
      {
        "color": 130,
        "filled": false
      },
      {
        "color": 6,
        "filled": false
      },
      {
        "color": 6,
        "filled": false
      },
      {
        "color": 6,
        "filled": false
      },
      {
        "color": 7,
        "filled": false
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": 97,
        "filled": false
      },
      {
        "color": 131,
        "filled": false
      },
      {
        "color": 30,
        "filled": false
      },
      {
        "color": 30,
        "filled": false
      },
      {
        "color": 30,
        "filled": false
      },
      {
        "color": 37,
        "filled": false
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": 132,
        "filled": false
      },
      {
        "color": 133,
        "filled": false
      },
      {
        "color": 14,
        "filled": false
      },
      {
        "color": 14,
        "filled": false
      },
      {
        "color": 14,
        "filled": false
      },
      {
        "color": 14,
        "filled": false
      },
      {
        "color": 58,
        "filled": false
      },
      {
        "color": 129,
        "filled": false
      },
      {
        "color": 30,
        "filled": false
      },
      {
        "color": 30,
        "filled": false
      },
      {
        "color": 134,
        "filled": false
      },
      {
        "color": 135,
        "filled": false
      },
      {
        "color": 99,
        "filled": false
      },
      {
        "color": 99,
        "filled": false
      },
      {
        "color": 136,
        "filled": false
      },
      {
        "color": 6,
        "filled": false
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": 6,
        "filled": false
      },
      {
        "color": 136,
        "filled": false
      },
      {
        "color": 99,
        "filled": false
      },
      {
        "color": 99,
        "filled": false
      },
      {
        "color": 99,
        "filled": false
      },
      {
        "color": 99,
        "filled": false
      },
      {
        "color": 99,
        "filled": false
      },
      {
        "color": 115,
        "filled": false
      },
      {
        "color": 15,
        "filled": false
      },
      {
        "color": 137,
        "filled": false
      },
      {
        "color": 136,
        "filled": false
      },
      {
        "color": 136,
        "filled": false
      },
      {
        "color": 138,
        "filled": false
      },
      {
        "color": 59,
        "filled": false
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": 139,
        "filled": false
      },
      {
        "color": 140,
        "filled": false
      },
      {
        "color": 30,
        "filled": false
      },
      {
        "color": 30,
        "filled": false
      },
      {
        "color": 30,
        "filled": false
      },
      {
        "color": 141,
        "filled": false
      },
      {
        "color": 39,
        "filled": false
      },
      {
        "color": 142,
        "filled": false
      },
      {
        "color": 143,
        "filled": false
      },
      {
        "color": 144,
        "filled": false
      },
      {
        "color": 144,
        "filled": false
      },
      {
        "color": 145,
        "filled": false
      },
      {
        "color": 146,
        "filled": false
      },
      {
        "color": 147,
        "filled": false
      },
      {
        "color": 148,
        "filled": false
      },
      {
        "color": 30,
        "filled": false
      },
      {
        "color": 30,
        "filled": false
      },
      {
        "color": 149,
        "filled": false
      },
      {
        "color": 99,
        "filled": false
      },
      {
        "color": 99,
        "filled": false
      },
      {
        "color": 99,
        "filled": false
      },
      {
        "color": 136,
        "filled": false
      },
      {
        "color": 6,
        "filled": false
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": 46,
        "filled": false
      },
      {
        "color": 150,
        "filled": false
      },
      {
        "color": 151,
        "filled": false
      },
      {
        "color": 99,
        "filled": false
      },
      {
        "color": 99,
        "filled": false
      },
      {
        "color": 99,
        "filled": false
      },
      {
        "color": 99,
        "filled": false
      },
      {
        "color": 99,
        "filled": false
      },
      {
        "color": 143,
        "filled": false
      },
      {
        "color": 144,
        "filled": false
      },
      {
        "color": 152,
        "filled": false
      },
      {
        "color": 99,
        "filled": false
      },
      {
        "color": 153,
        "filled": false
      },
      {
        "color": 154,
        "filled": false
      },
      {
        "color": 43,
        "filled": false
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": 155,
        "filled": false
      },
      {
        "color": 156,
        "filled": false
      },
      {
        "color": 30,
        "filled": false
      },
      {
        "color": 30,
        "filled": false
      },
      {
        "color": 30,
        "filled": false
      },
      {
        "color": 157,
        "filled": false
      },
      {
        "color": 158,
        "filled": false
      },
      {
        "color": 159,
        "filled": false
      },
      {
        "color": 99,
        "filled": false
      },
      {
        "color": 99,
        "filled": false
      },
      {
        "color": 160,
        "filled": false
      },
      {
        "color": 161,
        "filled": false
      },
      {
        "color": 162,
        "filled": false
      },
      {
        "color": 163,
        "filled": false
      },
      {
        "color": 30,
        "filled": false
      },
      {
        "color": 30,
        "filled": false
      },
      {
        "color": 30,
        "filled": false
      },
      {
        "color": 164,
        "filled": false
      },
      {
        "color": 99,
        "filled": false
      },
      {
        "color": 99,
        "filled": false
      },
      {
        "color": 99,
        "filled": false
      },
      {
        "color": 165,
        "filled": false
      },
      {
        "color": 166,
        "filled": false
      },
      {
        "color": 167,
        "filled": false
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": 1,
        "filled": false
      },
      {
        "color": 91,
        "filled": false
      },
      {
        "color": 99,
        "filled": false
      },
      {
        "color": 99,
        "filled": false
      },
      {
        "color": 99,
        "filled": false
      },
      {
        "color": 99,
        "filled": false
      },
      {
        "color": 99,
        "filled": false
      },
      {
        "color": 99,
        "filled": false
      },
      {
        "color": 168,
        "filled": false
      },
      {
        "color": 99,
        "filled": false
      },
      {
        "color": 99,
        "filled": false
      },
      {
        "color": 99,
        "filled": false
      },
      {
        "color": 111,
        "filled": false
      },
      {
        "color": 37,
        "filled": false
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": 169,
        "filled": false
      },
      {
        "color": 30,
        "filled": false
      },
      {
        "color": 30,
        "filled": false
      },
      {
        "color": 170,
        "filled": false
      },
      {
        "color": 171,
        "filled": false
      },
      {
        "color": 172,
        "filled": false
      },
      {
        "color": 95,
        "filled": false
      },
      {
        "color": 173,
        "filled": false
      },
      {
        "color": 174,
        "filled": false
      },
      {
        "color": 175,
        "filled": false
      },
      {
        "color": 176,
        "filled": false
      },
      {
        "color": 177,
        "filled": false
      },
      {
        "color": 178,
        "filled": false
      },
      {
        "color": 163,
        "filled": false
      },
      {
        "color": 30,
        "filled": false
      },
      {
        "color": 30,
        "filled": false
      },
      {
        "color": 30,
        "filled": false
      },
      {
        "color": 99,
        "filled": false
      },
      {
        "color": 99,
        "filled": false
      },
      {
        "color": 99,
        "filled": false
      },
      {
        "color": 99,
        "filled": false
      },
      {
        "color": 99,
        "filled": false
      },
      {
        "color": 179,
        "filled": false
      },
      {
        "color": 180,
        "filled": false
      },
      {
        "color": 101,
        "filled": false
      },
      {
        "color": 1,
        "filled": false
      },
      {
        "color": 91,
        "filled": false
      },
      {
        "color": 99,
        "filled": false
      },
      {
        "color": 99,
        "filled": false
      },
      {
        "color": 99,
        "filled": false
      },
      {
        "color": 99,
        "filled": false
      },
      {
        "color": 99,
        "filled": false
      },
      {
        "color": 99,
        "filled": false
      },
      {
        "color": 99,
        "filled": false
      },
      {
        "color": 99,
        "filled": false
      },
      {
        "color": 99,
        "filled": false
      },
      {
        "color": 181,
        "filled": false
      },
      {
        "color": 182,
        "filled": false
      },
      {
        "color": 183,
        "filled": false
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": 1,
        "filled": false
      },
      {
        "color": 184,
        "filled": false
      },
      {
        "color": 185,
        "filled": false
      },
      {
        "color": 186,
        "filled": false
      },
      {
        "color": 187,
        "filled": false
      },
      {
        "color": 188,
        "filled": false
      },
      {
        "color": 189,
        "filled": false
      },
      {
        "color": 190,
        "filled": false
      },
      {
        "color": 191,
        "filled": false
      },
      {
        "color": 192,
        "filled": false
      },
      {
        "color": 164,
        "filled": false
      },
      {
        "color": 193,
        "filled": false
      },
      {
        "color": 187,
        "filled": false
      },
      {
        "color": 194,
        "filled": false
      },
      {
        "color": 195,
        "filled": false
      },
      {
        "color": 30,
        "filled": false
      },
      {
        "color": 30,
        "filled": false
      },
      {
        "color": 196,
        "filled": false
      },
      {
        "color": 99,
        "filled": false
      },
      {
        "color": 99,
        "filled": false
      },
      {
        "color": 99,
        "filled": false
      },
      {
        "color": 99,
        "filled": false
      },
      {
        "color": 99,
        "filled": false
      },
      {
        "color": 197,
        "filled": false
      },
      {
        "color": 198,
        "filled": false
      },
      {
        "color": 199,
        "filled": false
      },
      {
        "color": 200,
        "filled": false
      },
      {
        "color": 99,
        "filled": false
      },
      {
        "color": 99,
        "filled": false
      },
      {
        "color": 99,
        "filled": false
      },
      {
        "color": 201,
        "filled": false
      },
      {
        "color": 202,
        "filled": false
      },
      {
        "color": 99,
        "filled": false
      },
      {
        "color": 99,
        "filled": false
      },
      {
        "color": 99,
        "filled": false
      },
      {
        "color": 99,
        "filled": false
      },
      {
        "color": 98,
        "filled": false
      },
      {
        "color": 74,
        "filled": false
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": 203,
        "filled": false
      },
      {
        "color": 204,
        "filled": false
      },
      {
        "color": 205,
        "filled": false
      },
      {
        "color": 187,
        "filled": false
      },
      {
        "color": 187,
        "filled": false
      },
      {
        "color": 187,
        "filled": false
      },
      {
        "color": 206,
        "filled": false
      },
      {
        "color": 187,
        "filled": false
      },
      {
        "color": 207,
        "filled": false
      },
      {
        "color": 208,
        "filled": false
      },
      {
        "color": 209,
        "filled": false
      },
      {
        "color": 35,
        "filled": false
      },
      {
        "color": 35,
        "filled": false
      },
      {
        "color": 210,
        "filled": false
      },
      {
        "color": 211,
        "filled": false
      },
      {
        "color": 30,
        "filled": false
      },
      {
        "color": 30,
        "filled": false
      },
      {
        "color": 212,
        "filled": false
      },
      {
        "color": 213,
        "filled": false
      },
      {
        "color": 99,
        "filled": false
      },
      {
        "color": 214,
        "filled": false
      },
      {
        "color": 215,
        "filled": false
      },
      {
        "color": 215,
        "filled": false
      },
      {
        "color": 216,
        "filled": false
      },
      {
        "color": 99,
        "filled": false
      },
      {
        "color": 97,
        "filled": false
      },
      {
        "color": 99,
        "filled": false
      },
      {
        "color": 99,
        "filled": false
      },
      {
        "color": 217,
        "filled": false
      },
      {
        "color": 215,
        "filled": false
      },
      {
        "color": 218,
        "filled": false
      },
      {
        "color": 219,
        "filled": false
      },
      {
        "color": 99,
        "filled": false
      },
      {
        "color": 99,
        "filled": false
      },
      {
        "color": 99,
        "filled": false
      },
      {
        "color": 220,
        "filled": false
      },
      {
        "color": 221,
        "filled": false
      },
      {
        "color": 24,
        "filled": false
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": 46,
        "filled": false
      },
      {
        "color": 15,
        "filled": false
      },
      {
        "color": 222,
        "filled": false
      },
      {
        "color": 223,
        "filled": false
      },
      {
        "color": 224,
        "filled": false
      },
      {
        "color": 187,
        "filled": false
      },
      {
        "color": 187,
        "filled": false
      },
      {
        "color": 187,
        "filled": false
      },
      {
        "color": 187,
        "filled": false
      },
      {
        "color": 225,
        "filled": false
      },
      {
        "color": 226,
        "filled": false
      },
      {
        "color": 14,
        "filled": false
      },
      {
        "color": 30,
        "filled": false
      },
      {
        "color": 227,
        "filled": false
      },
      {
        "color": 187,
        "filled": false
      },
      {
        "color": 187,
        "filled": false
      },
      {
        "color": 228,
        "filled": false
      },
      {
        "color": 35,
        "filled": false
      },
      {
        "color": 30,
        "filled": false
      },
      {
        "color": 229,
        "filled": false
      },
      {
        "color": 61,
        "filled": false
      },
      {
        "color": 230,
        "filled": false
      },
      {
        "color": 20,
        "filled": false
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": 231,
        "filled": false
      },
      {
        "color": 115,
        "filled": false
      },
      {
        "color": 97,
        "filled": false
      },
      {
        "color": 232,
        "filled": false
      },
      {
        "color": 233,
        "filled": false
      },
      {
        "color": 234,
        "filled": false
      },
      {
        "color": 235,
        "filled": false
      },
      {
        "color": 151,
        "filled": false
      },
      {
        "color": 99,
        "filled": false
      },
      {
        "color": 99,
        "filled": false
      },
      {
        "color": 99,
        "filled": false
      },
      {
        "color": 219,
        "filled": false
      },
      {
        "color": 236,
        "filled": false
      },
      {
        "color": 234,
        "filled": false
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": 30,
        "filled": false
      },
      {
        "color": 237,
        "filled": false
      },
      {
        "color": 120,
        "filled": false
      },
      {
        "color": 77,
        "filled": false
      },
      {
        "color": 187,
        "filled": false
      },
      {
        "color": 187,
        "filled": false
      },
      {
        "color": 187,
        "filled": false
      },
      {
        "color": 187,
        "filled": false
      },
      {
        "color": 187,
        "filled": false
      },
      {
        "color": 238,
        "filled": false
      },
      {
        "color": 195,
        "filled": false
      },
      {
        "color": 30,
        "filled": false
      },
      {
        "color": 239,
        "filled": false
      },
      {
        "color": 240,
        "filled": false
      },
      {
        "color": 187,
        "filled": false
      },
      {
        "color": 187,
        "filled": false
      },
      {
        "color": 187,
        "filled": false
      },
      {
        "color": 187,
        "filled": false
      },
      {
        "color": 211,
        "filled": false
      },
      {
        "color": 211,
        "filled": false
      },
      {
        "color": 77,
        "filled": false
      },
      {
        "color": 146,
        "filled": false
      },
      {
        "color": 14,
        "filled": false
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": 30,
        "filled": false
      },
      {
        "color": 199,
        "filled": false
      },
      {
        "color": 70,
        "filled": false
      },
      {
        "color": 54,
        "filled": false
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": 235,
        "filled": false
      },
      {
        "color": 151,
        "filled": false
      },
      {
        "color": 241,
        "filled": false
      },
      {
        "color": 242,
        "filled": false
      },
      {
        "color": 160,
        "filled": false
      },
      {
        "color": 198,
        "filled": false
      },
      {
        "color": 101,
        "filled": false
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": 243,
        "filled": false
      },
      {
        "color": 244,
        "filled": false
      },
      {
        "color": 245,
        "filled": false
      },
      {
        "color": 246,
        "filled": false
      },
      {
        "color": 187,
        "filled": false
      },
      {
        "color": 247,
        "filled": false
      },
      {
        "color": 247,
        "filled": false
      },
      {
        "color": 187,
        "filled": false
      },
      {
        "color": 187,
        "filled": false
      },
      {
        "color": 187,
        "filled": false
      },
      {
        "color": 187,
        "filled": false
      },
      {
        "color": 194,
        "filled": false
      },
      {
        "color": 163,
        "filled": false
      },
      {
        "color": 248,
        "filled": false
      },
      {
        "color": 249,
        "filled": false
      },
      {
        "color": 82,
        "filled": false
      },
      {
        "color": 82,
        "filled": false
      },
      {
        "color": 250,
        "filled": false
      },
      {
        "color": 187,
        "filled": false
      },
      {
        "color": 187,
        "filled": false
      },
      {
        "color": 187,
        "filled": false
      },
      {
        "color": 251,
        "filled": false
      },
      {
        "color": 252,
        "filled": false
      },
      {
        "color": 253,
        "filled": false
      },
      {
        "color": 130,
        "filled": false
      },
      {
        "color": 243,
        "filled": false
      },
      {
        "color": 30,
        "filled": false
      },
      {
        "color": 254,
        "filled": false
      },
      {
        "color": 69,
        "filled": false
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": 235,
        "filled": false
      },
      {
        "color": 255,
        "filled": false
      },
      {
        "color": 95,
        "filled": false
      },
      {
        "color": 256,
        "filled": false
      },
      {
        "color": 257,
        "filled": false
      },
      {
        "color": 258,
        "filled": false
      },
      {
        "color": 101,
        "filled": false
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": 3,
        "filled": false
      },
      {
        "color": 99,
        "filled": false
      },
      {
        "color": 187,
        "filled": false
      },
      {
        "color": 259,
        "filled": false
      },
      {
        "color": 260,
        "filled": false
      },
      {
        "color": 261,
        "filled": false
      },
      {
        "color": 261,
        "filled": false
      },
      {
        "color": 187,
        "filled": false
      },
      {
        "color": 187,
        "filled": false
      },
      {
        "color": 187,
        "filled": false
      },
      {
        "color": 187,
        "filled": false
      },
      {
        "color": 187,
        "filled": false
      },
      {
        "color": 187,
        "filled": false
      },
      {
        "color": 262,
        "filled": false
      },
      {
        "color": 96,
        "filled": false
      },
      {
        "color": 99,
        "filled": false
      },
      {
        "color": 99,
        "filled": false
      },
      {
        "color": 263,
        "filled": false
      },
      {
        "color": 187,
        "filled": false
      },
      {
        "color": 187,
        "filled": false
      },
      {
        "color": 187,
        "filled": false
      },
      {
        "color": 264,
        "filled": false
      },
      {
        "color": 265,
        "filled": false
      },
      {
        "color": 30,
        "filled": false
      },
      {
        "color": 266,
        "filled": false
      },
      {
        "color": 267,
        "filled": false
      },
      {
        "color": 235,
        "filled": false
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": 235,
        "filled": false
      },
      {
        "color": 268,
        "filled": false
      },
      {
        "color": 269,
        "filled": false
      },
      {
        "color": 270,
        "filled": false
      },
      {
        "color": 271,
        "filled": false
      },
      {
        "color": 272,
        "filled": false
      },
      {
        "color": 273,
        "filled": false
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": 3,
        "filled": false
      },
      {
        "color": 99,
        "filled": false
      },
      {
        "color": 187,
        "filled": false
      },
      {
        "color": 259,
        "filled": false
      },
      {
        "color": 274,
        "filled": false
      },
      {
        "color": 36,
        "filled": false
      },
      {
        "color": 36,
        "filled": false
      },
      {
        "color": 36,
        "filled": false
      },
      {
        "color": 36,
        "filled": false
      },
      {
        "color": 36,
        "filled": false
      },
      {
        "color": 224,
        "filled": false
      },
      {
        "color": 187,
        "filled": false
      },
      {
        "color": 187,
        "filled": false
      },
      {
        "color": 270,
        "filled": false
      },
      {
        "color": 99,
        "filled": false
      },
      {
        "color": 99,
        "filled": false
      },
      {
        "color": 99,
        "filled": false
      },
      {
        "color": 99,
        "filled": false
      },
      {
        "color": 187,
        "filled": false
      },
      {
        "color": 187,
        "filled": false
      },
      {
        "color": 187,
        "filled": false
      },
      {
        "color": 187,
        "filled": false
      },
      {
        "color": 275,
        "filled": false
      },
      {
        "color": 276,
        "filled": false
      },
      {
        "color": 266,
        "filled": false
      },
      {
        "color": 74,
        "filled": false
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": 277,
        "filled": false
      },
      {
        "color": 278,
        "filled": false
      },
      {
        "color": 279,
        "filled": false
      },
      {
        "color": 270,
        "filled": false
      },
      {
        "color": 225,
        "filled": false
      },
      {
        "color": 129,
        "filled": false
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": 254,
        "filled": false
      },
      {
        "color": 101,
        "filled": false
      },
      {
        "color": 101,
        "filled": false
      },
      {
        "color": 101,
        "filled": false
      },
      {
        "color": 10,
        "filled": false
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": 3,
        "filled": false
      },
      {
        "color": 82,
        "filled": false
      },
      {
        "color": 187,
        "filled": false
      },
      {
        "color": 187,
        "filled": false
      },
      {
        "color": 251,
        "filled": false
      },
      {
        "color": 157,
        "filled": false
      },
      {
        "color": 280,
        "filled": false
      },
      {
        "color": 281,
        "filled": false
      },
      {
        "color": 281,
        "filled": false
      },
      {
        "color": 282,
        "filled": false
      },
      {
        "color": 210,
        "filled": false
      },
      {
        "color": 187,
        "filled": false
      },
      {
        "color": 187,
        "filled": false
      },
      {
        "color": 270,
        "filled": false
      },
      {
        "color": 99,
        "filled": false
      },
      {
        "color": 99,
        "filled": false
      },
      {
        "color": 99,
        "filled": false
      },
      {
        "color": 99,
        "filled": false
      },
      {
        "color": 187,
        "filled": false
      },
      {
        "color": 187,
        "filled": false
      },
      {
        "color": 187,
        "filled": false
      },
      {
        "color": 187,
        "filled": false
      },
      {
        "color": 187,
        "filled": false
      },
      {
        "color": 93,
        "filled": false
      },
      {
        "color": 6,
        "filled": false
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": 101,
        "filled": false
      },
      {
        "color": 283,
        "filled": false
      },
      {
        "color": 250,
        "filled": false
      },
      {
        "color": 225,
        "filled": false
      },
      {
        "color": 129,
        "filled": false
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": 284,
        "filled": false
      },
      {
        "color": 185,
        "filled": false
      },
      {
        "color": 285,
        "filled": false
      },
      {
        "color": 30,
        "filled": false
      },
      {
        "color": 15,
        "filled": false
      },
      {
        "color": 5,
        "filled": false
      },
      {
        "color": 286,
        "filled": false
      },
      {
        "color": 211,
        "filled": false
      },
      {
        "color": 187,
        "filled": false
      },
      {
        "color": 187,
        "filled": false
      },
      {
        "color": 187,
        "filled": false
      },
      {
        "color": 287,
        "filled": false
      },
      {
        "color": 288,
        "filled": false
      },
      {
        "color": 289,
        "filled": false
      },
      {
        "color": 290,
        "filled": false
      },
      {
        "color": 291,
        "filled": false
      },
      {
        "color": 187,
        "filled": false
      },
      {
        "color": 187,
        "filled": false
      },
      {
        "color": 187,
        "filled": false
      },
      {
        "color": 292,
        "filled": false
      },
      {
        "color": 293,
        "filled": false
      },
      {
        "color": 99,
        "filled": false
      },
      {
        "color": 99,
        "filled": false
      },
      {
        "color": 294,
        "filled": false
      },
      {
        "color": 187,
        "filled": false
      },
      {
        "color": 187,
        "filled": false
      },
      {
        "color": 187,
        "filled": false
      },
      {
        "color": 187,
        "filled": false
      },
      {
        "color": 187,
        "filled": false
      },
      {
        "color": 251,
        "filled": false
      },
      {
        "color": 295,
        "filled": false
      },
      {
        "color": 296,
        "filled": false
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": 101,
        "filled": false
      },
      {
        "color": 185,
        "filled": false
      },
      {
        "color": 187,
        "filled": false
      },
      {
        "color": 297,
        "filled": false
      },
      {
        "color": 298,
        "filled": false
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": 299,
        "filled": false
      },
      {
        "color": 300,
        "filled": false
      },
      {
        "color": 301,
        "filled": false
      },
      {
        "color": 30,
        "filled": false
      },
      {
        "color": 302,
        "filled": false
      },
      {
        "color": 303,
        "filled": false
      },
      {
        "color": 304,
        "filled": false
      },
      {
        "color": 30,
        "filled": false
      },
      {
        "color": 187,
        "filled": false
      },
      {
        "color": 187,
        "filled": false
      },
      {
        "color": 187,
        "filled": false
      },
      {
        "color": 187,
        "filled": false
      },
      {
        "color": 305,
        "filled": false
      },
      {
        "color": 225,
        "filled": false
      },
      {
        "color": 306,
        "filled": false
      },
      {
        "color": 187,
        "filled": false
      },
      {
        "color": 187,
        "filled": false
      },
      {
        "color": 187,
        "filled": false
      },
      {
        "color": 187,
        "filled": false
      },
      {
        "color": 187,
        "filled": false
      },
      {
        "color": 307,
        "filled": false
      },
      {
        "color": 308,
        "filled": false
      },
      {
        "color": 308,
        "filled": false
      },
      {
        "color": 187,
        "filled": false
      },
      {
        "color": 187,
        "filled": false
      },
      {
        "color": 187,
        "filled": false
      },
      {
        "color": 187,
        "filled": false
      },
      {
        "color": 187,
        "filled": false
      },
      {
        "color": 309,
        "filled": false
      },
      {
        "color": 35,
        "filled": false
      },
      {
        "color": 204,
        "filled": false
      },
      {
        "color": 310,
        "filled": false
      },
      {
        "color": 304,
        "filled": false
      },
      {
        "color": 311,
        "filled": false
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": 312,
        "filled": false
      },
      {
        "color": 313,
        "filled": false
      },
      {
        "color": 314,
        "filled": false
      },
      {
        "color": 304,
        "filled": false
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": 30,
        "filled": false
      },
      {
        "color": 30,
        "filled": false
      },
      {
        "color": 30,
        "filled": false
      },
      {
        "color": 146,
        "filled": false
      },
      {
        "color": 187,
        "filled": false
      },
      {
        "color": 187,
        "filled": false
      },
      {
        "color": 187,
        "filled": false
      },
      {
        "color": 30,
        "filled": false
      },
      {
        "color": 187,
        "filled": false
      },
      {
        "color": 187,
        "filled": false
      },
      {
        "color": 187,
        "filled": false
      },
      {
        "color": 187,
        "filled": false
      },
      {
        "color": 187,
        "filled": false
      },
      {
        "color": 187,
        "filled": false
      },
      {
        "color": 187,
        "filled": false
      },
      {
        "color": 187,
        "filled": false
      },
      {
        "color": 187,
        "filled": false
      },
      {
        "color": 187,
        "filled": false
      },
      {
        "color": 187,
        "filled": false
      },
      {
        "color": 187,
        "filled": false
      },
      {
        "color": 187,
        "filled": false
      },
      {
        "color": 187,
        "filled": false
      },
      {
        "color": 187,
        "filled": false
      },
      {
        "color": 187,
        "filled": false
      },
      {
        "color": 187,
        "filled": false
      },
      {
        "color": 187,
        "filled": false
      },
      {
        "color": 261,
        "filled": false
      },
      {
        "color": 30,
        "filled": false
      },
      {
        "color": 146,
        "filled": false
      },
      {
        "color": 93,
        "filled": false
      },
      {
        "color": 261,
        "filled": false
      },
      {
        "color": 187,
        "filled": false
      },
      {
        "color": 30,
        "filled": false
      },
      {
        "color": 299,
        "filled": false
      },
      {
        "color": 315,
        "filled": false
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": 129,
        "filled": false
      },
      {
        "color": 225,
        "filled": false
      },
      {
        "color": 304,
        "filled": false
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": 1,
        "filled": false
      },
      {
        "color": 121,
        "filled": false
      },
      {
        "color": 316,
        "filled": false
      },
      {
        "color": 187,
        "filled": false
      },
      {
        "color": 187,
        "filled": false
      },
      {
        "color": 187,
        "filled": false
      },
      {
        "color": 259,
        "filled": false
      },
      {
        "color": 187,
        "filled": false
      },
      {
        "color": 188,
        "filled": false
      },
      {
        "color": 103,
        "filled": false
      },
      {
        "color": 99,
        "filled": false
      },
      {
        "color": 99,
        "filled": false
      },
      {
        "color": 99,
        "filled": false
      },
      {
        "color": 99,
        "filled": false
      },
      {
        "color": 196,
        "filled": false
      },
      {
        "color": 188,
        "filled": false
      },
      {
        "color": 317,
        "filled": false
      },
      {
        "color": 187,
        "filled": false
      },
      {
        "color": 187,
        "filled": false
      },
      {
        "color": 187,
        "filled": false
      },
      {
        "color": 187,
        "filled": false
      },
      {
        "color": 187,
        "filled": false
      },
      {
        "color": 187,
        "filled": false
      },
      {
        "color": 187,
        "filled": false
      },
      {
        "color": 76,
        "filled": false
      },
      {
        "color": 97,
        "filled": false
      },
      {
        "color": 318,
        "filled": false
      },
      {
        "color": 187,
        "filled": false
      },
      {
        "color": 146,
        "filled": false
      },
      {
        "color": 30,
        "filled": false
      },
      {
        "color": 319,
        "filled": false
      },
      {
        "color": 76,
        "filled": false
      },
      {
        "color": 30,
        "filled": false
      },
      {
        "color": 30,
        "filled": false
      },
      {
        "color": 320,
        "filled": false
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": 321,
        "filled": false
      },
      {
        "color": 155,
        "filled": false
      },
      {
        "color": 322,
        "filled": false
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": 43,
        "filled": false
      },
      {
        "color": 49,
        "filled": false
      },
      {
        "color": 323,
        "filled": false
      },
      {
        "color": 187,
        "filled": false
      },
      {
        "color": 187,
        "filled": false
      },
      {
        "color": 187,
        "filled": false
      },
      {
        "color": 252,
        "filled": false
      },
      {
        "color": 324,
        "filled": false
      },
      {
        "color": 99,
        "filled": false
      },
      {
        "color": 99,
        "filled": false
      },
      {
        "color": 99,
        "filled": false
      },
      {
        "color": 99,
        "filled": false
      },
      {
        "color": 99,
        "filled": false
      },
      {
        "color": 99,
        "filled": false
      },
      {
        "color": 99,
        "filled": false
      },
      {
        "color": 99,
        "filled": false
      },
      {
        "color": 325,
        "filled": false
      },
      {
        "color": 326,
        "filled": false
      },
      {
        "color": 187,
        "filled": false
      },
      {
        "color": 187,
        "filled": false
      },
      {
        "color": 187,
        "filled": false
      },
      {
        "color": 187,
        "filled": false
      },
      {
        "color": 187,
        "filled": false
      },
      {
        "color": 187,
        "filled": false
      },
      {
        "color": 91,
        "filled": false
      },
      {
        "color": 327,
        "filled": false
      },
      {
        "color": 328,
        "filled": false
      },
      {
        "color": 187,
        "filled": false
      },
      {
        "color": 146,
        "filled": false
      },
      {
        "color": 30,
        "filled": false
      },
      {
        "color": 30,
        "filled": false
      },
      {
        "color": 30,
        "filled": false
      },
      {
        "color": 30,
        "filled": false
      },
      {
        "color": 121,
        "filled": false
      },
      {
        "color": 329,
        "filled": false
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": 330,
        "filled": false
      },
      {
        "color": 30,
        "filled": false
      },
      {
        "color": 129,
        "filled": false
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": 6,
        "filled": false
      },
      {
        "color": 93,
        "filled": false
      },
      {
        "color": 187,
        "filled": false
      },
      {
        "color": 187,
        "filled": false
      },
      {
        "color": 331,
        "filled": false
      },
      {
        "color": 332,
        "filled": false
      },
      {
        "color": 99,
        "filled": false
      },
      {
        "color": 333,
        "filled": false
      },
      {
        "color": 333,
        "filled": false
      },
      {
        "color": 333,
        "filled": false
      },
      {
        "color": 333,
        "filled": false
      },
      {
        "color": 334,
        "filled": false
      },
      {
        "color": 99,
        "filled": false
      },
      {
        "color": 99,
        "filled": false
      },
      {
        "color": 99,
        "filled": false
      },
      {
        "color": 99,
        "filled": false
      },
      {
        "color": 335,
        "filled": false
      },
      {
        "color": 95,
        "filled": false
      },
      {
        "color": 336,
        "filled": false
      },
      {
        "color": 187,
        "filled": false
      },
      {
        "color": 187,
        "filled": false
      },
      {
        "color": 187,
        "filled": false
      },
      {
        "color": 187,
        "filled": false
      },
      {
        "color": 124,
        "filled": false
      },
      {
        "color": 337,
        "filled": false
      },
      {
        "color": 187,
        "filled": false
      },
      {
        "color": 187,
        "filled": false
      },
      {
        "color": 146,
        "filled": false
      },
      {
        "color": 30,
        "filled": false
      },
      {
        "color": 30,
        "filled": false
      },
      {
        "color": 30,
        "filled": false
      },
      {
        "color": 30,
        "filled": false
      },
      {
        "color": 338,
        "filled": false
      },
      {
        "color": 339,
        "filled": false
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": 30,
        "filled": false
      },
      {
        "color": 340,
        "filled": false
      },
      {
        "color": 341,
        "filled": false
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": 1,
        "filled": false
      },
      {
        "color": 342,
        "filled": false
      },
      {
        "color": 261,
        "filled": false
      },
      {
        "color": 171,
        "filled": false
      },
      {
        "color": 343,
        "filled": false
      },
      {
        "color": 115,
        "filled": false
      },
      {
        "color": 344,
        "filled": false
      },
      {
        "color": 24,
        "filled": false
      },
      {
        "color": 24,
        "filled": false
      },
      {
        "color": 24,
        "filled": false
      },
      {
        "color": 24,
        "filled": false
      },
      {
        "color": 345,
        "filled": false
      },
      {
        "color": 346,
        "filled": false
      },
      {
        "color": 99,
        "filled": false
      },
      {
        "color": 99,
        "filled": false
      },
      {
        "color": 99,
        "filled": false
      },
      {
        "color": 99,
        "filled": false
      },
      {
        "color": 99,
        "filled": false
      },
      {
        "color": 347,
        "filled": false
      },
      {
        "color": 348,
        "filled": false
      },
      {
        "color": 187,
        "filled": false
      },
      {
        "color": 187,
        "filled": false
      },
      {
        "color": 187,
        "filled": false
      },
      {
        "color": 187,
        "filled": false
      },
      {
        "color": 187,
        "filled": false
      },
      {
        "color": 187,
        "filled": false
      },
      {
        "color": 187,
        "filled": false
      },
      {
        "color": 261,
        "filled": false
      },
      {
        "color": 211,
        "filled": false
      },
      {
        "color": 30,
        "filled": false
      },
      {
        "color": 30,
        "filled": false
      },
      {
        "color": 30,
        "filled": false
      },
      {
        "color": 74,
        "filled": false
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": 65,
        "filled": false
      },
      {
        "color": 349,
        "filled": false
      },
      {
        "color": 350,
        "filled": false
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": 351,
        "filled": false
      },
      {
        "color": 342,
        "filled": false
      },
      {
        "color": 50,
        "filled": false
      },
      {
        "color": 131,
        "filled": false
      },
      {
        "color": 352,
        "filled": false
      },
      {
        "color": 24,
        "filled": false
      },
      {
        "color": 24,
        "filled": false
      },
      {
        "color": 24,
        "filled": false
      },
      {
        "color": 24,
        "filled": false
      },
      {
        "color": 24,
        "filled": false
      },
      {
        "color": 24,
        "filled": false
      },
      {
        "color": 353,
        "filled": false
      },
      {
        "color": 99,
        "filled": false
      },
      {
        "color": 99,
        "filled": false
      },
      {
        "color": 99,
        "filled": false
      },
      {
        "color": 99,
        "filled": false
      },
      {
        "color": 99,
        "filled": false
      },
      {
        "color": 99,
        "filled": false
      },
      {
        "color": 270,
        "filled": false
      },
      {
        "color": 187,
        "filled": false
      },
      {
        "color": 187,
        "filled": false
      },
      {
        "color": 187,
        "filled": false
      },
      {
        "color": 187,
        "filled": false
      },
      {
        "color": 187,
        "filled": false
      },
      {
        "color": 187,
        "filled": false
      },
      {
        "color": 187,
        "filled": false
      },
      {
        "color": 187,
        "filled": false
      },
      {
        "color": 300,
        "filled": false
      },
      {
        "color": 64,
        "filled": false
      },
      {
        "color": 30,
        "filled": false
      },
      {
        "color": 14,
        "filled": false
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": 354,
        "filled": false
      },
      {
        "color": 30,
        "filled": false
      },
      {
        "color": 101,
        "filled": false
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": 1,
        "filled": false
      },
      {
        "color": 12,
        "filled": false
      },
      {
        "color": 131,
        "filled": false
      },
      {
        "color": 355,
        "filled": false
      },
      {
        "color": 24,
        "filled": false
      },
      {
        "color": 24,
        "filled": false
      },
      {
        "color": 24,
        "filled": false
      },
      {
        "color": 24,
        "filled": false
      },
      {
        "color": 24,
        "filled": false
      },
      {
        "color": 356,
        "filled": false
      },
      {
        "color": 357,
        "filled": false
      },
      {
        "color": 99,
        "filled": false
      },
      {
        "color": 99,
        "filled": false
      },
      {
        "color": 99,
        "filled": false
      },
      {
        "color": 99,
        "filled": false
      },
      {
        "color": 99,
        "filled": false
      },
      {
        "color": 99,
        "filled": false
      },
      {
        "color": 358,
        "filled": false
      },
      {
        "color": 294,
        "filled": false
      },
      {
        "color": 187,
        "filled": false
      },
      {
        "color": 187,
        "filled": false
      },
      {
        "color": 187,
        "filled": false
      },
      {
        "color": 187,
        "filled": false
      },
      {
        "color": 187,
        "filled": false
      },
      {
        "color": 187,
        "filled": false
      },
      {
        "color": 52,
        "filled": false
      },
      {
        "color": 68,
        "filled": false
      },
      {
        "color": 35,
        "filled": false
      },
      {
        "color": 319,
        "filled": false
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": 62,
        "filled": false
      },
      {
        "color": 61,
        "filled": false
      },
      {
        "color": 359,
        "filled": false
      },
      {
        "color": 40,
        "filled": false
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": 74,
        "filled": false
      },
      {
        "color": 360,
        "filled": false
      },
      {
        "color": 361,
        "filled": false
      },
      {
        "color": 355,
        "filled": false
      },
      {
        "color": 24,
        "filled": false
      },
      {
        "color": 24,
        "filled": false
      },
      {
        "color": 24,
        "filled": false
      },
      {
        "color": 24,
        "filled": false
      },
      {
        "color": 362,
        "filled": false
      },
      {
        "color": 363,
        "filled": false
      },
      {
        "color": 99,
        "filled": false
      },
      {
        "color": 99,
        "filled": false
      },
      {
        "color": 99,
        "filled": false
      },
      {
        "color": 99,
        "filled": false
      },
      {
        "color": 99,
        "filled": false
      },
      {
        "color": 99,
        "filled": false
      },
      {
        "color": 99,
        "filled": false
      },
      {
        "color": 99,
        "filled": false
      },
      {
        "color": 82,
        "filled": false
      },
      {
        "color": 187,
        "filled": false
      },
      {
        "color": 187,
        "filled": false
      },
      {
        "color": 187,
        "filled": false
      },
      {
        "color": 259,
        "filled": false
      },
      {
        "color": 299,
        "filled": false
      },
      {
        "color": 299,
        "filled": false
      },
      {
        "color": 146,
        "filled": false
      },
      {
        "color": 76,
        "filled": false
      },
      {
        "color": 265,
        "filled": false
      },
      {
        "color": 364,
        "filled": false
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": 79,
        "filled": false
      },
      {
        "color": 78,
        "filled": false
      },
      {
        "color": 30,
        "filled": false
      },
      {
        "color": 365,
        "filled": false
      },
      {
        "color": 366,
        "filled": false
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": 39,
        "filled": false
      },
      {
        "color": 92,
        "filled": false
      },
      {
        "color": 99,
        "filled": false
      },
      {
        "color": 355,
        "filled": false
      },
      {
        "color": 24,
        "filled": false
      },
      {
        "color": 24,
        "filled": false
      },
      {
        "color": 24,
        "filled": false
      },
      {
        "color": 367,
        "filled": false
      },
      {
        "color": 99,
        "filled": false
      },
      {
        "color": 99,
        "filled": false
      },
      {
        "color": 99,
        "filled": false
      },
      {
        "color": 99,
        "filled": false
      },
      {
        "color": 99,
        "filled": false
      },
      {
        "color": 99,
        "filled": false
      },
      {
        "color": 99,
        "filled": false
      },
      {
        "color": 99,
        "filled": false
      },
      {
        "color": 99,
        "filled": false
      },
      {
        "color": 99,
        "filled": false
      },
      {
        "color": 99,
        "filled": false
      },
      {
        "color": 262,
        "filled": false
      },
      {
        "color": 187,
        "filled": false
      },
      {
        "color": 187,
        "filled": false
      },
      {
        "color": 187,
        "filled": false
      },
      {
        "color": 187,
        "filled": false
      },
      {
        "color": 187,
        "filled": false
      },
      {
        "color": 187,
        "filled": false
      },
      {
        "color": 93,
        "filled": false
      },
      {
        "color": 30,
        "filled": false
      },
      {
        "color": 30,
        "filled": false
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": 37,
        "filled": false
      },
      {
        "color": 30,
        "filled": false
      },
      {
        "color": 74,
        "filled": false
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": 39,
        "filled": false
      },
      {
        "color": 92,
        "filled": false
      },
      {
        "color": 99,
        "filled": false
      },
      {
        "color": 99,
        "filled": false
      },
      {
        "color": 355,
        "filled": false
      },
      {
        "color": 355,
        "filled": false
      },
      {
        "color": 368,
        "filled": false
      },
      {
        "color": 99,
        "filled": false
      },
      {
        "color": 99,
        "filled": false
      },
      {
        "color": 99,
        "filled": false
      },
      {
        "color": 99,
        "filled": false
      },
      {
        "color": 99,
        "filled": false
      },
      {
        "color": 99,
        "filled": false
      },
      {
        "color": 99,
        "filled": false
      },
      {
        "color": 99,
        "filled": false
      },
      {
        "color": 99,
        "filled": false
      },
      {
        "color": 99,
        "filled": false
      },
      {
        "color": 99,
        "filled": false
      },
      {
        "color": 99,
        "filled": false
      },
      {
        "color": 262,
        "filled": false
      },
      {
        "color": 187,
        "filled": false
      },
      {
        "color": 187,
        "filled": false
      },
      {
        "color": 187,
        "filled": false
      },
      {
        "color": 187,
        "filled": false
      },
      {
        "color": 187,
        "filled": false
      },
      {
        "color": 227,
        "filled": false
      },
      {
        "color": 120,
        "filled": false
      },
      {
        "color": 30,
        "filled": false
      },
      {
        "color": 30,
        "filled": false
      },
      {
        "color": 369,
        "filled": false
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": 370,
        "filled": false
      },
      {
        "color": 371,
        "filled": false
      },
      {
        "color": 227,
        "filled": false
      },
      {
        "color": 372,
        "filled": false
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": 39,
        "filled": false
      },
      {
        "color": 116,
        "filled": false
      },
      {
        "color": 115,
        "filled": false
      },
      {
        "color": 99,
        "filled": false
      },
      {
        "color": 99,
        "filled": false
      },
      {
        "color": 99,
        "filled": false
      },
      {
        "color": 99,
        "filled": false
      },
      {
        "color": 99,
        "filled": false
      },
      {
        "color": 99,
        "filled": false
      },
      {
        "color": 99,
        "filled": false
      },
      {
        "color": 99,
        "filled": false
      },
      {
        "color": 99,
        "filled": false
      },
      {
        "color": 99,
        "filled": false
      },
      {
        "color": 99,
        "filled": false
      },
      {
        "color": 99,
        "filled": false
      },
      {
        "color": 99,
        "filled": false
      },
      {
        "color": 99,
        "filled": false
      },
      {
        "color": 99,
        "filled": false
      },
      {
        "color": 373,
        "filled": false
      },
      {
        "color": 374,
        "filled": false
      },
      {
        "color": 187,
        "filled": false
      },
      {
        "color": 187,
        "filled": false
      },
      {
        "color": 187,
        "filled": false
      },
      {
        "color": 187,
        "filled": false
      },
      {
        "color": 187,
        "filled": false
      },
      {
        "color": 187,
        "filled": false
      },
      {
        "color": 309,
        "filled": false
      },
      {
        "color": 68,
        "filled": false
      },
      {
        "color": 68,
        "filled": false
      },
      {
        "color": 261,
        "filled": false
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": 375,
        "filled": false
      },
      {
        "color": 376,
        "filled": false
      },
      {
        "color": 377,
        "filled": false
      },
      {
        "color": 378,
        "filled": false
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": 351,
        "filled": false
      },
      {
        "color": 342,
        "filled": false
      },
      {
        "color": 50,
        "filled": false
      },
      {
        "color": 131,
        "filled": false
      },
      {
        "color": 99,
        "filled": false
      },
      {
        "color": 99,
        "filled": false
      },
      {
        "color": 99,
        "filled": false
      },
      {
        "color": 99,
        "filled": false
      },
      {
        "color": 99,
        "filled": false
      },
      {
        "color": 99,
        "filled": false
      },
      {
        "color": 99,
        "filled": false
      },
      {
        "color": 99,
        "filled": false
      },
      {
        "color": 99,
        "filled": false
      },
      {
        "color": 99,
        "filled": false
      },
      {
        "color": 99,
        "filled": false
      },
      {
        "color": 99,
        "filled": false
      },
      {
        "color": 99,
        "filled": false
      },
      {
        "color": 99,
        "filled": false
      },
      {
        "color": 379,
        "filled": false
      },
      {
        "color": 380,
        "filled": false
      },
      {
        "color": 251,
        "filled": false
      },
      {
        "color": 187,
        "filled": false
      },
      {
        "color": 187,
        "filled": false
      },
      {
        "color": 187,
        "filled": false
      },
      {
        "color": 187,
        "filled": false
      },
      {
        "color": 187,
        "filled": false
      },
      {
        "color": 187,
        "filled": false
      },
      {
        "color": 187,
        "filled": false
      },
      {
        "color": 187,
        "filled": false
      },
      {
        "color": 381,
        "filled": false
      },
      {
        "color": 30,
        "filled": false
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": 74,
        "filled": false
      },
      {
        "color": 30,
        "filled": false
      },
      {
        "color": 37,
        "filled": false
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": 14,
        "filled": false
      },
      {
        "color": 146,
        "filled": false
      },
      {
        "color": 171,
        "filled": false
      },
      {
        "color": 343,
        "filled": false
      },
      {
        "color": 115,
        "filled": false
      },
      {
        "color": 99,
        "filled": false
      },
      {
        "color": 99,
        "filled": false
      },
      {
        "color": 99,
        "filled": false
      },
      {
        "color": 99,
        "filled": false
      },
      {
        "color": 99,
        "filled": false
      },
      {
        "color": 99,
        "filled": false
      },
      {
        "color": 99,
        "filled": false
      },
      {
        "color": 99,
        "filled": false
      },
      {
        "color": 99,
        "filled": false
      },
      {
        "color": 99,
        "filled": false
      },
      {
        "color": 99,
        "filled": false
      },
      {
        "color": 99,
        "filled": false
      },
      {
        "color": 382,
        "filled": false
      },
      {
        "color": 383,
        "filled": false
      },
      {
        "color": 384,
        "filled": false
      },
      {
        "color": 94,
        "filled": false
      },
      {
        "color": 307,
        "filled": false
      },
      {
        "color": 187,
        "filled": false
      },
      {
        "color": 187,
        "filled": false
      },
      {
        "color": 187,
        "filled": false
      },
      {
        "color": 187,
        "filled": false
      },
      {
        "color": 187,
        "filled": false
      },
      {
        "color": 187,
        "filled": false
      },
      {
        "color": 52,
        "filled": false
      },
      {
        "color": 35,
        "filled": false
      },
      {
        "color": 30,
        "filled": false
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": 74,
        "filled": false
      },
      {
        "color": 30,
        "filled": false
      },
      {
        "color": 37,
        "filled": false
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": 14,
        "filled": false
      },
      {
        "color": 146,
        "filled": false
      },
      {
        "color": 187,
        "filled": false
      },
      {
        "color": 68,
        "filled": false
      },
      {
        "color": 385,
        "filled": false
      },
      {
        "color": 99,
        "filled": false
      },
      {
        "color": 99,
        "filled": false
      },
      {
        "color": 99,
        "filled": false
      },
      {
        "color": 99,
        "filled": false
      },
      {
        "color": 99,
        "filled": false
      },
      {
        "color": 99,
        "filled": false
      },
      {
        "color": 99,
        "filled": false
      },
      {
        "color": 99,
        "filled": false
      },
      {
        "color": 99,
        "filled": false
      },
      {
        "color": 99,
        "filled": false
      },
      {
        "color": 99,
        "filled": false
      },
      {
        "color": 99,
        "filled": false
      },
      {
        "color": 98,
        "filled": false
      },
      {
        "color": 386,
        "filled": false
      },
      {
        "color": 358,
        "filled": false
      },
      {
        "color": 99,
        "filled": false
      },
      {
        "color": 308,
        "filled": false
      },
      {
        "color": 187,
        "filled": false
      },
      {
        "color": 187,
        "filled": false
      },
      {
        "color": 187,
        "filled": false
      },
      {
        "color": 187,
        "filled": false
      },
      {
        "color": 187,
        "filled": false
      },
      {
        "color": 387,
        "filled": false
      },
      {
        "color": 364,
        "filled": false
      },
      {
        "color": 30,
        "filled": false
      },
      {
        "color": 30,
        "filled": false
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": 74,
        "filled": false
      },
      {
        "color": 30,
        "filled": false
      },
      {
        "color": 37,
        "filled": false
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": 58,
        "filled": false
      },
      {
        "color": 147,
        "filled": false
      },
      {
        "color": 388,
        "filled": false
      },
      {
        "color": 300,
        "filled": false
      },
      {
        "color": 389,
        "filled": false
      },
      {
        "color": 99,
        "filled": false
      },
      {
        "color": 99,
        "filled": false
      },
      {
        "color": 99,
        "filled": false
      },
      {
        "color": 99,
        "filled": false
      },
      {
        "color": 99,
        "filled": false
      },
      {
        "color": 99,
        "filled": false
      },
      {
        "color": 99,
        "filled": false
      },
      {
        "color": 99,
        "filled": false
      },
      {
        "color": 99,
        "filled": false
      },
      {
        "color": 99,
        "filled": false
      },
      {
        "color": 99,
        "filled": false
      },
      {
        "color": 390,
        "filled": false
      },
      {
        "color": 391,
        "filled": false
      },
      {
        "color": 392,
        "filled": false
      },
      {
        "color": 99,
        "filled": false
      },
      {
        "color": 270,
        "filled": false
      },
      {
        "color": 250,
        "filled": false
      },
      {
        "color": 187,
        "filled": false
      },
      {
        "color": 187,
        "filled": false
      },
      {
        "color": 187,
        "filled": false
      },
      {
        "color": 187,
        "filled": false
      },
      {
        "color": 187,
        "filled": false
      },
      {
        "color": 393,
        "filled": false
      },
      {
        "color": 394,
        "filled": false
      },
      {
        "color": 30,
        "filled": false
      },
      {
        "color": 30,
        "filled": false
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": 74,
        "filled": false
      },
      {
        "color": 30,
        "filled": false
      },
      {
        "color": 37,
        "filled": false
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": 39,
        "filled": false
      },
      {
        "color": 52,
        "filled": false
      },
      {
        "color": 187,
        "filled": false
      },
      {
        "color": 395,
        "filled": false
      },
      {
        "color": 396,
        "filled": false
      },
      {
        "color": 99,
        "filled": false
      },
      {
        "color": 99,
        "filled": false
      },
      {
        "color": 99,
        "filled": false
      },
      {
        "color": 99,
        "filled": false
      },
      {
        "color": 99,
        "filled": false
      },
      {
        "color": 99,
        "filled": false
      },
      {
        "color": 99,
        "filled": false
      },
      {
        "color": 99,
        "filled": false
      },
      {
        "color": 99,
        "filled": false
      },
      {
        "color": 99,
        "filled": false
      },
      {
        "color": 151,
        "filled": false
      },
      {
        "color": 36,
        "filled": false
      },
      {
        "color": 193,
        "filled": false
      },
      {
        "color": 262,
        "filled": false
      },
      {
        "color": 307,
        "filled": false
      },
      {
        "color": 187,
        "filled": false
      },
      {
        "color": 187,
        "filled": false
      },
      {
        "color": 187,
        "filled": false
      },
      {
        "color": 187,
        "filled": false
      },
      {
        "color": 187,
        "filled": false
      },
      {
        "color": 187,
        "filled": false
      },
      {
        "color": 187,
        "filled": false
      },
      {
        "color": 397,
        "filled": false
      },
      {
        "color": 185,
        "filled": false
      },
      {
        "color": 30,
        "filled": false
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": 398,
        "filled": false
      },
      {
        "color": 399,
        "filled": false
      },
      {
        "color": 400,
        "filled": false
      },
      {
        "color": 401,
        "filled": false
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": 402,
        "filled": false
      },
      {
        "color": 403,
        "filled": false
      },
      {
        "color": 300,
        "filled": false
      },
      {
        "color": 187,
        "filled": false
      },
      {
        "color": 225,
        "filled": false
      },
      {
        "color": 215,
        "filled": false
      },
      {
        "color": 404,
        "filled": false
      },
      {
        "color": 99,
        "filled": false
      },
      {
        "color": 99,
        "filled": false
      },
      {
        "color": 99,
        "filled": false
      },
      {
        "color": 99,
        "filled": false
      },
      {
        "color": 99,
        "filled": false
      },
      {
        "color": 99,
        "filled": false
      },
      {
        "color": 99,
        "filled": false
      },
      {
        "color": 99,
        "filled": false
      },
      {
        "color": 151,
        "filled": false
      },
      {
        "color": 36,
        "filled": false
      },
      {
        "color": 187,
        "filled": false
      },
      {
        "color": 187,
        "filled": false
      },
      {
        "color": 187,
        "filled": false
      },
      {
        "color": 187,
        "filled": false
      },
      {
        "color": 187,
        "filled": false
      },
      {
        "color": 187,
        "filled": false
      },
      {
        "color": 187,
        "filled": false
      },
      {
        "color": 187,
        "filled": false
      },
      {
        "color": 187,
        "filled": false
      },
      {
        "color": 187,
        "filled": false
      },
      {
        "color": 187,
        "filled": false
      },
      {
        "color": 187,
        "filled": false
      },
      {
        "color": 30,
        "filled": false
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": 405,
        "filled": false
      },
      {
        "color": 406,
        "filled": false
      },
      {
        "color": 30,
        "filled": false
      },
      {
        "color": 407,
        "filled": false
      },
      {
        "color": 408,
        "filled": false
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": 409,
        "filled": false
      },
      {
        "color": 410,
        "filled": false
      },
      {
        "color": 225,
        "filled": false
      },
      {
        "color": 225,
        "filled": false
      },
      {
        "color": 331,
        "filled": false
      },
      {
        "color": 35,
        "filled": false
      },
      {
        "color": 35,
        "filled": false
      },
      {
        "color": 411,
        "filled": false
      },
      {
        "color": 412,
        "filled": false
      },
      {
        "color": 115,
        "filled": false
      },
      {
        "color": 115,
        "filled": false
      },
      {
        "color": 413,
        "filled": false
      },
      {
        "color": 413,
        "filled": false
      },
      {
        "color": 413,
        "filled": false
      },
      {
        "color": 414,
        "filled": false
      },
      {
        "color": 227,
        "filled": false
      },
      {
        "color": 187,
        "filled": false
      },
      {
        "color": 187,
        "filled": false
      },
      {
        "color": 187,
        "filled": false
      },
      {
        "color": 187,
        "filled": false
      },
      {
        "color": 187,
        "filled": false
      },
      {
        "color": 187,
        "filled": false
      },
      {
        "color": 187,
        "filled": false
      },
      {
        "color": 187,
        "filled": false
      },
      {
        "color": 187,
        "filled": false
      },
      {
        "color": 187,
        "filled": false
      },
      {
        "color": 299,
        "filled": false
      },
      {
        "color": 30,
        "filled": false
      },
      {
        "color": 15,
        "filled": false
      },
      {
        "color": 46,
        "filled": false
      },
      {
        "color": 415,
        "filled": false
      },
      {
        "color": 416,
        "filled": false
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": 417,
        "filled": false
      },
      {
        "color": 418,
        "filled": false
      },
      {
        "color": 419,
        "filled": false
      },
      {
        "color": 420,
        "filled": false
      },
      {
        "color": 421,
        "filled": false
      },
      {
        "color": 422,
        "filled": false
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": 423,
        "filled": false
      },
      {
        "color": 424,
        "filled": false
      },
      {
        "color": 425,
        "filled": false
      },
      {
        "color": 30,
        "filled": false
      },
      {
        "color": 30,
        "filled": false
      },
      {
        "color": 184,
        "filled": false
      },
      {
        "color": 185,
        "filled": false
      },
      {
        "color": 186,
        "filled": false
      },
      {
        "color": 187,
        "filled": false
      },
      {
        "color": 426,
        "filled": false
      },
      {
        "color": 211,
        "filled": false
      },
      {
        "color": 427,
        "filled": false
      },
      {
        "color": 185,
        "filled": false
      },
      {
        "color": 185,
        "filled": false
      },
      {
        "color": 185,
        "filled": false
      },
      {
        "color": 400,
        "filled": false
      },
      {
        "color": 400,
        "filled": false
      },
      {
        "color": 314,
        "filled": false
      },
      {
        "color": 187,
        "filled": false
      },
      {
        "color": 187,
        "filled": false
      },
      {
        "color": 187,
        "filled": false
      },
      {
        "color": 187,
        "filled": false
      },
      {
        "color": 187,
        "filled": false
      },
      {
        "color": 187,
        "filled": false
      },
      {
        "color": 187,
        "filled": false
      },
      {
        "color": 187,
        "filled": false
      },
      {
        "color": 397,
        "filled": false
      },
      {
        "color": 284,
        "filled": false
      },
      {
        "color": 129,
        "filled": false
      },
      {
        "color": 30,
        "filled": false
      },
      {
        "color": 30,
        "filled": false
      },
      {
        "color": 428,
        "filled": false
      },
      {
        "color": 429,
        "filled": false
      },
      {
        "color": 59,
        "filled": false
      },
      {
        "color": 59,
        "filled": false
      },
      {
        "color": 59,
        "filled": false
      },
      {
        "color": 430,
        "filled": false
      },
      {
        "color": 30,
        "filled": false
      },
      {
        "color": 431,
        "filled": false
      },
      {
        "color": 432,
        "filled": false
      },
      {
        "color": 433,
        "filled": false
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": 434,
        "filled": false
      },
      {
        "color": 435,
        "filled": false
      },
      {
        "color": 436,
        "filled": false
      },
      {
        "color": 163,
        "filled": false
      },
      {
        "color": 30,
        "filled": false
      },
      {
        "color": 437,
        "filled": false
      },
      {
        "color": 163,
        "filled": false
      },
      {
        "color": 248,
        "filled": false
      },
      {
        "color": 187,
        "filled": false
      },
      {
        "color": 438,
        "filled": false
      },
      {
        "color": 171,
        "filled": false
      },
      {
        "color": 439,
        "filled": false
      },
      {
        "color": 101,
        "filled": false
      },
      {
        "color": 101,
        "filled": false
      },
      {
        "color": 101,
        "filled": false
      },
      {
        "color": 101,
        "filled": false
      },
      {
        "color": 101,
        "filled": false
      },
      {
        "color": 440,
        "filled": false
      },
      {
        "color": 171,
        "filled": false
      },
      {
        "color": 171,
        "filled": false
      },
      {
        "color": 187,
        "filled": false
      },
      {
        "color": 187,
        "filled": false
      },
      {
        "color": 187,
        "filled": false
      },
      {
        "color": 187,
        "filled": false
      },
      {
        "color": 323,
        "filled": false
      },
      {
        "color": 171,
        "filled": false
      },
      {
        "color": 435,
        "filled": false
      },
      {
        "color": 441,
        "filled": false
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": 101,
        "filled": false
      },
      {
        "color": 442,
        "filled": false
      },
      {
        "color": 443,
        "filled": false
      },
      {
        "color": 30,
        "filled": false
      },
      {
        "color": 30,
        "filled": false
      },
      {
        "color": 30,
        "filled": false
      },
      {
        "color": 30,
        "filled": false
      },
      {
        "color": 30,
        "filled": false
      },
      {
        "color": 444,
        "filled": false
      },
      {
        "color": 445,
        "filled": false
      },
      {
        "color": 446,
        "filled": false
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": 280,
        "filled": false
      },
      {
        "color": 377,
        "filled": false
      },
      {
        "color": 447,
        "filled": false
      },
      {
        "color": 227,
        "filled": false
      },
      {
        "color": 30,
        "filled": false
      },
      {
        "color": 68,
        "filled": false
      },
      {
        "color": 187,
        "filled": false
      },
      {
        "color": 448,
        "filled": false
      },
      {
        "color": 227,
        "filled": false
      },
      {
        "color": 449,
        "filled": false
      },
      {
        "color": 235,
        "filled": false
      },
      {
        "color": 450,
        "filled": false
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": 273,
        "filled": false
      },
      {
        "color": 451,
        "filled": false
      },
      {
        "color": 30,
        "filled": false
      },
      {
        "color": 187,
        "filled": false
      },
      {
        "color": 227,
        "filled": false
      },
      {
        "color": 227,
        "filled": false
      },
      {
        "color": 227,
        "filled": false
      },
      {
        "color": 452,
        "filled": false
      },
      {
        "color": 30,
        "filled": false
      },
      {
        "color": 377,
        "filled": false
      },
      {
        "color": 453,
        "filled": false
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": 118,
        "filled": false
      },
      {
        "color": 454,
        "filled": false
      },
      {
        "color": 235,
        "filled": false
      },
      {
        "color": 235,
        "filled": false
      },
      {
        "color": 235,
        "filled": false
      },
      {
        "color": 235,
        "filled": false
      },
      {
        "color": 235,
        "filled": false
      },
      {
        "color": 455,
        "filled": false
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": 243,
        "filled": false
      },
      {
        "color": 456,
        "filled": false
      },
      {
        "color": 30,
        "filled": false
      },
      {
        "color": 30,
        "filled": false
      },
      {
        "color": 30,
        "filled": false
      },
      {
        "color": 364,
        "filled": false
      },
      {
        "color": 387,
        "filled": false
      },
      {
        "color": 457,
        "filled": false
      },
      {
        "color": 74,
        "filled": false
      },
      {
        "color": 458,
        "filled": false
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": 273,
        "filled": false
      },
      {
        "color": 451,
        "filled": false
      },
      {
        "color": 459,
        "filled": false
      },
      {
        "color": 328,
        "filled": false
      },
      {
        "color": 77,
        "filled": false
      },
      {
        "color": 30,
        "filled": false
      },
      {
        "color": 30,
        "filled": false
      },
      {
        "color": 30,
        "filled": false
      },
      {
        "color": 30,
        "filled": false
      },
      {
        "color": 266,
        "filled": false
      },
      {
        "color": 0,
        "filled": false
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": 44,
        "filled": false
      },
      {
        "color": 37,
        "filled": false
      },
      {
        "color": 37,
        "filled": false
      },
      {
        "color": 37,
        "filled": false
      },
      {
        "color": 37,
        "filled": false
      },
      {
        "color": 460,
        "filled": false
      },
      {
        "color": 405,
        "filled": false
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": 101,
        "filled": false
      },
      {
        "color": 30,
        "filled": false
      },
      {
        "color": 461,
        "filled": false
      },
      {
        "color": 244,
        "filled": false
      },
      {
        "color": 462,
        "filled": false
      },
      {
        "color": 30,
        "filled": false
      },
      {
        "color": 30,
        "filled": false
      },
      {
        "color": 252,
        "filled": false
      },
      {
        "color": 463,
        "filled": false
      },
      {
        "color": 130,
        "filled": false
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": 464,
        "filled": false
      },
      {
        "color": 465,
        "filled": false
      },
      {
        "color": 30,
        "filled": false
      },
      {
        "color": 30,
        "filled": false
      },
      {
        "color": 466,
        "filled": false
      },
      {
        "color": 467,
        "filled": false
      },
      {
        "color": 59,
        "filled": false
      },
      {
        "color": 468,
        "filled": false
      },
      {
        "color": 469,
        "filled": false
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": 470,
        "filled": false
      },
      {
        "color": 46,
        "filled": false
      },
      {
        "color": 46,
        "filled": false
      },
      {
        "color": 471,
        "filled": false
      },
      {
        "color": 472,
        "filled": false
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      },
      {
        "color": "bk",
        "filled": true
      }
    ],
    colors: [
      "#f1f1f1",
      "#dfdfdf",
      "#5b5b5b",
      "#1f1f1f",
      "#010101",
      "#cbcbcb",
      "#bfbfbf",
      "#f3f3f3",
      "#868686",
      "#3e3e3e",
      "#bdbdbd",
      "#c5c5c5",
      "#474747",
      "#c9c9c9",
      "#9f9f9f",
      "#1d1d1d",
      "#572100",
      "#fdd2b7",
      "#aba39f",
      "#b7b7b7",
      "#f9f9f9",
      "#929292",
      "#5d5d5d",
      "#a0a0a0",
      "#f8f8f8",
      "#b8b8b8",
      "#6a6a6a",
      "#f5f5f5",
      "#c7c7c7",
      "#373737",
      "#000000",
      "#eba477",
      "#fdd7bf",
      "#ae917f",
      "#7c431f",
      "#0f0600",
      "#6c2a00",
      "#afafaf",
      "#878787",
      "#7f7f7f",
      "#939393",
      "#b2b2b2",
      "#7e7e7e",
      "#e7e7e7",
      "#c3c3c3",
      "#353535",
      "#efefef",
      "#fde6d7",
      "#c0855f",
      "#5e412f",
      "#220d00",
      "#87711e",
      "#9b3c00",
      "#653313",
      "#7d7d7d",
      "#979797",
      "#b4b4b4",
      "#828282",
      "#e1e1e1",
      "#cfcfcf",
      "#272727",
      "#973a00",
      "#faf3ef",
      "#3f352f",
      "#260f00",
      "#742d00",
      "#ba871f",
      "#f08011",
      "#3e1800",
      "#7b7b7b",
      "#a38a2e",
      "#f4f2eb",
      "#f8db71",
      "#8b8b8b",
      "#8f8f8f",
      "#f5d4bf",
      "#d95400",
      "#7a2f00",
      "#cebfb5",
      "#fefdfd",
      "#1b1b1b",
      "#ec981e",
      "#f88311",
      "#3a1800",
      "#818181",
      "#9f872b",
      "#f2e7bf",
      "#f8d659",
      "#f8f1d7",
      "#f8db6f",
      "#737373",
      "#3e340e",
      "#9b8223",
      "#5d2400",
      "#f8981c",
      "#f88a15",
      "#f8b42a",
      "#1f1a07",
      "#8b751f",
      "#f8d038",
      "#f8d244",
      "#4f4f4f",
      "#e2d0c4",
      "#f88613",
      "#150800",
      "#d5d1cf",
      "#feeee5",
      "#0f0e0d",
      "#3e1b01",
      "#f88d16",
      "#f8ab25",
      "#6c5b18",
      "#f6ce37",
      "#b6992d",
      "#656565",
      "#e8c334",
      "#74611a",
      "#ab5d2b",
      "#fee8db",
      "#c66a2f",
      "#0b0400",
      "#070300",
      "#6c460e",
      "#f8b028",
      "#f8a623",
      "#d1af2f",
      "#5e563a",
      "#8e8b7c",
      "#8f7820",
      "#2f2f2f",
      "#ebebeb",
      "#ba9c2a",
      "#fcc7a5",
      "#f6c19f",
      "#1f1102",
      "#f89b1d",
      "#5d4e15",
      "#8a8574",
      "#1d1806",
      "#1f1303",
      "#ba7215",
      "#575757",
      "#f09622",
      "#f0951c",
      "#7c681c",
      "#7c4f0f",
      "#7c3000",
      "#7e6657",
      "#171717",
      "#8b4407",
      "#7e7966",
      "#aa8f26",
      "#a28824",
      "#b29528",
      "#7e7860",
      "#0d0500",
      "#511f00",
      "#5f2500",
      "#8b6919",
      "#f1ca36",
      "#f8bc2e",
      "#f8971b",
      "#f87b0d",
      "#4d1e00",
      "#f8a522",
      "#b49728",
      "#76705b",
      "#ededed",
      "#f8a221",
      "#999999",
      "#4a1c00",
      "#aa4200",
      "#df8b1a",
      "#f8cb35",
      "#f88713",
      "#f8c130",
      "#f89018",
      "#f89a1d",
      "#f86f07",
      "#bd9f2a",
      "#5b574a",
      "#ad9127",
      "#847f6a",
      "#e6e6e6",
      "#321300",
      "#c94e00",
      "#dd5500",
      "#f86000",
      "#f86e07",
      "#f8ad26",
      "#f8790c",
      "#f8b62b",
      "#f88211",
      "#f86b05",
      "#d85300",
      "#250e00",
      "#f88010",
      "#cfad2e",
      "#c9a92d",
      "#433e2f",
      "#d5b230",
      "#6d5b18",
      "#d2b02f",
      "#d95c0d",
      "#030100",
      "#662700",
      "#f86502",
      "#f86603",
      "#f86100",
      "#af4802",
      "#af4300",
      "#2e1200",
      "#2c1200",
      "#f88110",
      "#836e1d",
      "#0f0d03",
      "#dab731",
      "#927a21",
      "#a48a25",
      "#f5cd37",
      "#af9327",
      "#716f6a",
      "#aeaeae",
      "#050200",
      "#752d00",
      "#e85a00",
      "#2b2b2b",
      "#8b3600",
      "#1e0b00",
      "#3a1600",
      "#7f7a77",
      "#2d2d2d",
      "#f4cc37",
      "#977f26",
      "#787878",
      "#6f6f6f",
      "#a48b29",
      "#280f00",
      "#eb5b00",
      "#140700",
      "#9f3d00",
      "#f8be2f",
      "#f8ce37",
      "#b9b9b9",
      "#4d4111",
      "#e25700",
      "#782e00",
      "#d65200",
      "#983a00",
      "#f87309",
      "#f86201",
      "#da5400",
      "#552100",
      "#6d6d6d",
      "#e9e9e9",
      "#aa761a",
      "#f8aa25",
      "#f88512",
      "#c98c1f",
      "#dc5500",
      "#b44500",
      "#ba4800",
      "#f8750a",
      "#f8941a",
      "#c34b00",
      "#361500",
      "#6b6b6b",
      "#111111",
      "#aa6310",
      "#f89c1e",
      "#f89118",
      "#f1981d",
      "#864014",
      "#9c9c9c",
      "#7f3100",
      "#c14b00",
      "#341400",
      "#c0c0c0",
      "#776b3d",
      "#dd921e",
      "#5f5f5f",
      "#aaaaaa",
      "#0a0a0a",
      "#c96a0e",
      "#433329",
      "#7d3000",
      "#d5d5d5",
      "#e35800",
      "#723c1a",
      "#2e2e2e",
      "#d26d2e",
      "#cc5002",
      "#f86904",
      "#f8a824",
      "#f87a0d",
      "#563723",
      "#e5e5e5",
      "#381d0c",
      "#d8d8d8",
      "#1f0c00",
      "#bd4900",
      "#090300",
      "#913800",
      "#46220b",
      "#0f0f0f",
      "#ef5c00",
      "#f55e00",
      "#f86301",
      "#f86703",
      "#833300",
      "#0d0d0d",
      "#f97c2d",
      "#f4f4f4",
      "#39312c",
      "#e95a00",
      "#f9873f",
      "#702b00",
      "#f86d06",
      "#552b05",
      "#a23f00",
      "#3f3f3f",
      "#2d1b0f",
      "#e0742f",
      "#d15100",
      "#f87c0e",
      "#f8ca35",
      "#f8760b",
      "#f8cc36",
      "#f89f1f",
      "#6e513f",
      "#fa8f4b",
      "#b24500",
      "#ec8012",
      "#f8df80",
      "#f8d657",
      "#f8c231",
      "#f8770b",
      "#f89d1e",
      "#1f130b",
      "#fbb487",
      "#2f241d",
      "#fdd6bd",
      "#7e614f",
      "#7c5a15",
      "#f8e498",
      "#f8ecc2",
      "#f8d656",
      "#f8b72b",
      "#f8780c",
      "#170900",
      "#a4704f",
      "#dbdbdb",
      "#f8e5a1",
      "#f8dc74",
      "#ecb795",
      "#f8f3e0",
      "#f8e7a7",
      "#f8d347",
      "#f8c030",
      "#131313",
      "#937d2a",
      "#f0c936",
      "#f8e8ae",
      "#f8d242",
      "#1b0a00",
      "#6c320d",
      "#fcc29d",
      "#f8e9b0",
      "#f8eab6",
      "#feebdf",
      "#b9b3af",
      "#110600",
      "#fccdaf",
      "#cdac2e",
      "#ec6b07",
      "#fdd9c3",
      "#8c4c23",
      "#682800",
      "#e9c5af",
      "#c3a42c",
      "#70410a",
      "#a64000",
      "#c1a22b",
      "#7c480c",
      "#d17713",
      "#d9b631",
      "#8b5911",
      "#a03e00",
      "#b84700",
      "#59410f",
      "#c2a32b",
      "#764109",
      "#d6911f",
      "#c74d00",
      "#2a1000",
      "#cf5000",
      "#2e270a",
      "#d55200",
      "#bebebe",
      "#1a1a1a",
      "#712b00",
      "#eec7af",
      "#f7f7f7",
      "#635d59",
      "#493d10",
      "#fde3d2",
      "#aa480a",
      "#8f8986",
      "#fefbfa",
      "#4b4b4b",
      "#0f0701",
      "#92731d",
      "#edc434",
      "#f8c934",
      "#8b711d",
      "#f4f1ef",
      "#fef9f6",
      "#fef5f0",
      "#eee5e0",
      "#bc4900",
      "#040100",
      "#753106",
      "#fcbd96",
      "#feece1",
      "#dad3cf",
      "#ca5e19",
      "#6d2a00",
      "#020100",
      "#4b1d00",
      "#cb865a",
      "#c9560c",
      "#080300",
      "#6d330e",
      "#fbb68a",
      "#ca885f",
      "#642700",
      "#4d3c0f",
      "#130700",
      "#c24b00",
      "#554e4a",
      "#8e4618",
      "#e8e2df",
      "#4f433b",
      "#301200",
      "#4d2104",
      "#6f5c4f",
      "#fbb386",
      "#8b6d1b",
      "#c84d00",
      "#785d4c",
      "#f6f6f6",
      "#141414",
      "#451b00",
      "#f0e5df",
      "#c6916f",
      "#fbab78",
      "#232323",
      "#ca743e",
      "#dcdcdc",
      "#823200",
      "#ccbaaf",
      "#481c00",
      "#431a00",
      "#ad866d",
      "#dedede",
      "#262626",
      "#190900",
      "#ca6e33",
      "#e6d8cf",
      "#fef3ed",
      "#f2f2f2",
      "#f1efef",
      "#fef7f3"
    ],
    stats: [
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ]
  }
]

export default images;