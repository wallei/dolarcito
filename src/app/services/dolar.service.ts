import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DolarService {

  

  constructor(public httpClient : HttpClient) { }
  llamarApiDolar(): Observable<any> {
    return this.httpClient.get('https://dolarapi.com/v1/dolares ');// modificar con la uri de dolarApi
}
}
