function PixelPainter() {
  var pixelPainter = document.getElementById('pixelPainter');

  var blockContainer = document.createElement('div');
  blockContainer.setAttribute('class', 'blocks');

  pixelPainter.appendChild(blockContainer);

  for (var i = 0; i < 400; i++) {
    var newBlock = document.createElement('div');
    newBlock.setAttribute('class', 'block');
    newBlock.setAttribute('id', 'block' + i);
    blockContainer.appendChild(newBlock);
  }
}


PixelPainter();