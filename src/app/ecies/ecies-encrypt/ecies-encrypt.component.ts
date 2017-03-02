import { Component, OnInit } from '@angular/core';

import { BitcoreService } from '../../services/bitcore.service';

import { Store } from '@ngrx/store';
import { SET_TITLE } from '../../reducers/toolbarReducer';
import { ECIES_ENCRYPT_SET_MSG } from '../../reducers/eciesEncryptReducer';
import { ECIES_ENCRYPT_SET_SENDER_PRIV } from '../../reducers/eciesEncryptReducer';
import { ECIES_ENCRYPT_SET_RECIPIENT_PUB } from '../../reducers/eciesEncryptReducer';
import { ECIES_ENCRYPT_CLEAR } from '../../reducers/eciesEncryptReducer';

let base64 = require('base64-js');

@Component({
  selector: 'app-ecies-encrypt',
  templateUrl: './ecies-encrypt.component.html',
  styleUrls: ['./ecies-encrypt.component.scss']
})
export class EciesEncryptComponent implements OnInit {
  public msg;
  public senderPriv;
  public recipientPub;
  public encryptedMsg;

  constructor(private bitcore:BitcoreService,
              private store: Store<any>) { }

  update() {
    const {PrivateKey, PublicKey} = this.bitcore.lib;
    const ECIES = this.bitcore.ecies;
    try {
      let privkey = PrivateKey.fromString(this.senderPriv);
      let pubkey = new PublicKey(this.recipientPub);
      let sender = ECIES()
        .privateKey(privkey)
        .publicKey(pubkey);
      this.encryptedMsg = base64.fromByteArray(sender.encrypt(this.msg || ''));
    } catch (e) {
      this.encryptedMsg = '';
      console.error(e);
    };
  }

  changeMsg() {
    this.store.dispatch({ type: ECIES_ENCRYPT_SET_MSG,
      payload: this.msg });
  }

  changeSenderPriv() {
    this.store.dispatch({ type: ECIES_ENCRYPT_SET_SENDER_PRIV,
      payload: this.senderPriv });
  }

  changeRecipientPub() {
    this.store.dispatch({ type: ECIES_ENCRYPT_SET_RECIPIENT_PUB,
      payload: this.recipientPub });
  }

  clear() {
    this.store.dispatch({ type: ECIES_ENCRYPT_CLEAR });
  }

  ngOnInit() {
    this.store.dispatch({ type: SET_TITLE, payload: 'Encrypt Message' });

    this.store.select('eciesEncrypt').subscribe(store => {
      this.msg = store['msg'];
      this.senderPriv = store['senderPriv'];
      this.recipientPub = store['recipientPub'];
      this.update();
    });
  }

}
