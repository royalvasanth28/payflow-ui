import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactAddressService {

  private baseUrl = "http://localhost:8080/payflow/contactaddress";

  constructor(private http: HttpClient) { }

  getContactAddres() {
    return this.http.get(`${this.baseUrl}`);
  }

  getContactAddressById(id: number) {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  postContactAddress(contactaddress: any) {
    return this.http.post(`${this.baseUrl}/create`,contactaddress);
  }

  updateContactAddress(id:number,contactaddress:any){
    return this.http.put(`${this.baseUrl}/update/${id}`,contactaddress);
  }

  deleteContactAddress(id:number){
    return this.http.delete(`${this.baseUrl}/delete/${id}`);
  }

}
