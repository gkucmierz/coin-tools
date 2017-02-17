import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {
  private corsProxyEndpoint = 'https://free-cors-proxy.herokuapp.com/';

  constructor(private http: Http) { }

  get(url, opts:any = {}) {
    if (opts.corsProxy) url = this.proxyUrl(url);

    return this.http.get(url)
      .map(this.extractData)
      .catch(this.handleError);
  }

  post(url, data:any = {}, opts:any = {}) {
    if (opts.corsProxy) url = this.proxyUrl(url);

    return this.http.post(url, data, null)
      .map(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    try {
      return res.json();
    } catch(e) {
      return {};
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

  private proxyUrl(url) {
    return `${this.corsProxyEndpoint}${encodeURIComponent(url)}`;
  }

}
