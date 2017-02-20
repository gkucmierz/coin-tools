import { Component, OnInit } from '@angular/core';
import { MaterialModule } from '@angular/material';

import { Store } from '@ngrx/store';
import { SET_TITLE } from './reducers/toolbarReducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public title;

  tools = [
    {
      route: 'sign-message',
      name: 'Sign Message'
    },
    {
      route: 'check-signature',
      name: 'Check Signature'
    },
    {
      route: 'ecies',
      name: 'ECIES'
    },
    {
      route: 'send-from-privkey',
      name: 'Send from Privkey'
    },
    {
      route: 'qr-reader',
      name: 'QR Reader'
    }
  ];

  constructor(private store: Store<any>) {
    this.store.dispatch({ type: SET_TITLE, payload: 'Coin Tools' });
  }

  ngOnInit() {
    this.store.select('toolbar').subscribe(store => {
      this.title = store['title'];
    });
  }
}
