import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactTypeService {

  private url = 'http://localhost:8080/payflow/ContactType';
  constructor(private http: HttpClient) { }

  getContactType(): Observable<{ status: boolean; message: String; data: any[] }> {
    return this.http.get<{ status: boolean; message: String; data: any[] }>('http://localhost:8080/payflow/ContactType');
  }
}
