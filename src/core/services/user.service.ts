import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = 'http://localhost:8080/payflow/User';
  constructor(private http: HttpClient) { }

  getUser(): Observable<{ source: boolean; message: String; data: any[] }> {
    return this.http.get<{ source: boolean; message: String; data: any[] }>('http://localhost:8080/payflow/User');
  }
}
