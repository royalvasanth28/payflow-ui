import { Component, OnInit } from '@angular/core';
import { AddressService } from '../../../core/services/address.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create-update-address',
  standalone: false,
  templateUrl: './create-update-address.component.html',
  styleUrls: ['./create-update-address.component.scss']
})
export class CreateUpdateAddressComponent implements OnInit {

  addressObj: any = {
    addressId: null,
    addressStreet: '',
    addressStreet_2: '',
    addressCity: '',
    addressDist: '',
    addressState: '',
    addressPinCode: '',
    addressType: null
  };

  pageTitle = 'Create New Address';
  buttonLabel = 'Save Address';

  constructor(
    private addressService: AddressService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.pageTitle = 'Update Address';
      this.buttonLabel = 'Update Address';
      this.loadAddressById(Number(id));
    }
  }

  loadAddressById(id: number) {
    this.addressService.getAddressById(id).subscribe({
      next: (res: any) => {
        this.addressObj = res.data;
      },
      error: (err) => {
        alert('Error loading address');
        console.error(err);
        this.router.navigate(['/addresses']);
      }
    });
  }

  onSaveAddress() {
    if (this.addressObj.addressId) {
      this.addressService.updateAddress(this.addressObj.addressId, this.addressObj).subscribe({
        next: () => {
          alert("Address updated successfully");
          this.router.navigate(['/addresses']);
          this.resetAddressForm();
        },
        error: (err: any) => {
          alert("Error updating address");
          console.error(err);
        }
      });
    } else {
      this.addressService.createAddress(this.addressObj).subscribe({
        next: () => {
          alert("Address Created Successfully");
          this.router.navigate(['/addresses']);
          this.resetAddressForm();
        },
        error: (err: any) => {
          alert("Error creating address");
          console.error(err);
        }
      });
    }
  }

  resetAddressForm() {
    this.addressObj = {
      addressId: null,
      addressStreet: '',
      addressStreet_2: '',
      addressCity: '',
      addressDist: '',
      addressState: '',
      addressPinCode: '',
      addressType: null
    };
  }
}
