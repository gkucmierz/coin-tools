import { Component, OnInit } from '@angular/core';

import { BitcoreService } from '../services/bitcore.service';

import { Store } from '@ngrx/store';
import { SET_TITLE } from '../reducers/toolbarReducer';

@Component({
  selector: 'app-sign-message',
  templateUrl: './sign-message.component.html',
  styleUrls: ['./sign-message.component.css']
})
export class SignMessageComponent implements OnInit {
  public msg;
  public signedMsg;
  public privkey;

  constructor(private bitcore: BitcoreService,
              private store: Store<any>) { }

  keyup() {
    const {PrivateKey} = this.bitcore.lib;
    const Message = this.bitcore.message;

    // L1BmvDhfzFCtcxcgSJ7pEr1mxZ82AerncJPZvzR6dzM1sbjSYwGi
    let msg = (this.msg||'').trim();
    try {
      let privkey = PrivateKey.fromString(this.privkey);
      let address = privkey.toAddress()+'';

      this.signedMsg = `-----BEGIN BITCOIN SIGNED MESSAGE-----
${msg}
-----BEGIN SIGNATURE-----
${address}
${Message(msg).sign(privkey)}
-----END BITCOIN SIGNED MESSAGE-----`;

    } catch (e) {}
  }

  ngOnInit() {
    this.store.dispatch({ type: SET_TITLE, payload: 'Sign Message' });
  }

}
