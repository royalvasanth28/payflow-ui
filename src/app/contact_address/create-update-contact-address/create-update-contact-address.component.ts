import { Component, OnInit } from '@angular/core';
import { ContactAddressService } from '../../../core/services/contact-address.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create-update-contact-address',
  standalone: false,
  templateUrl: './create-update-contact-address.component.html',
  styleUrl: './create-update-contact-address.component.scss'
})
export class CreateUpdateContactAddressComponent implements OnInit {

  contactAddressObj: any = {
    "id": null,
    "contact": {
      "contactId": null
    },
    "address": {
      "addressId": null
    }
  }

  pageTitle = "Create New Contact Address";
  buttonLabel = "Save Contact Address";

  constructor(private contactAddressSerice: ContactAddressService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.pageTitle = "Update Contact Address";
      this.buttonLabel = "Update Contact Address";
      this.loadContactAddressById(Number(id));
    }
  }

  loadContactAddressById(id: number) {
    this.contactAddressSerice.getContactAddressById(id).subscribe({
      next: (res: any) => {
        this.contactAddressObj = res.data;
      },
      error: (err: any) => {
        alert("Error loading Contact Address");
        console.error(err);
      }
    });
  }

  onSaveContactAddress() {
    if (this.contactAddressObj.id) {
      this.contactAddressSerice.updateContactAddress(this.contactAddressObj.id, this.contactAddressObj).subscribe({
        next: () => {
          alert("Contact Address Updated Successfully");
          this.router.navigate(['/contact-addresses']);
          this.resetContactAddressForm();
        },
        error: (err: any) => {
          alert("Error Updating Contact Address");
          console.error(err);
        }
      });
    } else {
      this.contactAddressSerice.postContactAddress(this.contactAddressObj).subscribe({
        next: () => {
          alert("Contact Address Created Successfully");
          this.router.navigate(['/contact-addresses']);
          this.resetContactAddressForm();
        },
        error: (err: any) => {
          alert("Error Creating Contact Address");
          console.error(err);
        }
      });
    }
  }

  resetContactAddressForm() {
    this.contactAddressObj = {
      "id": null,
      "contact": {
        "contactId": null
      },
      "address": {
        "addressId": null
      }
    }
  }
}
