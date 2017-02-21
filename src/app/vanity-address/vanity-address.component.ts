import { Component, OnInit, OnDestroy, ApplicationRef } from '@angular/core';

import { Store } from '@ngrx/store';
import { SET_TITLE } from '../reducers/toolbarReducer';

@Component({
  selector: 'app-vanity-address',
  templateUrl: './vanity-address.component.html',
  styleUrls: ['./vanity-address.component.scss']
})
export class VanityAddressComponent implements OnInit, OnDestroy {
  private startsWith = '1';
  private ignoreCase = false;
  private limit = 20;
  private found = [];
  private workers = [];
  private threads = 1;
  private addressCnt = 0;
  private cores;

  constructor(private store: Store<any>,
              private appRef: ApplicationRef) {
    this.cores = Array(navigator['hardwareConcurrency'] || 8).fill(0).map((a,i) => i+1);
  }

  spawnWorker(startsWith, ignoreCase) {
    let base = document.querySelector('base').href;
    let worker = new Worker(base + 'assets/vanity-address.worker.js');

    worker.onmessage = msg => {
      this.workerMessage(JSON.parse(msg.data));
    };
    worker.postMessage(JSON.stringify({
      startsWith, ignoreCase
    }));

    this.workers.push(worker);
  }

  workerMessage(res) {
    if (res.found) {
      this.found.push({
        address: res.address,
        privkey: res.privkey
      });
      if (this.found.length >= this.limit) {
        this.terminateWorkers();
      }
    }
    this.addressCnt += res.cnt;
    this.appRef.tick();
  }

  scale(force) {
    let start = force || this.workers.length > 0;
    this.terminateWorkers();
    if (start) {
      while (this.workers.length < this.threads) {
        this.spawnWorker(this.startsWith, this.ignoreCase);
      }
    }
  }

  terminateWorkers() {
    this.workers.map(worker => worker.terminate());
    this.workers = [];
  }

  generate() {
    this.scale(true);
  }

  clean() {
    this.found = [];
    this.addressCnt = 0;
  }

  ngOnInit() {
    this.store.dispatch({ type: SET_TITLE, payload: 'Vanity Address' });
  }

  ngOnDestroy() {
    this.terminateWorkers();
  }
}
