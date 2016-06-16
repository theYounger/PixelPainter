function PixelPainter(width, height) {
  var pixelPainter = document.getElementById('pixelPainter');
  var ppCanvas = document.createElement('div');
  pixelPainter.appendChild(ppCanvas);

  var blockContainer = document.createElement('section');
  blockContainer.setAttribute('class', 'blocks');
  ppCanvas.appendChild(blockContainer);

  $blockContainer = $(".blocks");
  for (i = 0; i < 400; i++) {
    var newBlock = document.createElement('div');
    newBlock.setAttribute('class', 'block');
    newBlock.setAttribute('id', 'block' + i);
    $blockContainer.append(newBlock);
  }
}