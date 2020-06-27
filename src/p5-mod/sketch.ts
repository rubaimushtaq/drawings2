import type p5 from 'p5'

import type { Color } from 'p5'

export const sketch = (p: p5) => {
  let backgroundColor: Color
  let x = 0
  let y = 0

  const width = 500
  const height = 500

  p.setup = () => {
    p.createCanvas(width, height)
    backgroundColor = p.color(p.random(255), p.random(255), p.random(255))

    x = p.random(width)
    y = height / 2
  }

  p.draw = () => {
    p.background(backgroundColor)
    p.fill(p.color(255, 0, 0))
    p.ellipse(x, y, 100, 100)

    x = (x + 1) % width
  }

  p.mousePressed = () => {
    backgroundColor = p.color(p.random(255), p.random(255), p.random(255))
  }
}
