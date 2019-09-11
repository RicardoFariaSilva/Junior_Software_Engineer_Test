import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Client } from './client';

const url = 'https://floating-lowlands-65453.herokuapp.com/api/v1/clients';
const email = 'online@teste.com';
const token = 'YeuHBHsJyDsGVFoUD9Ep';

@Injectable({
  providedIn: 'root'
})

export class ClientService {

  constructor(private http: HttpClient) { }

  getClients(): Observable<Client[]> {
    return this.http.get<Client[]>(url, {headers: {'X-User-Email': email, 'X-User-Token': token}});
  }

  getClientById(id: number): Observable<Client> {
    const newUrl = url + '/'  + id;
    return this.http.get<Client>(newUrl, {headers: {'X-User-Email': email, 'X-User-Token': token}});
  }

  postNewClient(client: FormData): Observable<any> {
    return this.http.post(url, client, {headers: {'X-User-Email': email, 'X-User-Token': token}});
  }

}
