import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactListService {

  private url='http://localhost:8080/payflow/Contact';
  constructor(private http:HttpClient) { }

  getContacts(): Observable<{ status: boolean; message: string; data: any[] }> {
  return this.http.get<{ status: boolean; message: string; data: any[] }>('http://localhost:8080/payflow/Contact');
}
}