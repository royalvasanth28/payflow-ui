import { Component, OnInit } from '@angular/core';
import { ContactListService } from '../../../core/services/contact-list.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create-update-contact',
  standalone: false,
  templateUrl: './create-update-contact.component.html',
  styleUrl: './create-update-contact.component.scss'
})
export class CreateUpdateContactComponent implements OnInit {

  contacts: any[] = [];

  contactObj: any = {
    "contactId": null,
    "name": "",
    "email": "",
    "phone": "",
    "website": "",
    "status": true,
    "facebook": "",
    "notes": "",
    "gst": "",
    "imageId": "",
    "dueListing": true,
    "contactType": {
      "contactTypeId": null
    }
  };

  pageTitle = 'Create New Contact';
  buttonLabel = 'Save Contact';

  constructor(private contactService: ContactListService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) { 
      this.pageTitle = 'Update Contact';
      this.buttonLabel = 'Update Contact';
      this.loadContactById(Number(id));
    }
  }

  loadContactById(id: number) {
    this.contactService.getContactById(id).subscribe({
      next: (res: any) => {
        this.contactObj = res.data;
      },
      error: (err: any) => {
        alert('Error loading contact');
        console.error(err);
      }
    });
  }

  onSaveContact() {
    if (this.contactObj.contactId) {
      this.contactService.updateContact(this.contactObj.contactId, this.contactObj).subscribe({
        next: () => {
          alert('Contact updated successfully');
          this.router.navigate(['/contacts'])
          this.resetContactForm();
        },
        error: (err: any) => {
          alert('Error updating contact');
          console.error(err);
        }
      });
    } else {
      this.contactService.postContact(this.contactObj).subscribe({
        next: () => {
          alert('Contact created successfully');
          this.router.navigate(['/contacts'])
          this.resetContactForm();
        },
        error: (err: any) => {
          alert('Error creating contact');
          console.error(err);
        }
      });
    }
  }


  resetContactForm() {
    this.contactObj = {
      "contactId": null,
      "name": "",
      "email": "",
      "phone": "",
      "website": "",
      "status": true,
      "facebook": "",
      "notes": "",
      "gst": "",
      "imageId": "",
      "dueListing": true,
      "contactType": {
        "contactTypeId": null
      }
    };
  }

}


