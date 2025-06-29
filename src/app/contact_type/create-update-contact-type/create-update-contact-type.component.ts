import { Component, OnInit } from '@angular/core';
import { ContactTypeService } from '../../../core/services/contact-type.service';

@Component({
  selector: 'app-create-update-contact-type',
  standalone: false,
  templateUrl: './create-update-contact-type.component.html',
  styleUrl: './create-update-contact-type.component.scss'
})
export class CreateUpdateContactTypeComponent implements OnInit {

  contactTypes: any[] = [];

  contactTypeObj: any = {
    "contactTypeId": null,
    "contactTypeName": "",
    "contactTypeCode": "",
    "contactNature": "",
  }

  constructor(private contactType: ContactTypeService) {

  }

  ngOnInit(): void {
    this.loadContactType();
  }

  loadContactType() {
    this.contactType.getContactType().subscribe((result: any) => {
      this.contactTypes = result.data;
    })
  }

  saveContactType() {
    if (this.contactTypeObj.contactTypeId) {
      this.contactType.updateContactType(this.contactTypeObj).subscribe({
        next: (result: any) => {
          alert('Contact Type Updated Successfully');
          this.resetContactType();
          this.loadContactType();
        },
        error: (err) => {
          console.log('Update err:', err);
          alert('Error Updating Contact Type');
        }
      });
    } else {
      this.contactType.postContactType(this.contactTypeObj).subscribe({
        next: (result: any) => {
          alert('Contact Type Created Successfully');
          this.resetContactType();
          this.loadContactType();
        },
        error: (err) => {
          console.log('Create err:', err);
          alert('Error Creating Contact Type');
        }
      });
    }
  }

  resetContactType() {
    this.contactTypeObj = {
      "contactTypeId": null,
      "contactTypeName": "",
      "contactTypeCode": "",
      "contactNature": "",
    }
  }

  onEditContactType(contactType: any) {
    this.contactTypeObj = {
      "contactTypeId": contactType.contactTypeId,
      "contactTypeName": contactType.contactTypeName || "",
      "contactTypeCode": contactType.contactTypeCode || "",
      "contactNature": contactType.contactNature || "",
    };
  }

  onDeleteContactType(contactTypeId: number) {
    if (confirm('Are you want to delete this contact Type?')) {
      this.contactType.deleteContactType(contactTypeId).subscribe({
        next: () => {
          alert('Contact Type deleted successfully');
          this.loadContactType();
          this.resetContactType();
        },
        error: (err: any) => {
          console.log('Delete error:', err);
          alert('Error deleting contact Type');
        }
      });
    }
  }
}
