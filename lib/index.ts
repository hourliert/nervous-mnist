/// <reference path="./all.d.ts" />

import {MnistData} from 'mnist-data';
import {NeuralNetwork} from 'nervous';

// console.log();

// function digitToNumber (digits: number[]): number {
//   var res = -1;
  
//   digits.forEach((x, i) => {
//     if (x !== 0) {
//       res = i;
//     }
//   });
  
//   console.log(res);
//   return res;
// }

export function bootstrap () {
  
  var mnist = new MnistData(1),
      digit = mnist.getOneTraining();
      
  var el: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById('canvas'),
      span: HTMLElement = document.getElementById('value');
      
  span.textContent = digit.value.toString();
  
  var context = el.getContext('2d');
  
  context.fillStyle = 'white';
  context.fillRect(0, 0, el.width, el.height);
  
  console.info('Drawing...');
  
  MnistData.draw(digit.pixels, context, 0, 0); // draws a '1' mnist digit in the canvas

  // (<any>context).imageSmoothingEnabled = true;
  context.drawImage( el, 0, 0, 4*el.width, 4*el.height );
}
