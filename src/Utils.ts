export default class Utils {
  static *range(start: number, end: number, step = 1) {
    if (end === undefined) [end, start] = [start, 0]
    for (let n = start; n < end; n += step) yield n
  }
}

export type FrameEvent = {
  count: number
  delta: number
  time: number
}
