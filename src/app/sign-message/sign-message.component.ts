import { Component, OnInit } from '@angular/core';

import { BitcoreService } from '../services/bitcore.service';

@Component({
  selector: 'app-sign-message',
  templateUrl: './sign-message.component.html',
  styleUrls: ['./sign-message.component.css']
})
export class SignMessageComponent implements OnInit {
  public msg;
  public signedMsg;
  public privkey;
  public bitcore;

  constructor(_bitcore:BitcoreService) {
    this.bitcore = _bitcore;
  }

  keyup() {
    const {PrivateKey} = this.bitcore.lib;
    const Message = this.bitcore.message;

    // L1BmvDhfzFCtcxcgSJ7pEr1mxZ82AerncJPZvzR6dzM1sbjSYwGi
    let msg = (this.msg||'').trim();
    try {
      let privkey = PrivateKey.fromString(this.privkey);
      let address = privkey.toAddress()+'';
      console.log(address);
      this.signedMsg = `-----BEGIN BITCOIN SIGNED MESSAGE-----
${msg}
-----BEGIN SIGNATURE-----
${address}
${Message(msg).sign(privkey)}
-----END BITCOIN SIGNED MESSAGE-----`;

    } catch (e) {}
  }

  ngOnInit() {
  }

}
