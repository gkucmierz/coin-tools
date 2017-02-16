import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';

import { BitcoreService } from '../services/bitcore.service';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-send-from-privkey',
  templateUrl: './send-from-privkey.component.html',
  styleUrls: ['./send-from-privkey.component.scss']
})
export class SendFromPrivkeyComponent implements OnInit {
  public privkey = '';
  public srcAddr;
  public address;
  public networkFee = 0.0001;
  public doServiceFee;
  public serviceFee = 0.0005 * 1e8;
  public serviceFeeAddr = '1BTCuX3D27RoZ1g3TENnTMEkbYfGyusFHb';
  public unspents;
  public receiveAmount;
  public proxyEndpoint = 'https://free-cors-proxy.herokuapp.com/';
  public unspentsUrlTpl = 'https://blockchain.info/pl/unspent?active=';
  public pushUrl = 'http://btc.blockr.io/api/v1/tx/push';
  public txHash;

  constructor (private http: Http,
               private bitcore: BitcoreService) {}

  privkeyUpdate() {
    const {PrivateKey} = this.bitcore.lib;
    try {
      let priv = PrivateKey.fromString(this.privkey.trim());
      this.srcAddr = priv.toAddress().toString();
      this.unspents = null;
      this.getUnspents(this.srcAddr).subscribe(data => {
        this.unspents = data.map(out => {
          return {
            txId: out.tx_hash_big_endian,
            outputIndex: out.tx_output_n,
            address: this.srcAddr,
            script: out.script,
            satoshis: out.value
          };
        });
        this.updateSummary();
      });
    } catch (e) {
      this.srcAddr = '';
      this.unspents = null;
    }
    this.updateSummary();
  }

  sumSatoshis(unspents) {
    return unspents.reduce((acc, u) => acc + u.satoshis, 0);
  }

  sumValue(unspents) {
    return (this.sumSatoshis(unspents) * 1e-8).toFixed(8);
  }

  updateSummary() {
    const {Address} = this.bitcore.lib;

    if (!this.unspents) {
      this.receiveAmount = '';
      return;
    }

    let res = this.sumSatoshis(this.unspents);
    if (this.doServiceFee) {
      res -= this.serviceFee;
    }
    if (this.networkFee) {
      res -= (+this.networkFee) * 1e8;
    }

    try {
      let isValidAddr = Address.isValid(this.address.trim());
      if (isValidAddr) {
        this.receiveAmount = res > 0 ? this.formatBTC(res) : '';
      } else {
        this.receiveAmount = '';
      }
    } catch (e) {
      this.receiveAmount = '';
    }
  }

  formatBTC(satoshis) {
    return (satoshis * 1e-8).toFixed(8);
  }

  send() {
    const {Transaction} = this.bitcore.lib;

    try {
      let tx = new Transaction()
        .from(this.unspents);
      if (this.doServiceFee) {
        tx.to(this.serviceFeeAddr, this.serviceFee)
      }
      tx.change(this.address)
        .fee((+this.networkFee) * 1e8)
        .sign(this.privkey);
      console.log(tx.toString());
      this.pushtx(tx.toString())
        .subscribe(res => {
          this.txHash = tx.hash;
        });
    } catch (e) {
      console.error('something went wrong', e);
    }
  }

  clean() {
    this.privkey = '';
    this.address = '';
    this.networkFee = 0;
    this.doServiceFee = false;
    this.privkeyUpdate();
  }

  private pushtx(hex) {
    let url = this.proxyUrl(this.pushUrl);
    return this.http.post(url, {hex}, null)
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    try {
      return res.json()['unspent_outputs'];
    } catch(e) {
      return [];
    }
  }

  private handleError (error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    return Observable.throw(errMsg);
  }

  getUnspents(address) {
    let url = this.proxyUrl(this.unspentsUrlTpl + address)
    return this.http.get(url)
      .map(this.extractData)
      .catch(this.handleError);
  }

  proxyUrl(url) {
    return `${this.proxyEndpoint}${encodeURIComponent(url)}`;
  }

  ngOnInit() {
    this.privkeyUpdate();
  }

}
