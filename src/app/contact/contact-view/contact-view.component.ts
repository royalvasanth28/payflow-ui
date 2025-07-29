import { Component, OnInit } from '@angular/core';
import { ContactListService } from '../../../core/services/contact-list.service';

@Component({
  selector: 'app-contact-view',
  standalone: false,
  templateUrl: './contact-view.component.html',
  styleUrl: './contact-view.component.scss'
})
export class ContactViewComponent implements OnInit {

  contacts: any[] = [];
  selectedContact: any = null;
 
  constructor(private contactView: ContactListService) { }

  ngOnInit(): void {
    this.showcontact();
  } 

  showcontact() {
    this.contactView.getContacts().subscribe((result: any) => {
      this.contacts = result.data;
    })
  }

  onDeleteContact(contactId: number) {
    if (confirm('Are you sure you want to delete this contact?')) {
      this.contactView.deleteContact(contactId).subscribe({
        next: () => {
          alert('Contact deleted successfully');
          this.showcontact();
        },
        error: (err: any) => {
          console.error('Delete error:', err);
          alert('Error deleting contact');
        }
      });
    }
  }

  onViewContact(contact: any): void {
    if (this.selectedContact?.contactId === contact.contactId) {
      this.selectedContact = null;
    } else {
      this.selectedContact = contact;
    }
  }

}

