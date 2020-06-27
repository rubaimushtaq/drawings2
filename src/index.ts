/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

import confetti from 'canvas-confetti';

let elementById = <HTMLCanvasElement>document.getElementById('canvas');

confetti.create(elementById, {
  resize: true,
  useWorker: true,
})({ particleCount: 2000, spread: 200 });

