 function PixelPainter() {
  var pixelPainter = document.getElementById('pixelPainter');
  var canvas = document.createElement('div');
  canvas.id = 'canvas';
  pixelPainter.appendChild(canvas);

  var blockContainer = document.createElement('div');
  blockContainer.setAttribute('class', 'blocks');
  canvas.appendChild(blockContainer);

  for (var i = 0; i < 400; i++) {
    var newBlock = document.createElement('div');
    newBlock.setAttribute('class', 'block');
    newBlock.setAttribute('id', 'block' + i);
    newBlock.addEventListener('mousedown', colorBlock);
    blockContainer.appendChild(newBlock);
  }
}

function colorBlock() {
  console.log(this);
  this.style.backgroundColor = 'red';
}

PixelPainter();