import { Component, OnInit } from '@angular/core';

import { BitcoreService } from '../../services/bitcore.service';

import { Store } from '@ngrx/store';
import { SET_TITLE } from '../../reducers/toolbarReducer';

let base64 = require('base64-js');

@Component({
  selector: 'app-ecies-encrypt',
  templateUrl: './ecies-encrypt.component.html',
  styleUrls: ['./ecies-encrypt.component.scss']
})
export class EciesEncryptComponent implements OnInit {
  public msg = `
This tool allows you to encrypt any message using your bitcoin private key for specified recipient using his bitcoin public key.
Then only your recipient can decrypt this message and also he can be sure that this message was created by you (owner of encryption private key).
  `;
  public senderPriv = 'KwSfvc92pxP9KMEMBNSn2YHuV8GV5XsRp8mah1mcnmWz33sdYGvU';
  // L49Xk4WCeYFeMBBzsa9B4sdWANTi5eRA9JCEq8gZjCn19xqjrzYP
  public recipientPubkey = '027570f6a541a5af6f84d32665f1747f9740b132aa5a7f2728b76b5b0513ba7695';
  public encryptedMsg;

  constructor(private bitcore:BitcoreService,
              private store: Store<any>) { }

  update() {
    const {PrivateKey, PublicKey} = this.bitcore.lib;
    const ECIES = this.bitcore.ecies;
    try {
      let privkey = PrivateKey.fromString(this.senderPriv);
      let pubkey = new PublicKey(this.recipientPubkey);
      let sender = ECIES()
        .privateKey(privkey)
        .publicKey(pubkey);
      this.encryptedMsg = base64.fromByteArray(sender.encrypt(this.msg || ''));
    } catch (e) {
      this.encryptedMsg = '';
      console.error(e);
    };
  }

  reset() {
    this.msg = '';
    this.senderPriv = '';
    this.recipientPubkey = '';
    this.update();
  }

  ngOnInit() {
    this.update();
    this.store.dispatch({ type: SET_TITLE, payload: 'Encrypt Message' });
  }

}
