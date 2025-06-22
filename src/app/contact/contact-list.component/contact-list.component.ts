import { Component, OnInit } from '@angular/core';
import { ContactListService } from '../../../core/services/contact-list.service';

@Component({
  selector: 'app-contact-list',
  standalone: false,
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {

  contacts: any[] = [];
  constructor(private contactService: ContactListService) { }
 
  ngOnInit(): void {
    this.contactService.getContacts().subscribe((result:any) => {
      this.contacts = result.data;
    });
  }

}
