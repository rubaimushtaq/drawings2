import type p5 from 'p5'
import Utils from '../Utils'
import Complex from './complex'

export const mandleBrot = (p: p5) => {
  const factor = 2
  const xmin = -factor
  const xmax = factor

  const ymin = -factor
  const ymax = factor

  const rangex = xmax - xmin
  const rangey = ymax - ymin

  const width = 600
  const height = 600

  const xscl = width / rangex
  const yscl = -height / rangey

  p.setup = () => {
    p.createCanvas(width, height)
    p.colorMode(p.HSB)
    p.background('black')
    p.noStroke()
    p.noLoop()
  }

  p.draw = () => {
    p.translate(width / 2, height / 2)
    let count = 0
    for (const x of Utils.range(xmin, xmax, 0.005)) {
      for (const y of Utils.range(ymin, ymax, 0.005)) {
        count += 1
        if (count % 40000 == 0) {
          console.log(x, y)
        }
        const z = new Complex(x, y)
        const c = new Complex(-0.4, 0.6)
        const col = z.julia(c, 100, factor)
        if (col == 100) {
          p.fill(0)
        } else {
          p.fill(6 * col, 255, 255)
          p.rect(x * xscl, y * yscl, 1, 1)
        }
      }
    }
  }
}
