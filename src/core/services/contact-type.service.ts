import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactTypeService {

  private url: string = 'http://localhost:8080/payflow/ContactType';
  constructor(private http: HttpClient) { }

  getContactType(){
    return this.http.get(this.url); 
  }

  postContactType(contactType:any){
    return this.http.post(this.url,contactType);
  }

  updateContactType(contactType:any){
    return this.http.put(this.url,contactType);
  }

  deleteContactType(contactTypeid:number){
    return this.http.delete(`${this.url}/id/${contactTypeid}`);
  }
}
 