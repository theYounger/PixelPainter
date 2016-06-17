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

  var colorRandomizer = document.createElement('input');
  colorRandomizer.type = 'button';
  colorRandomizer.id = 'colorRandomizer';
  colorRandomizer.value = 'Randomize';
  colorRandomizer.onclick = function() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    colorChoice = color;
    colorPreview.style.backgroundColor = colorChoice;
  };
  colorPallete.appendChild(colorRandomizer);

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
    newPallete.addEventListener('mouseover', colorPicker);
    colorPallete.appendChild(newPallete);
  }

  for (i = 0; i < 400; i++) {
    var newBlock = document.createElement('div');
    newBlock.setAttribute('class', 'block');
    newBlock.setAttribute('id', 'block' + i);
    newBlock.addEventListener('mousemove', colorBlock);
    newBlock.addEventListener('click', function() { this.style.backgroundColor = colorChoice; });
    newBlock.addEventListener('mouseover', function() {
      if(this.style.backgroundColor !== 'white') {
        this.style.backgroundColor = colorChoice;
      }
    });
    // newBlock.addEventListener('mouseout', function() {
    //   if(this)
    // });

    blockContainer.appendChild(newBlock);
  }
}

function colorBlock() {
  if(mouseDown === true) {
    this.style.backgroundColor = colorChoice;
  }
}
function colorPicker() {
  colorChoice = this.id;
  colorPreview.style.backgroundColor = colorChoice;
}


PixelPainter();