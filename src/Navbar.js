import React, { Component } from 'react';
import 'rc-slider/assets/index.css';
import Slider from 'rc-slider';
import Tooltip from 'rc-tooltip';
import './Navbar.css';

// const createSliderWithTooltip = Slider.createSliderWithTooltip;
// const Range = createSliderWithTooltip(Slider.Range);
const Handle = Slider.Handle;

const handle = props => {
  const { value, dragging, index, ...restProps } = props;
  return (
    <Tooltip
      prefixCls="rc-slider-tooltip"
      overlay={value}
      visible={dragging}
      placement="top"
      key={index}
    >
      <Handle value={value} {...restProps} />
    </Tooltip>
  );
};

const wrapperStyle = { width: 340, margin: 7 };

class Navbar extends Component {
  render() {
    const { level, changeLevel } = this.props;
    return (
      <header className="Navbar">
        <div className="logo">
          <a href="#">reactcolorpicker</a>
        </div>
        <span className="level-value">Level: {level}</span>
        <div className="slider-container" style={wrapperStyle}>
          <div className="slider">
            <Slider
              defaultValue={level}
              handle={handle}
              min={100}
              max={900}
              step={100}
              onAfterChange={changeLevel}
              trackStyle={{ backgroundColor: 'transparent', height: 5 }}
              handleStyle={{
                backgroundColor: '#130e3a',
                height: 18,
                width: 18,
                outline: 'none',
                border: '2px solid #130e3',
                boxShadow: 'none'
              }}
              railStyle={{
                backgroundColor: '#d6d8db',
                height: 10,
                width: 340,
                display: 'inline-block'
              }}
            />
          </div>
        </div>
      </header>
    );
  }
}

export default Navbar;
