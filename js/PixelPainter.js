var mouseDown = false;
document.body.onmousedown = function() { mouseDown = true; };
document.body.onmouseup = function() {mouseDown = false; };
var colorChoice = 'black';


function PixelPainter() {
  var pixelPainter = document.getElementById('pixelPainter');
  var canvas = document.createElement('div');
  var sidebar = document.createElement('div');
  canvas.id = 'canvas';
  sidebar.id = 'sidebar';
  pixelPainter.appendChild(sidebar);
  pixelPainter.appendChild(canvas);

  var colorPallete = document.createElement('div');
  colorPallete.id = 'colorPallete';
  sidebar.appendChild(colorPallete);

  var colorPreview = document.createElement('div');
  colorPreview.id = 'colorPreview';
  colorPallete.appendChild(colorPreview);

  var blockContainer = document.createElement('div');
  blockContainer.setAttribute('class', 'blocks');
  canvas.appendChild(blockContainer);


  var colorArray = ['red', 'pink', 'magenta', 'violet', 'blue', 'teal', 'cyan', 'lightgreen', 'green', 'yellow', 'gold', 'orange'];

  for (var i = 0; i < colorArray.length; i++) {
    var newPallete = document.createElement('div');
    newPallete.setAttribute('class', 'pallete');
    newPallete.setAttribute('id', colorArray[i]);
    newPallete.style.backgroundColor = colorArray[i];
    newPallete.addEventListener('click', colorPicker);
    colorPallete.appendChild(newPallete);
  }

  for (i = 0; i < 400; i++) {
    var newBlock = document.createElement('div');
    newBlock.setAttribute('class', 'block');
    newBlock.setAttribute('id', 'block' + i);
    newBlock.addEventListener('mousemove', colorBlock);
    newBlock.addEventListener('click', colorBlockClick);
    blockContainer.appendChild(newBlock);
  }
}

function colorBlock() {
  if(mouseDown === true) {
    this.style.backgroundColor = colorChoice;
  }
}
function colorBlockClick() {
  this.style.backgroundColor = colorChoice;
}

function colorPicker() {
  colorChoice = this.id;
  colorPreview.style.backgroundColor = colorChoice;

}

PixelPainter();