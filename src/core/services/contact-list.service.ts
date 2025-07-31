import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactListService {

  private baseUrl = 'http://localhost:8080/payflow/Contact';
  constructor(private http: HttpClient) { }

  getContacts() {
    return this.http.get(`${this.baseUrl}`);
  }
 
  getContactById(contactId: number){
    return this.http.get(`${this.baseUrl}/${contactId}`);
  }

  postContact(contact: any) {
    return this.http.post(`${this.baseUrl}/create`,contact);
  }

  updateContact(contactId:number,contact: any) {
    return this.http.put(`${this.baseUrl}/update/${contact.contactId}`, contact);
  }

  deleteContact(contactId: number) {
    return this.http.delete(`${this.baseUrl}/delete/${contactId}`);
  }
} 