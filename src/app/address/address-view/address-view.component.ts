import { Component, OnInit } from '@angular/core';
import { AddressService } from '../../../core/services/address.service';

@Component({
  selector: 'app-address-view',
  standalone: false,
  templateUrl: './address-view.component.html',
  styleUrl: './address-view.component.scss'
})
export class AddressViewComponent implements OnInit {

  addresses: any[] = [];
  selectedAddress: any = null;

  constructor(private addressview: AddressService) { }

  ngOnInit(): void {
    this.showAddress();
  }

  showAddress() {
    this.addressview.getAddresses().subscribe((result: any) => {
      this.addresses = result.data;
    });
  }

  onDeleteAddress(addressId: number) {
    if (confirm("Are you sure, you want to delete this address?")) {
      this.addressview.deleteAddress(addressId).subscribe({
        next: () => {
          alert("Address deleted Sucessfully");
          this.showAddress();
        },
        error: (err: any) => {
          console.error("Delete err:", err);
          alert("Error deleting address");
        }
      });
    }
  }

  onShowAddress(address: any) {
    if (this.selectedAddress?.addressId === address.addressId) {
      this.selectedAddress = null;
    } else {
      this.selectedAddress = address;
    }
  }
}