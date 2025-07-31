import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  constructor(private http: HttpClient) { }
  private baseUrl = 'http://localhost:8080/payflow/address';

  getAddresses() {
    return this.http.get(`${this.baseUrl}`);
  }

  getAddressById(addressId: number) {
    return this.http.get(`${this.baseUrl}/${addressId}`);
  }

  createAddress(address:any) {
    return this.http.post(`${this.baseUrl}/create`,address);
  }

  updateAddress(addressId:number,address:any) {
    return this.http.put(`${this.baseUrl}/update/${addressId}`,address);
  }

  deleteAddress(addressId:number) {
    return this.http.delete(`${this.baseUrl}/delete/${addressId}`);
  }
} 
