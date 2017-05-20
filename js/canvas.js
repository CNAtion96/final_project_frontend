var canvas = document.getElementById('navigation');
fitToContainer(canvas);

function fitToContainer(canvas){
  // Make it visually fill the positioned parent
  canvas.style.width ='100%';
  canvas.style.height='100%';
  // ...then set the internal size to match
  canvas.width  = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;
}
var ctx = canvas.getContext('2d');
//Top Rectangle
ctx.fillStyle = '#00433E'
ctx.fillRect(0, 0, 133.32, 293.66);
//Middle Rectangle
ctx.fillStyle= '#005953';
ctx.fillRect(0,293.66, 133.32, 293.66);
//Top Triangle
ctx.beginPath();
ctx.moveTo(0, 294);
ctx.lineTo(0, 195.77);
ctx.lineTo(133.32, 294);
ctx.fill();
//bottom rectangle
ctx.fillStyle= '#0D6C65';
ctx.fillRect(0,587.33, 133.32, 293.66);
//Bottom Triangle
ctx.fillStyle= '#005953';
ctx.beginPath();
ctx.moveTo(0, 586);
ctx.lineTo(0, 685.22);
ctx.lineTo(133.32, 586);
ctx.fill();