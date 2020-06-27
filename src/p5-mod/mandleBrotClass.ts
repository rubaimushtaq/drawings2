import p5 from 'p5'
import Utils from '../Utils'
import Complex from './complex'

export class MandleBrotClass extends p5 {
  readonly factor = 2
  readonly xmin = -this.factor
  readonly xmax = this.factor

  readonly ymin = -this.factor
  readonly ymax = this.factor

  readonly rangex = this.xmax - this.xmin
  readonly rangey = this.ymax - this.ymin

  readonly w = 600
  readonly h = 600

  readonly xscl = this.w / this.rangex
  readonly yscl = -this.h / this.rangey

  setup = () => {
    this.createCanvas(this.w, this.h)
    this.colorMode(this.HSB)
    this.background('black')
    this.noStroke()
    this.noLoop()
  }

  draw = () => {
    this.translate(this.w / 2, this.h / 2)
    let count = 0
    for (const x of Utils.range(this.xmin, this.xmax, 0.005)) {
      for (const y of Utils.range(this.ymin, this.ymax, 0.005)) {
        count += 1
        if (count % 40000 == 0) {
          console.log(x, y)
        }
        const z = new Complex(x, y)
        const c = new Complex(-0.4, 0.6)
        const col = z.julia(c, 100, this.factor)
        if (col == 100) {
          this.fill(0)
        } else {
          this.fill(6 * col, 255, 255)
          this.rect(x * this.xscl, y * this.yscl, 1, 1)
        }
      }
    }
  }
}
