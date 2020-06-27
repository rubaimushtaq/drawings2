import type p5 from 'p5'

export const crazy = (p: p5) => {
  let r: number = 0
  let t: number = 0

  p.setup = () => {
    p.createCanvas(720, 720)
    p.stroke(-1)
  }

  p.draw = () => {
    p.clear()
    t += 0.003
    for (r = 0; r < 6; r += p.PI / 4) {
      f(360, 360, r, 120)
    }
  }

  const f = (x: number, y: number, r: number, d: number) => {
    if (d > 3) {
      p.line(x, y, (x += p.cos(r) * d), (y -= p.sin(r) * d))
      f(x, y, r + y / 99 + t, d / 1.5)
      f(x, y, r - y / 99 - t, d / 1.5)
    }
  }
}
