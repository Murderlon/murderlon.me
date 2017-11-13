import React, { Component } from 'react';
import { object } from 'prop-types';
import { css } from 'react-emotion';
import debounce from 'lodash.debounce';

const StyledCanvas = css`
  width: 100%;
  margin: 1em 0;
  min-height: 15em;
  max-height: 25em;
  h1 {
    color: white;
    -webkit-text-stroke: 1px black;
    text-stroke: 1px black;
  }
`;

class Canvas extends Component {
  constructor() {
    super();
    this.ratio = 2; // calculate as if x times bigger for percieved higher quality
    this.totalLines = 4;
    this.fontHeight = 60 * this.ratio - 50; // Small centering
    this.smallestWidth = 280; // width of smallest line;
    this.offsetX = 4;
    this.offsetY = 4;
    this.startRGB = [255, 255, 255];
    this.endRGB = [220, 165, 163];
  }

  init = () => {
    this.context = this.canvas.getContext('2d');
    const width = this.canvas.getBoundingClientRect().width;
    const height = this.canvas.getBoundingClientRect().height;

    let totalLineHeight;
    let totalDiff;
    // Cancel any already running animations
    cancelAnimationFrame(this.animationFrame);

    // Set the canvas width and height
    this.canvas.width = width * this.ratio;
    this.canvas.height = height * this.ratio;

    // Set the canvas font properties
    if (width < 500) {
      this.context.font = '4em Changa';
      totalLineHeight = 400;
    } else if (width < 700) {
      this.context.font = '5em Changa';
      totalLineHeight = 500;
    } else {
      this.context.font = '7em Changa';
      totalLineHeight = 700;
    }
    this.context.weight = '400';
    this.context.fillStyle = '#323031';
    this.context.strokeStyle = '#323031';
    this.context.lineWidth = '2';
    this.context.textBaseline = 'middle';

    totalDiff = totalLineHeight / this.totalLines;

    // Centering of the text
    this.verticalAlign =
      this.canvas.height / 4 * this.ratio - totalLineHeight / 2;
    this.line1Diff = totalLineHeight + this.fontHeight - totalDiff;
    this.line2Diff = totalLineHeight + this.fontHeight - totalDiff * 2;
    this.line3Diff = totalLineHeight + this.fontHeight - totalDiff * 3;
    this.line4Diff = totalLineHeight + this.fontHeight - totalDiff * 4;

    // How many this.iterations will we go through?
    this.iterations = 7;
    this.prepareColorSets(this.iterations);

    this.iteration = 0;

    this.animationFrame = requestAnimationFrame(this.draw);
  };

  draw = () => {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);

    for (let i = this.iterations - 1; i > 0; i--) {
      this.context.fillStyle = `rgb(${this.fullColorSet[i][0]},${
        this.fullColorSet[i][1]
      },${this.fullColorSet[i][2]})`;
      const x = 40 - this.ratio - i * this.offsetX;
      const y =
        this.verticalAlign +
        i * this.offsetY +
        Math.sin(i + this.iteration) * 2;
      this.drawText(x, y);
    }

    this.iteration += 0.1;
    this.animationFrame = requestAnimationFrame(this.draw);
  };

  // Draw the single lines of text.
  drawText = (x, y) => {
    this.context.fillText('Murderlon', x, y + this.line4Diff);
    this.context.strokeText('Murderlon', x, y + this.line4Diff);

    this.context.fillText('is my rapper alias', x, y + this.line3Diff);
    this.context.strokeText('is my rapper alias', x, y + this.line3Diff);

    this.context.fillText("but I don't", x, y + this.line2Diff);
    this.context.strokeText("but I don't", x, y + this.line2Diff);

    this.context.fillText('actually rap...', x, y + this.line1Diff);
    this.context.strokeText('actually rap...', x, y + this.line1Diff);
  };

  // We do this so we don't have to calculate these EVERY loop.
  prepareColorSets = iterations => {
    this.fullColorSet = [];
    for (let i = 0; i < iterations; i++) {
      this.fullColorSet.push(
        this.colourGradientor(1 - i / iterations, this.startRGB, this.endRGB)
      );
    }
  };

  // THNX - http://stackoverflow.com/questions/14482226/how-can-i-get-the-color-halfway-between-two-colors
  colourGradientor = (p, rgb_beginning, rgb_end) => {
    const w = p * 2 - 1;
    const w1 = (w + 1) / 2.0;
    const w2 = 1 - w1;
    const rgb = [
      parseInt(rgb_beginning[0] * w1 + rgb_end[0] * w2),
      parseInt(rgb_beginning[1] * w1 + rgb_end[1] * w2),
      parseInt(rgb_beginning[2] * w1 + rgb_end[2] * w2)
    ];
    return rgb;
  };

  componentDidMount() {
    this.init();
    this.debounced = debounce(this.init, 250);
    window.addEventListener('resize', this.debounced);
  }

  componentWillUnmount() {
    cancelAnimationFrame(this.animationFrame);
    window.removeEventListener('resize', this.debounced);
  }

  render() {
    return (
      <canvas
        role="note"
        aria-label="alt text"
        className={StyledCanvas}
        ref={canvas => {
          this.canvas = canvas;
        }}
      >
        {this.props.children}
      </canvas>
    );
  }
}

Canvas.propTypes = {
  children: object.isRequired
};

export default Canvas;
