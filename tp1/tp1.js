// Del Campo Gabriel, Comision 2, 121123/3, https://youtu.be/6m3117uSwnc


let puntos;
let tamelipseX = 19; 
let tamelipseY = 19; 
let volverelipse = 19; 
let cant = 30;
let tam;

function preload() {
  puntos = loadImage('data/puntos.jpg');
}

function setup() {
  createCanvas(800, 400);
  tam = 600 / cant;
}

function draw() {
  background(255);
  image(puntos, 0, 0);
  
  for (let x = 0; x < cant; x++) {
    for (let y = 0; y < cant; y++) {
      if ((x + y) % 2 === 0) {
        fill(255);
      } else {
        fill(0);
      }
      rect(400 + x * tam, y * tam, tam, tam);
      fill(0); 
      ellipse(400 + x * tam + tam / 2, y * tam + tam / 2, tamelipseX, tamelipseY);
    }
  }
}

function mouseDragged() {
  if (mouseAdentroPantalla()) {
    tamelipseX = map(mouseX, 0, width, 3, 19);
    tamelipseY = map(mouseY, 0, height, 3, 19);
  }
}

function mouseAdentroPantalla() {
  return (mouseX >= 0 && mouseX <= width && mouseY >= 0 && mouseY <= height);
}

function keyPressed() {
  tamelipseX = volverelipse;
  tamelipseY = volverelipse;
}
