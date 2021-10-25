import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Country } from 'src/app/model/countries';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MapHttpService {
    private baseUrl = 'http://localhost:8000/countries';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Country[]> {
    return this.http.get<any>(this.baseUrl);
  }
}