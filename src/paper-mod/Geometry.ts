import paper from 'paper'
import { Matrix } from 'paper'

export class Geometry {
  static segment(path: paper.Path, index: number): [paper.Point, paper.Point] {
    return [path.segments[index - 1].point, path.segments[index].point]
  }

  static angle(p1: paper.Point, p2: paper.Point): number {
    let slope = (p2.y - p1.y) / (p2.x - p1.x)
    return (Math.atan(slope) * 180) / Math.PI
  }

  static reflectMatrix(angle: number): paper.Matrix {
    let m = new Matrix()
    m.a = Math.cos(2 * angle)
    m.b = Math.sin(2 * angle)
    m.c = Math.sin(2 * angle)
    m.d = -Math.cos(2 * angle)
    return m
  }

  static reflect(path: paper.Path, sideIndex: number): paper.Path {
    const [p1, p2] = this.segment(path, sideIndex)
    let angle = this.angle(p1, p2)
    let matrix = this.reflectMatrix(-angle)
    let path1 = <paper.Path>path.clone()
    path1.transform(matrix)
    const [q1, _] = this.segment(path1, sideIndex)
    path1.translate(q1.subtract(p1))
    return path1
  }
}
