import React, { Component } from "react";

import "./index.css";

class component extends Component {
  constructor(props) {
    super(props);

    this.state = {
      image: {}
    }
    this.canvasRef = React.createRef();
    this.ctx = null;
    this.handleImage = this.handleImage.bind(this);
    this.exportImage = this.exportImage.bind(this);
    this.rgbToHex = this.rgbToHex.bind(this);
  }

  componentDidMount() {
    if (this.canvasRef.current) {
      this.ctx = this.canvasRef.current.getContext('2d');
    }
  }

  rgbToHex(r, g, b) {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  }

  exportImage() {
    console.log(this.state.image);
  }

  handleImage(e) {
    const reader = new FileReader();
    reader.onload = (event) => {
      const img = new Image();
      img.onload = () => {
        let image = [];
        this.canvasRef.current.width = img.width;
        this.canvasRef.current.height = img.height;
        this.ctx.drawImage(img,0,0, 50, 50);

        const pixelData = this.ctx.getImageData(0, 0, 50, 50).data;
        for (let i = 0; i < pixelData.length; i+=4) {
          const color = this.rgbToHex(pixelData[i], pixelData[i+1], pixelData[i+2]);
          image.push({ color, filled: color === "#ffffff"});
        }
        const colors = image.reduce((acc, cell) => {
          if(!acc.includes(cell.color) && cell.color !== "#ffffff") {
                    acc.push(cell.color);
                }
          return acc
        }, []);

        const processedImage = image.map((cell) => {
          const newCell =  { ...cell };
          const colorId = colors.indexOf(newCell.color);

          newCell.color = colorId > -1 ? colorId : "bk"
          return newCell;
        });
        this.setState({
          image: {completed: false, image: processedImage, colors}
        });
      }
      img.src = event.target.result;
    }
    reader.readAsDataURL(e.target.files[0]);
  }

  render(){
    return (
      <React.Fragment>
        <div className="CanvasWrapper">
          <canvas className="Canvas" ref={this.canvasRef}>
            image goes here, yo
          </canvas>
        </div>
        <input
          type="file"
          className="FileLoader"
          onChange={this.handleImage}
        />
        <button className="ExportButton" onClick={this.exportImage}>Export</button>
      </React.Fragment>
    );
  }
}

export default component;
