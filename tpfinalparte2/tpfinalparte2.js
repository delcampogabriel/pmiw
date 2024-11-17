// Comision 2
// Del Campo Gabriel
// 121123/3
// Catino Emanuel
// 93071/6
// https://www.youtube.com/watch?v=8JHaCHLoCfo

let jugador;
let enemigo;
let balas = [];
let balasEnemigo = [];
let perdiste = false;
let victoria = false; 
let imgfondo; 
let imgjugador; 
let imgenemigo; 

function preload() {
  imgfondo = loadImage('data/img18.jpg'); 
  imgjugador = loadImage('data/rigby.png'); 
  imgenemigo = loadImage('data/diablo.png'); 
}

function setup() {
  createCanvas(640, 480);
  jugador = new Jugador();
  enemigo = new Enemigo();
}

function draw() {
  background(0);
  image(imgfondo, 0, 0, width, height);

  if (perdiste) {
    mostrarMensaje("¡Perdiste!", [255, 0, 0]);
    return;
  }

  if (victoria) {
    mostrarMensaje("¡Ganaste!", [0, 255, 0]);
    return;
  }

  dibujarBarraDeVida(enemigo, "Vida del enemigo", 20, true);
  dibujarBarraDeVida(jugador, "Vida del jugador", height - 40, false);

  jugador.actualizar();
  jugador.mostrar();

  enemigo.actualizar();
  enemigo.mostrar();

  actualizarBalas();

  if (jugador.vida <= 0) perdiste = true;

  if (enemigo.vida <= 0) victoria = true;
}

function keyPressed() {
  if (keyCode === 32 && !perdiste && !victoria) {
    balas.push(new Bala(jugador.x, jugador.y));
  }
}

function actualizarBalas() {
  for (let i = balas.length - 1; i >= 0; i--) {
    balas[i].actualizar();
    balas[i].mostrar();

    if (balas[i].impacta(enemigo)) {
      enemigo.recibirDaño(5);
      balas.splice(i, 1);
    }
  }

  for (let i = balasEnemigo.length - 1; i >= 0; i--) {
    balasEnemigo[i].actualizar();
    balasEnemigo[i].mostrar();

    if (balasEnemigo[i].impacta(jugador)) {
      jugador.recibirDaño(20);
      balasEnemigo.splice(i, 1);
    }
  }
}

function mostrarMensaje(mensaje, color) {
  fill(color);
  textSize(50);
  textAlign(CENTER, CENTER);
  text(mensaje, width / 2, height / 2);
}
