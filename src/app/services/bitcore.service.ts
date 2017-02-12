import { Injectable } from '@angular/core';

@Injectable()
export class BitcoreService {
  public lib;
  public message;

  constructor() {
    this.lib = window['require']('bitcore-lib');
    this.message = window['require']('bitcore-message');
  }

}
