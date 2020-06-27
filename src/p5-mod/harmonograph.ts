import type p5 from 'p5'
import type { Element } from 'p5'

export const hGraph = (p: p5) => {
  const width = 600
  const height = 600
  const slider: Element = p.createSlider(0, 255)

  p.setup = () => {
    p.createCanvas(width, height)
    p.noStroke()
    // p.noLoop()
  }

  p.draw = () => {
    p.background(255)
    p.translate(width / 2, height / 2)
    const points: [number, number][] = []
    let t = 0
    while (t < 1000) {
      points.push(harmonograph(t))
      t += 0.1
    }

    p.stroke(<number>slider.value(), 0, 0)
    p.strokeWeight(0.1)

    for (const [i, s] of points.entries()) {
      if (i < points.length - 1) {
        p.line(s[0], s[1], points[i + 1][0], points[i + 1][1])
      }
    }
  }

  const harmonograph = (t: number): [number, number] => {
    const [a1, a2, a3, a4] = [100, 100, 100, 100]
    const [f1, f2, f3, f4] = [2.01, 3, 3, 2]
    const [p1, p2, p3, p4] = [-p.PI / 2, 0, -p.PI / 16, 0]
    const [d1, d2, d3, d4] = [0.00085, 0.0065, 0, 0]
    const x =
      a1 * p.cos(f1 * t + p1) * p.exp(-d1 * t) +
      a3 * p.cos(f3 * t + p3) * p.exp(-d3 * t)
    const y =
      a2 * p.sin(f2 * t + p2) * p.exp(-d2 * t) +
      a4 * p.sin(f4 * t + p4) * p.exp(-d4 * t)
    return [x, y]
  }
}
