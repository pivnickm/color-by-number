import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as changeColorActions from "../../actions/color";
import * as colorImageActions from "../../actions/image";
import ColorList from '../colors';
import Canvas from '../canvas';

class Easel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      positions: null,
      height: window.innerWidth,
      width: window.innerWidth,
      x: 10,
      y: 10,
      lastDist: 0
    }

    this.setActiveColor = this.setActiveColor.bind(this);
    this.getCellPosition = this.getCellPosition.bind(this);
    this.scaleStage = this.scaleStage.bind(this);
    this.scaleStageEndTouch = this.scaleStageEndTouch.bind(this);
    this.getDistance = this.getDistance.bind(this);
    this.handleDragEnd = this.handleDragEnd.bind(this);
    // this.dragBounds = this.dragBounds.bind(this);
  }

  componentDidMount() {
    // dispatch action creator to set state.initialGameState[params.id]
    // and then set it on the active image and see what happens.
    // at some point there needs to be a state dump to localstorage
    this.props.colorImageActions.selectImage(this.props.match.params.id);
  }

  scaleStageEndTouch() {
    this.setState({
      lastDist: 0
    });
  }

  scaleStage(evt, stageRef) {
    const touch1 = evt.touches[0];
    const touch2 = evt.touches[1];

    if(touch1 && touch2) {
        const dist = this.getDistance({
          x: touch1.clientX,
          y: touch1.clientY
        }, {
          x: touch2.clientX,
          y: touch2.clientY
        });

        if(!this.state.lastDist) {
          this.setState({
            lastDist: dist
          });
        }

        const scale = stageRef.getStage().getScaleX() * dist / this.state.lastDist;

        stageRef.getStage().scaleX(scale);
        stageRef.getStage().scaleY(scale);
        stageRef.getStage().draw();
        this.setState({
          lastDist: dist
        });
    }
  }

  handleDragEnd(e) {
    this.setState({
      x: e.target.x() + 10,
      y: e.target.y()
    });
  }

  // dragBounds(pos) {
  //   let newY;
  //   let newX;

  //   if (pos.x <= -50) {
  //     newX = -50;
  //   } else if (pos.x >= this.width + 50) {
  //     newX = this.width + 50;
  //   } else {
  //     newX = pos.x;
  //   }
  //   if (pos.y <= -50) {
  //     newY = -50;
  //   } else if (pos.y >= this.height + 50) {
  //     newY = this.height + 50;
  //   } else {
  //     newY = pos.y;
  //   }
  //   return {
  //       x: newX,
  //       y: newY
  //   };
  // }

  getDistance(p1, p2) {
    return Math.sqrt(Math.pow((p2.x - p1.x), 2) + Math.pow((p2.y - p1.y), 2));
  }

  getCellPosition() {
    const cellSize = window.innerWidth / 50
    const maxPerRow = 50;
    let x;
    let y;
    const positions = [];

    for (let i = 0; i < maxPerRow; i++) {
      for (let j = 0; j < maxPerRow; j++) {
        x = (cellSize - 2) * j;
        y = (cellSize -  2) * i;
        positions.push({x, y});
      }
    }
    return positions;
  }

  setActiveColor(id) {
    this.props.changeColorActions.changeColor(id);
  }

  render() {
    const {
      activeImage,
      colors,
      activeColorId,
      colorImageActions,
      imageStats
    } = this.props;
    const {
      height,
      width,
      x,
      y
    } = this.state;
    const colorsArr = Object.values(colors)

    return (
      <React.Fragment>
        { activeImage &&
          <React.Fragment>
            <div
              style={{
                backgroundColor: "#fff"
              }}
            >
              <Canvas
                image={activeImage}
                colors={colorsArr}
                x={x}
                y={y}
                width={width}
                height={height}
                scaleStage={this.scaleStage}
                scaleStageEndTouch={this.scaleStageEndTouch}
                activeColorId={activeColorId}
                cellSize={window.innerWidth/50}
                positions={this.getCellPosition()}
                handleDragEnd={this.handleDragEnd}
                onCellClick={colorImageActions.doFillCell}
                isComplete={imageStats.every(x => x === 0)}
              />
            </div>
            <ColorList
              colors={colorsArr}
              activeColorId={activeColorId}
              setActiveColor={this.setActiveColor}
            />
          </React.Fragment>
        }
      </React.Fragment>
    );
  }
};

const mapStateToProps = (state) => {
  const { activeImage, color } = state;
  return {
    id: activeImage.id,
    activeImage: activeImage.image,
    imageStats: activeImage.stats,
    activeColorId: color.activeColorId,
    colors: activeImage.colors
  };
};

const mapDispatchToProps = dispatch => ({
  changeColorActions: bindActionCreators(changeColorActions, dispatch),
  colorImageActions: bindActionCreators(colorImageActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Easel);
