import { Component, OnInit } from '@angular/core';
import { ContactListService } from '../../../core/services/contact-list.service';

@Component({
  selector: 'app-contact-list',
  standalone: false,
  templateUrl: './contact-list.html',
  styleUrls: ['./contact-list.scss']
})
export class ContactListComponent implements OnInit {

  contacts: any[] = [];

  constructor(private contactService: ContactListService) { }

  ngOnInit(): void {
    this.contactService.getContacts().subscribe(result => {
      this.contacts = result.data;
    });
  }

}
