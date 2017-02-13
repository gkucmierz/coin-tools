import { Component, OnInit } from '@angular/core';
import { BitcoreService } from '../services/bitcore.service';

@Component({
  selector: 'app-check-signature',
  templateUrl: './check-signature.component.html',
  styleUrls: ['./check-signature.component.scss']
})
export class CheckSignatureComponent implements OnInit {
  public signedMsg = `-----BEGIN BITCOIN SIGNED MESSAGE-----
Signature test
-----BEGIN SIGNATURE-----
1AStMhq3k957K3dVtGv5WPVXbUWdHacX7k
IPPSaoJkUyCpAVFLctuyDd2VF+0rfOCuoteOMF6xQtrBV5zJTXYqNt9/cSYahIGntL5ibZgS+tp6Jp/QUMxlrIA=
-----END BITCOIN SIGNED MESSAGE-----`;
  public bitcore;
  public valid = true;

  constructor(_bitcore:BitcoreService) {
    this.bitcore = _bitcore;
  }

  change() {
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
    }
  }

  ngOnInit() {
  }

}
