import { Component, OnInit } from '@angular/core';
import { ContactTypeService } from '../../../core/services/contact-type.service';
import { ActivatedRoute, Router } from '@angular/router';

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

  pageTitle = "Create New Contact Type";
  buttonLable = "Save Contact Type";
  constructor(private contactTypeService: ContactTypeService, private route:ActivatedRoute, private router:Router) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if(id){
      this.pageTitle = 'Update contact type';
      this.buttonLable = 'Update contact type';
       this.loadContactTypeById(Number(id));
    }
  } 

  loadContactTypeById(id:number) {
    this.contactTypeService.getContactTypeById(id).subscribe({
      next: (res:any) =>{
        this.contactTypeObj = res.data;
      },
      error: (err:any) =>{
        alert('Error loading contact type');
        console.error(err);
      }
    });
  }

  saveContactType() {
    if (this.contactTypeObj.contactTypeId) {
      this.contactTypeService.updateContactType(this.contactTypeObj).subscribe({
        next: (result: any) => {
          alert('Contact Type Updated Successfully');
          this.router.navigate(['/contact-types'])
          this.resetContactType();
        },
        error: (err) => {
          console.log('Update err:', err);
          alert('Error Updating Contact Type');
        }
      });
    } else {
      this.contactTypeService.postContactType(this.contactTypeObj).subscribe({
        next: (result: any) => {
          alert('Contact Type Created Successfully');
          this.router.navigate(['/contact-types'])
          this.resetContactType();
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
}
