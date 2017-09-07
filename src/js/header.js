var canvas = document.querySelector('.the-canvas');
var context = canvas.getContext('2d');
var ratio = window.devicePixelRatio || 1;

var smallestWidth = 280; // width of smallest line;
var iterations;
var verticalAlign;
var line1Diff;
var line2Diff;
var line3Diff;
var line4Diff;
var iterations;
var iteration;
var animationFrame;

var startRGB = [255, 255, 255];
var endRGB = [220, 165, 163];
var fullColorSet = [];

init();

function init() {
  var totalLineHeight = window.innerWidth;
  var totalLines = 4;
  var totalDiff = totalLineHeight / totalLines;

  // Cancel any already running animations
  cancelAnimationFrame(animationFrame);

  // Set the canvas width and height
  canvas.width = window.innerWidth * ratio;
  canvas.height = window.innerHeight / 1.2 * ratio;

  // Set the canvas font properties
  if (window.innerWidth < 600) {
    context.font = '25vw Changa';
  } else {
    context.font = '20vw Changa';
  }
  context.fillStyle = '#fff';
  context.strokeStyle = 'rgb(243, 92, 92)';
  context.lineWidth = '1';
  context.textBaseline = 'middle';

  // Centering of the text
  verticalAlign = window.innerHeight / 2 * ratio - totalLineHeight / 2;
  line1Diff = totalLineHeight + ratio - totalDiff;

  line2Diff = totalLineHeight + ratio - totalDiff * 2;
  line3Diff = totalLineHeight + ratio - totalDiff * 3;
  line4Diff = totalLineHeight + ratio - totalDiff * 4;

  iterations = 7; // Let's keep it simple for now
  prepareColorSets(iterations);

  iteration = 0;

  animationFrame = requestAnimationFrame(draw);
}

// Draw loop
function draw() {
  context.clearRect(0, 0, canvas.width, canvas.height);

  for (var i = iterations - 1; i > 0; i--) {
    context.fillStyle =
      'rgb(' +
      fullColorSet[i][0] +
      ',' +
      fullColorSet[i][1] +
      ',' +
      fullColorSet[i][2] +
      ')';
    var x = 20 + ratio - i * window.innerWidth / 200;
    var y =
      verticalAlign + i * window.innerWidth / 200 + Math.sin(i + iteration) * 3;
    drawText(x, y);
  }

  iteration += 0.1;
  animationFrame = requestAnimationFrame(draw);
}

// Draw the single lines of text.
function drawText(x, y) {
  context.fillText('Murderlon', x, y + line4Diff);
  context.strokeText('Murderlon', x, y + line4Diff);

  context.fillText('is my rapper alias', x, y + line3Diff);
  context.strokeText('is my rapper alias', x, y + line3Diff);

  context.fillText("but I don't", x, y + line2Diff);
  context.strokeText("but I don't", x, y + line2Diff);

  context.fillText('actually rap...', x, y + line1Diff);
  context.strokeText('actually rap...', x, y + line1Diff);
}

// We do this so we don't have to calculate these EVERY loop.
function prepareColorSets(iterations) {
  fullColorSet = [];
  for (var i = 0; i < iterations; i++) {
    fullColorSet.push(colourGradientor(1 - i / iterations, startRGB, endRGB));
  }
}

// THNX - http://stackoverflow.com/questions/14482226/how-can-i-get-the-color-halfway-between-two-colors
function colourGradientor(p, rgb_beginning, rgb_end) {
  var w = p * 2 - 1;
  var w1 = (w + 1) / 2.0;
  var w2 = 1 - w1;
  var rgb = [
    parseInt(rgb_beginning[0] * w1 + rgb_end[0] * w2),
    parseInt(rgb_beginning[1] * w1 + rgb_end[1] * w2),
    parseInt(rgb_beginning[2] * w1 + rgb_end[2] * w2)
  ];
  return rgb;
}

window.onresize = init;
