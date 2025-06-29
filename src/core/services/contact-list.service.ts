import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactListService {

  private url: string = 'http://localhost:8080/payflow/Contact';
  constructor(private http: HttpClient) { }

  getContacts() {
    return this.http.get(this.url);
  }

  postContact(contact: any) {
    return this.http.post(this.url, contact);
  }

  updateContact(contact: any) {
    return this.http.put(this.url, contact);
  }

  deleteContact(contactId: number) {
    return this.http.delete(`http://localhost:8080/payflow/Contact/contactId/${contactId}`);
  }
} 