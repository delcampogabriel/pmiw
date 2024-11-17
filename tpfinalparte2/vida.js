function dibujarBarraDeVida(entidad, etiqueta, posY, esSuperior) {
  let anchoBarra = 300;
  let altoBarra = 20;
  let xBarra = (width - anchoBarra) / 2;
  let porcentajeVida = entidad.vida / 100;

  fill(100);
  rect(xBarra, posY, anchoBarra, altoBarra);

  fill(0, 255, 0); 
  rect(xBarra, posY, anchoBarra * porcentajeVida, altoBarra);

  fill(255);
  textSize(16);
  textAlign(CENTER, CENTER);
  text(etiqueta + ": " + entidad.vida, xBarra + anchoBarra / 2, posY + altoBarra / 2);
}