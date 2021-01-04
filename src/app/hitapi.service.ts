import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpParams,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HitapiService {

  constructor(
    private http: HttpClient
  ) { }
}
