import { Component, OnInit } from '@angular/core';
import { ContactTypeService } from '../../../core/services/contact-type.service';

@Component({
  selector: 'app-contact-type-view',
  standalone: false,
  templateUrl: './contact-type-view.component.html',
  styleUrl: './contact-type-view.component.scss'
})
export class ContactTypeViewComponent implements OnInit{

  contactTypes: any [] = [];
   constructor(private contactTypeView:ContactTypeService){
   }

  ngOnInit(): void {
    this.showContactType();
  }

  showContactType(){
    this.contactTypeView.getContactType().subscribe((result:any)=>{
      this.contactTypes = result.data;
    })
  }

}
