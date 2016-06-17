var mouseDown = false;
document.body.onmousedown = function() { mouseDown = true; };
document.body.onmouseup = function() {mouseDown = false; };
var colorChoice = 'black';
// var x = false;
var eraser = false;


function PixelPainter(height, width) {
  var pixelPainter = document.getElementById('pixelPainter');
  var canvas = document.createElement('div');
  var sidebar = document.createElement('div');
  canvas.id = 'canvas';
  canvas.style.height = height + 'px';
  canvas.style.width = width + 'px';
  sidebar.id = 'sidebar';
  sidebar.style.height = height + 'px';
  sidebar.style.width = width / 2 + 'px';
  pixelPainter.appendChild(sidebar);
  pixelPainter.appendChild(canvas);

  var clear = document.createElement('input');
  clear.type = 'button';
  clear.id = 'clear';
  clear.value = 'Clear';
  clear.addEventListener('click',clearEm);
  sidebar.appendChild(clear);


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

  var colorBlack = document.createElement('div');
  colorBlack.id = 'black';
  colorBlack.addEventListener('mouseover', colorPicker);
  colorPallete.appendChild(colorBlack);


  var colorWhite = document.createElement('div');
  colorWhite.id = 'white';
  colorWhite.addEventListener('mouseover', colorPicker);
  // colorWhite.style.marginTop = height/2;
  // colorWhite.style.marginLeft = width/8;
  colorPallete.appendChild(colorWhite);

  var eraser1 = document.createElement('div');
  var eraser2 = document.createElement('div');
  eraser1.id = 'eraser1';
  eraser1.onclick = function() {
    colorChoice = 'white';
  };
  eraser2.id = 'eraser2';
  eraser2.onclick = function() {
    colorPreview.style.backgroundImage = 'url(http://icons.iconarchive.com/icons/designcontest/outline/48/Eraser-icon.png)';
    colorPreview.style.backgroundColor = 'white';
    colorChoice = 'white';
    eraser = true;
  };
  sidebar.appendChild(eraser1);
  sidebar.appendChild(eraser2);

  var blockContainer = document.createElement('div');
  blockContainer.setAttribute('class', 'blocks');
  canvas.appendChild(blockContainer);


  var colorArray = ['red', 'pink', 'magenta', 'violet', 'blue', 'teal', 'cyan', 'lightgreen', 'green', 'yellow', 'gold', 'orange'];

  for (var i = 0; i < colorArray.length; i++) {
    var newPallete = document.createElement('div');
    newPallete.setAttribute('class', 'pallete');
    newPallete.setAttribute('id', colorArray[i]);
    newPallete.style.backgroundColor = colorArray[i];
    newPallete.onclick = colorPicker;
    newPallete.addEventListener('mouseover', colorPicker);
    colorPallete.appendChild(newPallete);
  }

  for (i = 0; i < 400; i++) {
    var newBlock = document.createElement('div');
    newBlock.setAttribute('class', 'block');
    newBlock.setAttribute('id', 'block' + i);
    newBlock.addEventListener('mousemove', colorBlock);

    newBlock.onclick = function() { this.style.backgroundColor = colorChoice; };
    // newBlock.addEventListener('mouseenter', function() {
    //   if(this.style.backgroundColor === 'white') {

    //     this.style.backgroundColor = colorChoice;
    //     x = true;
    //   }
    // });
    // newBlock.addEventListener('mouseout', function() {
    //   if(x === true) {
    //     this.style.backgroundColor = 'white';
    //     x = false;
    //   }
    // });
    newBlock.addEventListener('click', function() {
      if(eraser === true) {
        var currentBlock = this.id;
        currentBlock = Number(currentBlock.replace(/\D/g,''));
        var blockNums = [currentBlock,currentBlock + 20,currentBlock -20];
        while(blockNums.length > 0) {
          var current = blockNums[0];
          var left = Number(blockNums[0]) - 1;
          var right = blockNums[0] + 1;

          var currentId = 'block' + current;
          var leftId = 'block' + left.toString();
          var rightId = 'block' + right;

          var first = document.getElementById(leftId);
          var second = document.getElementById(currentId);
          var third = document.getElementById(rightId);
          first.style.backgroundColor = 'white';
          second.style.backgroundColor = 'white';
          third.style.backgroundColor = 'white';
          blockNums.shift();
        }
      }
    });

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
  colorPreview.style.backgroundImage = '';
  colorPreview.style.backgroundColor = colorChoice;
  eraser = false;
}
function clearEm() {
  for(var i = 0; i < 400; i ++) {
    document.getElementById('block' + i).style.backgroundColor = 'white';
  }
}

PixelPainter(600,600);

var dogeArray = [25,34,45,46,53,54,64,67,72,74,84,88,89,90,91,92,94,104,106,114,124,135,144,155,163,176,183,192,193,196,203,208,209,212,216,222,228,237,242,253,254,255,257,262,274, 277,283,289,297,303,310,311,312,313,317,323,337,343,344,356,364,375,384,385,386,387,388,389,390,391,392,393,394];

function templateSet(array) {
  for(var i = 0; i < array.length; i++) {
    document.getElementById('block' + array[i]).style.backgroundColor = colorChoice;
  }
}


