export default class Complex {
  constructor(readonly re: number, readonly im: number) {}

  add(that: Complex): Complex {
    return new Complex(this.re + that.re, this.im + that.im)
  }

  multiply(that: Complex): Complex {
    return new Complex(
      this.re * that.re - this.im * that.im,
      this.im * that.re + this.re * that.im,
    )
  }

  magnitude(): number {
    return Math.sqrt(this.re ** 2 + this.im ** 2)
  }

  mandelbrot(num: number, factor: number): number {
    return this.julia(this, num, factor)
  }

  julia(c: Complex, num: number, factor: number): number {
    let count = 0
    let z: Complex = this
    while (count <= num) {
      if (z.magnitude() > factor) {
        return count
      }
      z = z.multiply(z).add(c)
      count += 1
    }
    return num
  }
}
