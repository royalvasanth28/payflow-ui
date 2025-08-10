import { Component, OnInit } from '@angular/core';
import { ContactAddressService } from '../../../core/services/contact-address.service';

@Component({
  selector: 'app-contact-address-view',
  standalone: false,
  templateUrl: './contact-address-view.component.html',
  styleUrl: './contact-address-view.component.scss'
})
export class ContactAddressViewComponent implements OnInit {

  contactAddresses: any[] = [];

  constructor(private viewContactAddress: ContactAddressService) { }

  ngOnInit(): void {
    this.loadContactAddress();
  }

  loadContactAddress() {
    this.viewContactAddress.getContactAddres().subscribe((res: any) => {
      this.contactAddresses = res.data;
    });
  }

  deleteContactAddress(id: number) {
    if (confirm("Are you sure, you want to delete this contact address?")) {
      this.viewContactAddress.deleteContactAddress(id).subscribe({
        next: () => {
          alert("Contact Address Deleted Successfully");
          this.loadContactAddress();
        },
        error: (err: any) => {
          alert("Errro deleting contact address");
          console.error(err);
        }
      });
    }
  }
}
