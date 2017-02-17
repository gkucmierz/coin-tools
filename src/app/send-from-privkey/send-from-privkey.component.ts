import { Component, OnInit } from '@angular/core';

import { BitcoreService } from '../services/bitcore.service';
import { DataService } from '../services/data.service';

import { Store } from '@ngrx/store';
import { SET_TITLE } from '../reducers/toolbarReducer';

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
  public unspentsUrlTpl = 'https://blockchain.info/pl/unspent?active=';
  public pushUrl = 'http://btc.blockr.io/api/v1/tx/push';
  public txHash;

  constructor (private bitcore: BitcoreService,
               private data: DataService,
               private store: Store<any>) {}

  privkeyUpdate() {
    const {PrivateKey} = this.bitcore.lib;
    try {
      let priv = PrivateKey.fromString(this.privkey.trim());
      this.srcAddr = priv.toAddress().toString();
      this.unspents = null;
      this.getUnspents(this.srcAddr).subscribe(data => {
        let utxos = data['unspent_outputs'] || [];
        this.unspents = utxos.map(out => {
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
    let url = this.pushUrl;
    return this.data.post(url, {hex}, {corsProxy: true});
  }

  getUnspents(address) {
    let url = this.unspentsUrlTpl + address;
    return this.data.get(url, {corsProxy: true});
  }

  ngOnInit() {
    this.privkeyUpdate();
    this.store.dispatch({ type: SET_TITLE, payload: 'Send from Privkey' });
  }

}
