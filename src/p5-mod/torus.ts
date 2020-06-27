import type p5 from 'p5'

export const torus = (p: p5) => {
  const W = 720
  let C = 0
  let T: p5.Graphics = null

  p.setup = () => {
    p.createCanvas(W, W, p.WEBGL)
    p.noStroke()
    T = p.createGraphics(W, W)
    p.noStroke()
    p.texture(T)
  }

  p.draw = () => {
    C += 5e-4
    p.background(0)
    for (let y = 0; y < 60; y++) {
      for (let x = 0; x < 60; x++) {
        const n = p.int(p.noise(p.mag(x, y) / W, C) * 2 ** 24)
        T.fill('#' + p.hex(n, 6)).rect(x * 12, y * 12, 10, 10)
      }
    }
    p.rotateX(C * 4)
    p.rotateY(C * 6)
    p.torus(400, 300)
  }
}
