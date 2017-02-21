// https://github.com/bitpay/bitcore/issues/1168#issuecomment-88250942
// define few tings for bitcore-lib
const window = {};
window.Object = Object;
window.String = String;
window.RegExp = RegExp;
window.Math = Math;
window.Function = Function;
window.Array = Array;
window.Date = Date;
window.parseInt = parseInt;
window.parseFloat = parseFloat;
window.crypto = crypto;

try {
  importScripts('/assets/bitcore-lib.min.js');
} catch(e) {
  importScripts('/coin-tools/assets/bitcore-lib.min.js');
}


const {PrivateKey} = require('bitcore-lib');

onmessage = msg => {
  let json = JSON.parse(msg.data);
  let regExp = createRegExp(json.startsWith, json.ignoreCase);
  infiniteLoop(regExp);
};

function infiniteLoop(regExp) {
  let t = +new Date();
  let cnt = 0;
  while (1) {
    let privkey = new PrivateKey();
    let address = privkey.toAddress().toString();
    ++cnt;
    if (regExp.test(address)) {
      postMessage(JSON.stringify({
        found: true, cnt, privkey: privkey.toString(), address
      }));
      cnt = 0;
    } else {
      let now = +new Date();
      if (now > t + 100 | cnt >= Number.MAX_SAFE_INTEGER) {
        postMessage(JSON.stringify({
          found: false, cnt
        }));
        cnt = 0;
        t = now;
      }
    }
  }
}

function createRegExp(startsWith, ignoreCase) {
  let body = `^${escapeRegExp(startsWith)}`;
  return ignoreCase ? new RegExp(body, 'i') : new RegExp(body);
}

function escapeRegExp(str) {
  return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
}
