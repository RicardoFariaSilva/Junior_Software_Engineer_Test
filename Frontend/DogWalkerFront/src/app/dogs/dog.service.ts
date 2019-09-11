import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Dog } from './dog';
import { Observable } from 'rxjs';

const url = 'https://floating-lowlands-65453.herokuapp.com/api/v1/dogs';
const email = 'online@teste.com';
const token = 'YeuHBHsJyDsGVFoUD9Ep';

@Injectable({
  providedIn: 'root'
})

export class DogService {

  constructor(private http: HttpClient) { }

  getDogs(): Observable<Dog[]> {
    return this.http.get<Dog[]>(url, {headers: {'X-User-Email': email, 'X-User-Token': token}});
  }

  getDogById(id: number): Observable<Dog> {
    const newUrl = url + '/'  + id;
    return this.http.get<Dog>(newUrl, {headers: {'X-User-Email': email, 'X-User-Token': token}});
  }

  postNewDog(dog: FormData): Observable<any> {
    return this.http.post(url, dog, {headers: {'X-User-Email': email, 'X-User-Token': token}});
  }
}
