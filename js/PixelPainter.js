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
    // newBlock.addEventListener('mouseover', function() { hover kind of works, breaks others
    //   if(this.style.backgroundColor !== 'white') {
    //     this.style.backgroundColor = colorChoice;
    //     x = true;
    //   }
    // });
    // newBlock.addEventListener('mouseout', function() {
    //   if(x) {
    //     this.style.backgroundColor = 'white';
    //     x = false;
    //   }
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

var dogeArray = [35,46,47,54,55,65,68,73,75,85,89,90,91,92,93,95105
115
125
136
145
156
164
177
184
193
194
197
204
209
210
217
223
229
238
243
254
255
258
263
275
284
298
304
311
312
313
314
318
324
338
344
345
357
364
365
376
384
384
385
386
387
388
389
390
391
392
393
394
395]

function dogeTemplate() {



  for(var i = 0; i < dogeArray.length; i++)

  document.getElementById('block35').style.backgroundColor = 'black';
  document.getElementById('block46').style.backgroundColor = 'black';
  document.getElementById('block47').style.backgroundColor = 'black';
  document.getElementById('block54').style.backgroundColor = 'black';
  document.getElementById('block55').style.backgroundColor = 'black';
  document.getElementById('block65').style.backgroundColor = 'black';
  document.getElementById('block68').style.backgroundColor = 'black';
  document.getElementById('block73').style.backgroundColor = 'black';
  document.getElementById('block75').style.backgroundColor = 'black';
  document.getElementById('block85').style.backgroundColor = 'black';
  document.getElementById('block89').style.backgroundColor = 'black';
  document.getElementById('block90').style.backgroundColor = 'black';
  document.getElementById('block91').style.backgroundColor = 'black';
  document.getElementById('block92').style.backgroundColor = 'black';
  document.getElementById('block93').style.backgroundColor = 'black';
  document.getElementById('block95').style.backgroundColor = 'black';
  document.getElementById('block105').style.backgroundColor = 'black';
  document.getElementById('block115').style.backgroundColor = 'black';
  document.getElementById('block125').style.backgroundColor = 'black';
  document.getElementById('block136').style.backgroundColor = 'black';
  document.getElementById('block145').style.backgroundColor = 'black';
  document.getElementById('block156').style.backgroundColor = 'black';
  document.getElementById('block164').style.backgroundColor = 'black';
  document.getElementById('block177').style.backgroundColor = 'black';
  document.getElementById('block184').style.backgroundColor = 'black';
  document.getElementById('block193').style.backgroundColor = 'black';
  document.getElementById('block194').style.backgroundColor = 'black';
  document.getElementById('block197').style.backgroundColor = 'black';
  document.getElementById('block204').style.backgroundColor = 'black';
  document.getElementById('block209').style.backgroundColor = 'black';
  document.getElementById('block210').style.backgroundColor = 'black';
  document.getElementById('block217').style.backgroundColor = 'black';
  document.getElementById('block223').style.backgroundColor = 'black';
  document.getElementById('block229').style.backgroundColor = 'black';
  document.getElementById('block238').style.backgroundColor = 'black';
  document.getElementById('block243').style.backgroundColor = 'black';
  document.getElementById('block254').style.backgroundColor = 'black';
  document.getElementById('block255').style.backgroundColor = 'black';
  document.getElementById('block258').style.backgroundColor = 'black';
  document.getElementById('block263').style.backgroundColor = 'black';
  document.getElementById('block275').style.backgroundColor = 'black';
  document.getElementById('block284').style.backgroundColor = 'black';
  document.getElementById('block298').style.backgroundColor = 'black';
  document.getElementById('block304').style.backgroundColor = 'black';
  document.getElementById('block311').style.backgroundColor = 'black';
  document.getElementById('block312').style.backgroundColor = 'black';
  document.getElementById('block313').style.backgroundColor = 'black';
  document.getElementById('block314').style.backgroundColor = 'black';
  document.getElementById('block318').style.backgroundColor = 'black';
  document.getElementById('block324').style.backgroundColor = 'black';
  document.getElementById('block338').style.backgroundColor = 'black';
  document.getElementById('block344').style.backgroundColor = 'black';
  document.getElementById('block345').style.backgroundColor = 'black';
  document.getElementById('block357').style.backgroundColor = 'black';
  document.getElementById('block364').style.backgroundColor = 'black';
  document.getElementById('block365').style.backgroundColor = 'black';
  document.getElementById('block376').style.backgroundColor = 'black';
  document.getElementById('block384').style.backgroundColor = 'black';
  document.getElementById('block384').style.backgroundColor = 'black';
  document.getElementById('block385').style.backgroundColor = 'black';
  document.getElementById('block386').style.backgroundColor = 'black';
  document.getElementById('block387').style.backgroundColor = 'black';
  document.getElementById('block388').style.backgroundColor = 'black';
  document.getElementById('block389').style.backgroundColor = 'black';
  document.getElementById('block390').style.backgroundColor = 'black';
  document.getElementById('block391').style.backgroundColor = 'black';
  document.getElementById('block392').style.backgroundColor = 'black';
  document.getElementById('block393').style.backgroundColor = 'black';
  document.getElementById('block394').style.backgroundColor = 'black';
  document.getElementById('block395').style.backgroundColor = 'black';

}

dogeTemplate();