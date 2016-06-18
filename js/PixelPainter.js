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
  canvas.style.height = height;
  canvas.style.width = width;
  sidebar.id = 'sidebar';
  sidebar.style.height = height;
  sidebar.style.width = width / 3.8;
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
    colorPreview.style.backgroundImage = 'url(http://icons.iconarchive.com/icons/designcontest/outline/48/Eraser-icon.png)';
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

  for (i = 0; i < 512; i++) {
    var newBlock = document.createElement('div');
    newBlock.setAttribute('class', 'block');
    newBlock.setAttribute('id', 'block' + i);
    newBlock.addEventListener('mousemove', colorBlock);
    newBlock.style.height = height / 16;
    newBlock.style.width = width / 32;
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
        var blockNums = [currentBlock,currentBlock + 32,currentBlock -32];
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
  for(var i = 0; i < 512; i ++) {
    document.getElementById('block' + i).style.backgroundColor = 'white';
  }
}

PixelPainter(500,1000);

var dogeArray = [25,34,45,46,53,54,64,67,72,74,84,88,89,90,91,92,94,104,106,114,124,135,144,155,163,176,183,192,193,196,203,208,209,212,216,222,228,237,242,253,254,255,257,262,274, 277,283,289,297,303,310,311,312,313,317,323,337,343,344,356,364,375,384,385,386,387,388,389,390,391,392,393,394];


function templateSet(array) {
  for(var i = 0; i < array.length; i++) {
    document.getElementById('block' + array[i]).style.backgroundColor = colorChoice;
  }
}
function partyTime() {
  var waveGuy1 = [171,147,115,83,203,235,267,46,47,48,78,79,80,110,111,112,143,172,173,174,175,176,177,178,179,207,239,271,303,332,333,334,335,336,337,338,364,370,396,402,428,434,460,466,492,498];
  var waveGuy2 = [171,179,75,107,139,211,243,275,46,47,48,78,79,80,110,111,112,143,172,173,174,175,176,177,178,179,207,239,271,303,332,333,334,335,336,337,338,364,370,396,402,428,434,460,466,492,498];
  var lol = true;
  setInterval(function() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    var randomNumber = Math.floor((Math.random() * 512));
    while(waveGuy1.indexOf(randomNumber) > 0 && waveGuy2.indexOf(randomNumber) > 0) {
      randomNumber = Math.floor((Math.random() * 512));
    }
    var randomBlock = 'block' + randomNumber;
    document.getElementById(randomBlock).style.backgroundColor = color;
  }, 10);
  setInterval(function() {
    if(lol === true) {
      clearEm();
      templateSet(waveGuy1);
      lol = false;
    }
    else {
      clearEm();
      templateSet(waveGuy2);
      lol = true;
    }
  }, 500);
}


