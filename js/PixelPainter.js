
function PixelPainter() {
  var pixelPainter = document.getElementById('pixelPainter');
  var canvas = document.createElement('div');
  canvas.id = 'canvas';
  var blockContainer = document.createElement('div');

  blockContainer.setAttribute('class', 'blocks');
  pixelPainter.appendChild(canvas);
  canvas.appendChild(blockContainer);

  for (var i = 0; i < 400; i++) {
    var newBlock = document.createElement('div');
    newBlock.setAttribute('class', 'block');
    newBlock.setAttribute('id', 'block' + i);
    newBlock.addEventListener('click', colorBlock);
    blockContainer.appendChild(newBlock);
  }
}

function colorBlock() {
  console.log(this);
}


PixelPainter();
