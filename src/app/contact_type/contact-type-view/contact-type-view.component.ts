import { Component, OnInit } from '@angular/core';
import { ContactTypeService } from '../../../core/services/contact-type.service';

@Component({
  selector: 'app-contact-type-view',
  standalone: false,
  templateUrl: './contact-type-view.component.html',
  styleUrl: './contact-type-view.component.scss'
})
export class ContactTypeViewComponent implements OnInit {

  contactTypes: any[] = [];
  constructor(private contactTypeView: ContactTypeService) {
  }

  ngOnInit(): void {
    this.showContactType();
  }

  showContactType() {
    this.contactTypeView.getContactType().subscribe((result: any) => {
      this.contactTypes = result.data;
    })
  }

  onDeleteContactType(contactTypeId: number) {
    if (confirm('Are you sure want delete this contact type?')) {
      this.contactTypeView.deleteContactType(contactTypeId).subscribe({
        next: () => {
          alert('Contact Type deleted successfully');
          this.showContactType();
        },
        error: (err: any) => {
          console.error('Delete error:', err);
          alert('Error deleting contact type'); 
        }
      });
    }
  }
}
