import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { SET_TITLE } from '../reducers/toolbarReducer';

@Component({
  selector: 'app-vanity-address',
  templateUrl: './vanity-address.component.html',
  styleUrls: ['./vanity-address.component.scss']
})
export class VanityAddressComponent implements OnInit {

  constructor(private store: Store<any>) { }

  ngOnInit() {
    this.store.dispatch({ type: SET_TITLE, payload: 'Vanity Address' });
  }

}
