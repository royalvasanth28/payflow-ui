import { Component, OnInit } from '@angular/core';
import { ContactListService } from '../../../core/services/contact-list.service';

@Component({
  selector: 'app-contact-view',
  standalone: false,
  templateUrl: './contact-view.component.html',
  styleUrl: './contact-view.component.scss'
})
export class ContactViewComponent implements OnInit{

  contacts : any [] = [];
  constructor(private contactView:ContactListService){

  }
  ngOnInit(): void {
    this.showcontact();
  }

  showcontact(){
    this.contactView.getContacts().subscribe((res:any) =>{
      this.contacts = res.data;
    })
  }
}
