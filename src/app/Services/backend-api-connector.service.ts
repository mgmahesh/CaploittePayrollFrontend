import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackendAPIConnectorService {

  constructor(private _httpClient: HttpClient) { }

  private readonly _baseURL = "https://localhost:44304/";
  public get(url: string, withoutBaseUrl = false): Observable<Object> {
    const httpHeaders = new HttpHeaders()
      .set('content-type', 'application/json')

    if (withoutBaseUrl) {
      return this._httpClient
        .get(url)
        .pipe(
          map((response: any) => {
            return response;
          }),
          catchError((err) => {
            console.log(err);
            return of();
          })
        );
    } else {
      return this._httpClient
        .get(this._baseURL + url, { 'headers': httpHeaders })
        // .pipe(
        //   map((response: any) => {
        //     return response.result;
        //   }),
        //   catchError((err) => {
        //     console.log(err);
        //     return of();
        //   })
        // );
    }

  }

  public post(url: string, data: any): Observable<Object> {
    const httpHeaders = new HttpHeaders()
      .set('content-type', 'application/json')
    return this._httpClient
      .post(this._baseURL + url, data, { 'headers': httpHeaders })
      // .pipe(
      //   map((response: any) => {
      //     return response.result;
      //   }),
      //   catchError((err) => {
      //     return of();
      //   })
      // );
  }

  public postFormData(url: string, data: any): Observable<Object> {
    const httpHeaders = new HttpHeaders()
      .set('content-type', 'application/json')
    return this._httpClient
      .post(this._baseURL + url, data, { headers: httpHeaders })
      .pipe(
        map((response: any) => {
          return response.result;
        }),
        catchError((err) => {
          return of();
        })
      );
  }
}
