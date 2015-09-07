/// <reference path="./all.d.ts" />

import * as mnist from 'mnist';
import {NeuralNetwork} from 'nervous';

function digitToNumber (digits: number[]): number {
  var res = -1;
  
  digits.forEach((x, i) => {
    if (x !== 0) {
      res = i;
    }
  });
  
  console.log(res);
  return res;
}

export function bootstrap () {
  
  var set = mnist.set(8000, 2000);
  
  var trainingSet = set.training;
  var testSet = set.test;
  
  for (var i = 0; i < 10; i++) {
    var digit = trainingSet[i].input,
        value = digitToNumber(trainingSet[i].output).toString();
 
    var el: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById('canvas' + i),
        span: HTMLElement = document.getElementById('value' + i);
        
    span.textContent = value;
    
    var context = el.getContext('2d');
    
    context.fillStyle = 'white';
    context.fillRect(0, 0, el.width, el.height);
    
    console.info('Drawing...');
    mnist.draw(digit, context, 0, 0); // draws a '1' mnist digit in the canvas
  
    // (<any>context).imageSmoothingEnabled = true;
    context.drawImage( el, 0, 0, 4*el.width, 4*el.height );
  }  
}
