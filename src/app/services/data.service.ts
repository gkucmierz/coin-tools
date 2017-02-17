import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { SlimLoadingBarService } from 'ng2-slim-loading-bar';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw'

@Injectable()
export class DataService {
  private corsProxyEndpoint = 'https://free-cors-proxy.herokuapp.com/';

  constructor(private http: Http,
              private slimLoadingBarService: SlimLoadingBarService) {
  }

  get(url, opts:any = {}) {
    if (opts.corsProxy) url = this.proxyUrl(url);

    this.slimLoadingBarService.start();

    return this.http.get(url)
      .map(this.extractData.bind(this))
      .catch(this.handleError);
  }

  post(url, data:any = {}, opts:any = {}) {
    if (opts.corsProxy) url = this.proxyUrl(url);

    return this.http.post(url, data, null)
      .map(this.extractData.bind(this))
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    this.slimLoadingBarService.complete();
    try {
      return res.json();
    } catch(e) {
      return {};
    }
  }

  private handleError (error: Response | any) {
    console.log(this.slimLoadingBarService);
    this.slimLoadingBarService.complete();
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
