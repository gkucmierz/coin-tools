import { Component, OnInit } from '@angular/core';

import { BitcoreService } from '../../services/bitcore.service';

import { Store } from '@ngrx/store';
import { SET_TITLE } from '../../reducers/toolbarReducer';
import { ECIES_DECRYPT_SET_ENCRYPTED_MSG } from '../../reducers/eciesDecryptReducer';
import { ECIES_DECRYPT_SET_RECIPIENT_PRIV } from '../../reducers/eciesDecryptReducer';
import { ECIES_DECRYPT_SET_SENDER_PUB } from '../../reducers/eciesDecryptReducer';
import { ECIES_DECRYPT_CLEAR } from '../../reducers/eciesDecryptReducer';


let base64 = require('base64-js');

@Component({
  selector: 'app-ecies-decrypt',
  templateUrl: './ecies-decrypt.component.html',
  styleUrls: ['./ecies-decrypt.component.scss']
})
export class EciesDecryptComponent implements OnInit {
  private encryptedMsg;
  private recipientPriv;
  private senderPub;
  private msg;

  constructor(private bitcore:BitcoreService,
              private store: Store<any>) { }

  update() {
    const {PrivateKey, PublicKey} = this.bitcore.lib;
    const ECIES = this.bitcore.ecies;
    const Message = this.bitcore.message;

    try {
      let msgBuff = base64.toByteArray((this.encryptedMsg||'').trim());
      let privkey = PrivateKey.fromString(this.recipientPriv);
      let pubkey = new PublicKey(this.senderPub);
      const Buffer = ECIES().privateKey(privkey).publicKey(pubkey).encrypt('').constructor;
      let recipient = ECIES()
        .privateKey(privkey)
        .publicKey(pubkey);

      this.msg = recipient.decrypt(new Buffer(msgBuff)).toString();
    } catch (e) {
      this.msg = '';
      console.error(e);
    };
  }

  changeEncryptedMsg() {
    this.store.dispatch({ type: ECIES_DECRYPT_SET_ENCRYPTED_MSG,
      payload: this.encryptedMsg });
  }

  changeRecipientPriv() {
    this.store.dispatch({ type: ECIES_DECRYPT_SET_RECIPIENT_PRIV,
      payload: this.recipientPriv });
  }

  changeSenderPub() {
    this.store.dispatch({ type: ECIES_DECRYPT_SET_SENDER_PUB,
      payload: this.senderPub });
  }

  clear() {
    this.store.dispatch({ type: ECIES_DECRYPT_CLEAR });
  }

  ngOnInit() {
    this.store.dispatch({ type: SET_TITLE, payload: 'Decrypt Message' });

    this.store.select('eciesDecrypt').subscribe(store => {
      this.encryptedMsg = store['encryptrdMsg'];
      this.recipientPriv = store['recipientPriv'];
      this.senderPub = store['senderPub'];
      this.update();
    });
  }
}
