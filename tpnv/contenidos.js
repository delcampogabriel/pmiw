function pantallas() {
  fill(255, 204, 0);
  strokeWeight(5);
  stroke(0);

  const configuraciones = {
    1: { x: 30, y: 300, textIndices: [] },
    2: { x: 30, y: 30, textIndices: [] },
    3: { x: 30, y: 30, textIndices: [] },
    4: { x: 50, y: 390, textIndices: [0, 1] },
    5: { x: 30, y: 390, textIndices: [2] },
    6: { x: 30, y: 390, textIndices: [3] },
    7: { x: 180, y: 370, textIndices: [4] },
    8: { x: 60, y: 320, textIndices: [5] },
    9: { x: 30, y: 410, textIndices: [6] },
    10: { x: 250, y: 410, textIndices: [7] },
    11: { x: 140, y: 370, textIndices: [8] },
    12: { x: 60, y: 390, textIndices: [9] },
    13: { x: 120, y: 430, textIndices: [10, 11, 12] },
    14: { x: 130, y: 400, textIndices: [13] },
    15: { x: 120, y: 400, textIndices: [14] },
    16: { x: 50, y: 420, textIndices: [15, 16, 17] },
    17: { x: 195, y: 390, textIndices: [18] },
    18: { x: 30, y: 320, textIndices: [] },
    19: { x: 30, y: 340, textIndices: [] },
    20: { x: -10, y: 370, textIndices: [19, 20, 21, 22] },
    21: { x: 30, y: 320, textIndices: [] },
    22: { x: 170, y: 380, textIndices: [23] },
    23: { x: 30, y: 340, textIndices: [] },
    24: { x: 100, y: 370, textIndices: [24] },
  };

  let img = imagenes[estado];
   if (configuraciones[estado]) {
    let { x, y, textIndices } = configuraciones[estado];

  image(img, 0, 0);
    for (let i = 0; i < textIndices.length; i++) {
      text(txt[textIndices[i]], x, y + i * 20);
    }
  }
}
