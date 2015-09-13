/// <reference path="./all.d.ts" />

import {MnistData} from 'mnist-data';
import {NeuralNetwork} from 'nervous';

function getDigitFromArray (a: number[]): number {
  
  let value = -1,
      max = -1;
  
  a.forEach((x, i) => {
    if (x > max) {
      max = x;
      value = i;
    }
  });
  return value;
  
}

function computeAccuracy (n: NeuralNetwork, testingSet): number {
  
  let ret = n.forward(testingSet),
      differentCase = testingSet.length;
  
  for (let i = 0; i < testingSet.length; i++) {
    if (testingSet[i].value !== getDigitFromArray(ret[i])) {
      differentCase--;
    }
  }
  return differentCase / testingSet.length;
  
}

export function bootstrap () {
  
  console.log('Getting mnist Data.');
  
  let mnist = new MnistData(4),
      training = mnist.training,
      testing = mnist.testing;
      
  console.log('Ready to compute!');
  
  let network = new NeuralNetwork({
      inputLayerSize: Math.pow(28, 2),
      hiddenLayers: [50],
      outputLayerSize: 10,
      trainingOptions: {
        batchSize: 20,
        learningRate: 0.1,
        iterations: 20,
        log: true,
        logForward: false,
        logBackward: false,
        regularization: 0
      },
      costStrategy: 0
    });
    
  console.log(`Accuracy Before Training ${computeAccuracy(network, testing)}`);
  
  console.log(`Starting Training.`);
  network.train(training);
  
  console.log(`Accuracy After Training ${computeAccuracy(network, testing)}`);
  console.log('Done.');

}
