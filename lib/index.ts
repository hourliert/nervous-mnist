/// <reference path="./all.d.ts" />

import * as mnist from 'mnist';
import {NeuralNetwork} from 'nervous';

export function bootstrap () {
  
  for (var i = 0; i < 10; i++) {
    var digit = mnist[i].get();
 
    var el: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById('canvas' + i);
    
    var context = el.getContext('2d');
    
    context.fillStyle = 'white';
    context.fillRect(0, 0, el.width, el.height);
    
    console.info('Drawing...');
    mnist.draw(digit, context, 0, 0); // draws a '1' mnist digit in the canvas
  
    // (<any>context).imageSmoothingEnabled = true;
    context.drawImage( el, 0, 0, 4*el.width, 4*el.height );
  }  
  
}
