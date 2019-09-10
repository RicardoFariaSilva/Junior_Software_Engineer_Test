import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Walker } from './walker';
import { Observable } from 'rxjs';

const url = 'https://floating-lowlands-65453.herokuapp.com/api/v1/walkers';
const email = 'online@teste.com';
const token = 'YeuHBHsJyDsGVFoUD9Ep';

@Injectable({
  providedIn: 'root'
})

export class WalkerService {

  constructor(private http: HttpClient) { }

  getWalkers(): Observable<Walker[]> {
    return this.http.get<Walker[]>(url, {headers: {'X-User-Email': email, 'X-User-Token': token}});
  }

  getWalkerById(id: number): Observable<Walker> {
    const newUrl = url + '/'  + id;
    return this.http.get<Walker>(newUrl, {headers: {'X-User-Email': email, 'X-User-Token': token}});
  }
}
