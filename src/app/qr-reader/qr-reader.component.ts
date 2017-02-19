import { Component, OnInit, OnDestroy, ElementRef } from '@angular/core';

import { Store } from '@ngrx/store';
import { SET_TITLE } from '../reducers/toolbarReducer';
import { ADD_ITEM, CLEAN } from '../reducers/qrReaderReducer';

const jsQR = require('jsqr');

@Component({
  selector: 'app-qr-reader',
  templateUrl: './qr-reader.component.html',
  styleUrls: ['./qr-reader.component.scss']
})
export class QrReaderComponent implements OnInit, OnDestroy {
  private items = [];

  private video;
  private canvas;
  private context;
  private stream;
  private stopped;

  constructor(private store: Store<any>,
              private el: ElementRef) { }

  decodedSuccess(str) {
    if (str !== this.items[0]) {
      console.log('dispatch');
      this.store.dispatch({ type: ADD_ITEM, payload: str });
    }
  }

  stop() {
    this.stream.getTracks().map(track => track.stop());
    this.stopped = true;
  }

  clean() {
    this.store.dispatch({ type: CLEAN });
  }

  startJsqr() {
    const querySelector = sel => this.el.nativeElement.querySelector(sel);

    this.video = querySelector('video');
    this.canvas = querySelector('canvas');

    this.context = this.canvas.getContext('2d');
    let width = parseInt(this.canvas.style.width);
    let height = parseInt(this.canvas.style.height);
    this.canvas.width = width;
    this.canvas.height = height;

    navigator['getUserMedia'] = navigator['getUserMedia'] ||
      navigator['webkitGetUserMedia'] ||
      navigator['mozGetUserMedia'];
    if (navigator.getUserMedia){
      navigator.getUserMedia({video: true},
        this.successCallback.bind(this), this.errorCallback.bind(this));
      requestAnimationFrame(this.tick.bind(this));
    }
  }

  successCallback(stream) {
    this.stream = stream;
    let URL = window['URL'] || window['webkitURL'];

    if (URL) {
      this.video.src = URL.createObjectURL(stream);
    } else if (this.video.mozSrcObject !== undefined) {
      this.video.mozSrcObject = stream;
    } else {
      this.video.src = stream;
    }
  }

  errorCallback() { }

  tick() {
    if (!this.stopped) {
      requestAnimationFrame(this.tick.bind(this));
    }
    let width = parseInt(this.canvas.style.width);
    let height = parseInt(this.canvas.style.height);

    if (this.video.readyState === this.video.HAVE_ENOUGH_DATA){
      // Load the video onto the canvas
      this.context.drawImage(this.video, 0, 0, width, height);
      // Load the image data from the canvas
      let imageData = this.context.getImageData(0, 0, width, height);
      let decoded = jsQR.decodeQRFromImage(imageData.data, imageData.width, imageData.height);
      if(decoded) {
        this.decodedSuccess(decoded);
      }
    }
  }

  ngOnInit() {
    this.startJsqr();
    this.store.dispatch({ type: SET_TITLE, payload: 'QR Reader' });

    this.store.select('qrReader').subscribe(store => {
      this.items = store['items'];
    });
  }

  ngOnDestroy() {
    this.stop();
  }
}

