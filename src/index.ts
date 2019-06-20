import '@tensorflow/tfjs-node';
import * as faceapi from 'face-api.js';

import {
  canvas,
  faceDetectionNet,
  faceDetectionOptions,
  saveFile
} from './commons';

async function run() {
  await faceDetectionNet.loadFromDisk('./weights');

  const img = await canvas.loadImage('./images/faces.jpg');
  const detections = await faceapi.detectAllFaces(img, faceDetectionOptions);

  console.log(detections);

  const out = faceapi.createCanvasFromMedia(img) as any;
  faceapi.draw.drawDetections(out, detections);

  saveFile('faceDetection.jpg', out.toBuffer('image/jpeg'));
  console.log('done, saved results to out/faceDetection.jpg');
}

run();
