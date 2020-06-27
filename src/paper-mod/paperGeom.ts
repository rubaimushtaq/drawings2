import p from 'paper'

import Utils, { FrameEvent } from '../Utils'

const setup = () => {
  const canvas = <HTMLCanvasElement>document.getElementById('myCanvas')
  canvas.height = 600
  canvas.width = 600
  p.setup(canvas)
}

export const paperGeom = () => {
  setup()

  let r = new p.Path.Rectangle(p.view.bounds)
  r.fillColor = new p.Color('grey')

  let rectCenter = p.view.center.add(new p.Point(200, 0))
  let rect = new p.Path.Rectangle(rectCenter, new p.Size(50, 50))
  rect.fillColor = new p.Color('white')
  setEvents(rect)

  for (let i of Utils.range(1, 12)) {
    let item = <paper.Path.Rectangle>rect.clone()
    item.rotate((360 / 12) * i, p.view.center)
    setEvents(item)
  }
}

const setEvents = (r: paper.Path.Rectangle) => {
  r.onClick = (_: MouseEvent) => {
    r.fillColor = new p.Color('red')
  }
  r.onFrame = (_: FrameEvent) => {
    r.rotate(1, p.view.center)
    r.rotate(1, r.position)
  }
}
