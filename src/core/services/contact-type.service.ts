import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactTypeService {

  private baseUrl = 'http://localhost:8080/payflow/ContactType';
  constructor(private http: HttpClient) { }

  getContactType(){
    return this.http.get(`${this.baseUrl}`); 
  }

  getContactTypeById(contactTypeId:number){
     return this.http.get(`${this.baseUrl}/${contactTypeId}`)
  }

  postContactType(contactType:any){
    return this.http.post(`${this.baseUrl}/create`,contactType);
  }

  updateContactType(contactType:any){
    return this.http.put(`${this.baseUrl}/update/${contactType.contactTypeId}`,contactType);
  }

  deleteContactType(contactTypeId:number){
    return this.http.delete(`${this.baseUrl}/id/${contactTypeId}`);
  }
}
 