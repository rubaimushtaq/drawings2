import p5 from 'p5'
import { sketch } from './sketch'
import { geom } from './geom'
import { hGraph } from './harmonograph'
import { mandleBrot } from './mandlebrot'
import { MandleBrotClass } from './mandleBrotClass'
import { torus } from './torus'
import { crazy } from './crazy'

export const runP5 = () => {
  // new p5(sketch)
  // new p5(geom)
  // new p5(torus)
  new p5(crazy)
  // new p5(hGraph)
  // new p5(mandleBrot)
  // new MandleBrotClass(() => {
  // })
}
