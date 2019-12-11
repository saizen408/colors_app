import React, { Component } from 'react';
import ColorBox from './ColorBox';
import './Palette.css';
import 'rc-slider/assets/index.css';
import Slider from 'rc-slider';

class Palette extends Component {
  constructor(props) {
    super(props);
    this.state = { level: 500 };
    this.changeLevel = this.changeLevel.bind(this);
  }

  changeLevel(level) {
    this.setState({ level });
  }

  render() {
    const { colors } = this.props.palette;
    const { level } = this.state;
    const colorBoxes = colors[level].map(color => (
      <ColorBox background={color.hex} name={color.name} />
    ));
    return (
      <div className="Palette">
        <div className="slider">
          <Slider
            defaultValue={level}
            min={100}
            max={900}
            step={100}
            onAfterChange={this.changeLevel}
            trackStyle={{ backgroundColor: 'transparent', height: 5 }}
            handleStyle={{
              backgroundColor: '#130e3a',
              height: 21,
              width: 21,
              outline: 'none',
              border: '2px solid #130e3',
              boxShadow: 'none'
            }}
            railStyle={{ backgroundColor: '#d6d8db', height: 14, width: 340 }}
          />
        </div>
        {/*Navbar goes here */}
        <div className="Palette-colors">{colorBoxes}</div>
        {/* footer eventually */}
      </div>
    );
  }
}

export default Palette;
