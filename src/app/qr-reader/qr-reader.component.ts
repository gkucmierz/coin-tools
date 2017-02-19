import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { SET_TITLE } from '../reducers/toolbarReducer';

@Component({
  selector: 'app-qr-reader',
  templateUrl: './qr-reader.component.html',
  styleUrls: ['./qr-reader.component.scss']
})
export class QrReaderComponent implements OnInit {

  constructor(private store: Store<any>) { }

  ngOnInit() {
    this.store.dispatch({ type: SET_TITLE, payload: 'QR Reader' });
  }

}
