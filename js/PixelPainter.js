
function PixelPainter() {
  var pixelPainter = document.getElementById('pixelPainter');
  var ppCanvas = document.createElement('div');

  var blockContainer = document.createElement('section');
  blockContainer.setAttribute('class', 'blocks');
  ppCanvas.appendChild(blockContainer);
  pixelPainter.appendChild(ppCanvas);

  for (i = 0; i < 400; i++) {
    var newBlock = document.createElement('div');
    newBlock.setAttribute('class', 'block');
    newBlock.setAttribute('id', 'block' + i);
    blockContainer.append(newBlock);
  }
}

PixelPainter();

