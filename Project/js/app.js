const colors = [
  "Black",
  "White",
  "Crimson",
  "Red",
  "Pink",
  "Orange",
  "Coral",
  "Yellow",
  "Beige",
  "Lime",
  "Green",
  "HotPink",
  "Teal",
  "Cyan",
  "Navy",
  "Blue",
  "Purple",
  "Grey"
];





var startButton = document.querySelector('#start-button');
var desk = document.querySelector('.desk');
var canvas = document.querySelector('#canvas');
var colorBar = document.querySelector('#colors');
var previewBox = document.querySelector('#preview');
var eraser = document.querySelector('#eraser');
var reset = document.querySelector('#reset');

var currentColor = {fill: "", border: ""};

var drag = false;
canvas.addEventListener('mousedown', function(){
  drag= true;
});
document.addEventListener('mouseup', function() {
  drag= false;
});


function paint(element){
  element.style.backgroundColor = currentColor.fill;
  element.style.border = '1px solid ' + currentColor.fill;
}

function dipBrush(element){
  currentColor.fill = element.style.backgroundColor;
  previewBox.style.backgroundColor = currentColor.fill;
}

function addClickListener(element){
  element.addEventListener('click', function(){
    paint(element);
  });
}

function addHoverListener(element){
  element.addEventListener('mouseenter', function(){
    if (drag === true){
      paint(element);
    }
  });
}

function addBrushListener(element){
  element.addEventListener('click', function(){
    dipBrush(element);
  });
}

function addEraserListener(eraser){
  eraser.addEventListener('click', function(){
    currentColor.fill = 'white';
    currentColor.border = '1px solid black';
    dipBrush(eraser);
  });
}

function addResetListener(e){
  e.addEventListener('click', function(){
    for (var i = 0; i < 1080; i++) {
      let pix = document.getElementsByClassName('pixel')[i];
      pix.style.backgroundColor = 'white';
      pix.style.border = '1px solid black';
    }
  });
}

startButton.addEventListener('click', function(){
  startButton.style.display = 'none';
  canvas.style.display = 'flex';
  for (var i = 0; i < 1080; i++){
    var newPix = document.createElement('div');
    newPix.setAttribute('class', 'pixel');
    canvas.appendChild(newPix);
    addClickListener(newPix);
    addHoverListener(newPix);
  }
  for (var j = 0; j < colors.length; j++){
    var newColorDab = document.createElement('div');
    newColorDab.setAttribute('class', 'colorDab');
    newColorDab.style.backgroundColor = colors[j];
    colorBar.appendChild(newColorDab);
    addBrushListener(newColorDab);
  }
});

addEraserListener(eraser);
addResetListener(reset);
