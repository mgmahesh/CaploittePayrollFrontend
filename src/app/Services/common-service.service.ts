import { Injectable } from '@angular/core';
import { BackendAPIConnectorService } from './backend-api-connector.service';
import { HttpClient } from '@angular/common/http';
import { finalize } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
 private _backendSeviceConnector: BackendAPIConnectorService;

  constructor(private httpClient : HttpClient) { 
    this._backendSeviceConnector = new BackendAPIConnectorService(httpClient);
  }
 
  fetchData(url: string, withoutBaseUrl: boolean = false): Promise<any> {
    return new Promise((resolve, error) => {
      this._backendSeviceConnector.get(url, withoutBaseUrl)
        .pipe(finalize(() => { }))
        .subscribe((result: any) => {
          console.log(result)
          resolve(result);
        });
    });
  }
  postData(url: string, data: any): Promise<any> {
    return new Promise((resolve, error) => {
      this._backendSeviceConnector.post(url, data)
        .pipe(finalize(() => { }))
        .subscribe((result: any) => {
          resolve(result);
        });
    });
  }

  postFormData(url: string, data: any, showMessage: boolean = false): Promise<any> {
    return new Promise((resolve, error) => {
      this._backendSeviceConnector.postFormData(url, data)
        .pipe(finalize(() => { }))
        .subscribe((result: any) => {
          resolve(result);
        });
    });
  }
}
