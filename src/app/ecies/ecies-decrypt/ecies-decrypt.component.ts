import { Component, OnInit } from '@angular/core';

import { BitcoreService } from '../../services/bitcore.service';

let base64 = require('base64-js');

@Component({
  selector: 'app-ecies-decrypt',
  templateUrl: './ecies-decrypt.component.html',
  styleUrls: ['./ecies-decrypt.component.scss']
})
export class EciesDecryptComponent implements OnInit {

  public encryptedMsg = `A06fJAU2G2iejL+89LIVOfYNKQMaIBgRJ3b96QxBhpDY+MaXsOPuZgnIjksj7WfhLIlbTExswwQVP9Je82+ai/SAr8VosOEBi7cn/TQsu5bKmKBljS8wJ9ZGqZXI9/bncY/fSGKjn1iNXYPTpbXr37/jSvyHnbTC1NaIfruqC9+HUxn14yG3c6dDmPL2hO13L2xtV8X2vwGk/2RdbyMlWXiaeRVKs7sJWJE7sBgOvXv64ZUqSI0kMYNO8lS8hMSCbYMdjdfuLoq/qHqS3NBbc1HKv3s0sNonaowFcJ3p3kLKCSH1K65fIl5/ulWwJC3Loax2yqaV70SoZEvzWQqSaRkXqFU2Yylex3DoYMGpcOcg39KXU6q5nqb3xYR4Yr9W6Nd/QUMUf/11W1o+bZELqdvjORvwzTxm5YEyn4n8FbBR9S9Q5eG74eWVXbF44M1Q0zWgEDHsupUL8gllHlO2/y8x5/P3BaLltf+Q4B3cFzPK`;
  public recipientPriv = 'L49Xk4WCeYFeMBBzsa9B4sdWANTi5eRA9JCEq8gZjCn19xqjrzYP';
  // KwSfvc92pxP9KMEMBNSn2YHuV8GV5XsRp8mah1mcnmWz33sdYGvU
  public senderPub = '034e9f2405361b689e8cbfbcf4b21539f60d29031a2018112776fde90c418690d8';
  public msg;
  public bitcore;

  constructor(_bitcore:BitcoreService) {
    this.bitcore = _bitcore;
  }

  update() {
    const {PrivateKey, PublicKey} = this.bitcore.lib;
    const ECIES = this.bitcore.ecies;
    const Message = this.bitcore.message;

    try {
      let msgBuff = base64.toByteArray(this.encryptedMsg.trim());
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

  reset() {
    this.encryptedMsg = '';
    this.recipientPriv = '';
    this.senderPub = '';
    this.update();
  }

  ngOnInit() {
    this.update();
  }

}
