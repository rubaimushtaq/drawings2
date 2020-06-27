import paper from 'paper'
import { Path, Point, Group, Raster } from 'paper'

export const paperSketch = () => {
  const canvas = <HTMLCanvasElement>document.getElementById('myCanvas')
  canvas.height = 1000
  canvas.width = 1000
  paper.setup(canvas)

  const motif = new Raster('src/motif-1.png')
  motif.position = paper.view.center
  motif.scale(0.3)

  const triangle = new Path()
  triangle.add(motif.bounds.topLeft)
  triangle.add(motif.bounds.topRight)
  triangle.add(motif.bounds.bottomRight)
  triangle.closePath()
  triangle.clipMask = true

  let g = new Group([motif, triangle])
  let mirroredT = <paper.Group>g.clone()
  mirroredT.scale(1, -1)
  mirroredT.rotate(120)
  let diamond = new Group([g, mirroredT])

  let hexagon = new Group([diamond])

  for (let i in Array.from(Array(6).keys())) {
    let d = <paper.Group>diamond.clone()
    d.rotate(60 * +i, motif.bounds.bottomRight)
    hexagon.addChild(d)
  }

  let h2 = <paper.Group>hexagon.clone()
  let point = new Point(0, -motif.bounds.height * 2)
  h2.translate(point)

  for (let i in Array.from(Array(6).keys())) {
    let d = <paper.Group>h2.clone()
    d.rotate(60 * +i, hexagon.position)
  }
}
