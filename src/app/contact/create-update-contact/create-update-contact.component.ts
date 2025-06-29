import { Component, OnInit } from '@angular/core';
import { ContactListService } from '../../../core/services/contact-list.service';

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
  }
  contactService: any;

  constructor(private contact: ContactListService) {
    this.loadContact();
  }
  ngOnInit(): void {
    this.loadContact();
  }

  loadContact() {
    this.contact.getContacts().subscribe((res: any) => {
      this.contacts = res.data;
    });
  }

  onSaveContact() {
    if (this.contactObj.contactId) {
      this.contact.updateContact(this.contactObj).subscribe({
        next: (result: any) => {
          alert('Contact updated successfully');
          this.resetContactForm();
          this.loadContact();
        },
        error: (err) => {
          console.error('Update error:', err);
          alert('Error updating contact');
        }
      });
    } else {
      this.contact.postContact(this.contactObj).subscribe({
        next: (result: any) => {
          alert('Contact created successfully');
          this.resetContactForm();
          this.loadContact();
        },
        error: (err) => {
          console.error('Create error:', err);
          alert('Error creating contact');
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
  onEditContact(contact: any) {
    this.contactObj = {
      "contactId": contact.contactId,
      "name": contact.name || "",
      "email": contact.email || "",
      "phone": contact.phone || "",
      "website":contact.website || "",
      "status": contact.status ?? true,
      "facebook": contact.facebook || "",
      "notes": contact.notes || "",
      "gst": contact.gst || "",
      "imageId": contact.imageId || "",
      "dueListing": contact.dueListing ?? true, 
      "contactType": contact.contactType
        ? { contactTypeId: contact.contactType.contactTypeId }
        : { contactTypeId: null }
    };
  }

  onDeleteContact(contactId: number) {
  if (confirm('Are you sure you want to delete this contact?')) {
    this.contact.deleteContact(contactId).subscribe({
      next: () => {
        alert('Contact deleted successfully');
        this.loadContact();
        this.resetContactForm();
      },
      error: (err :any) => {
        console.error('Delete error:', err);
        alert('Error deleting contact');
      }
    });
  }
}

}







