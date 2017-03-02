import { Component, OnInit } from '@angular/core';
import { BitcoreService } from '../services/bitcore.service';

import { Store } from '@ngrx/store';
import { SET_TITLE } from '../reducers/toolbarReducer';
import { CHECK_SIGNATURE_SET_SIGNED_MSG } from '../reducers/checkSignatureReducer';

@Component({
  selector: 'app-check-signature',
  templateUrl: './check-signature.component.html',
  styleUrls: ['./check-signature.component.scss']
})
export class CheckSignatureComponent implements OnInit {
  public signedMsg = '';
  public valid = true;

  constructor(private bitcore: BitcoreService,
              private store: Store<any>) { }

  change() {
    this.store.dispatch({ type: SET_SIGNED_MSG, payload: this.signedMsg });
  }

  updateStatus() {
    const Message = this.bitcore.message;
    let parts = (this.signedMsg+'').split(/\-{5}[\w\s]+\-{5}/i);
    if (parts.length === 4) {
      let msg = parts[1];
      let [nil, addr, sig] = parts[2].split(/\n/);
      try {
        this.valid = new Message(msg.trim()).verify(addr, sig);
      } catch (e) {
        this.valid = false;
      }
    } else {
      this.valid = false;
    }
  }

  ngOnInit() {
    this.store.dispatch({ type: SET_TITLE, payload: 'Check Signature' });

    this.store.select('checkSignature').subscribe(store => {
      this.signedMsg = store['signedMsg'];
      this.updateStatus();
    });
  }

}
