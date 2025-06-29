import { Component, OnInit } from '@angular/core';
import { ContactTypeService } from '../../../core/services/contact-type.service';

@Component({
  selector: 'app-contact-type',
  standalone: false,
  templateUrl: './contact-type.component.html',
  styleUrls: ['./contact-type.component.scss']
})
export class ContactTypeComponent implements OnInit {

  contactTypes: any[] = [];

  constructor(private contactTypeService: ContactTypeService) { }

  ngOnInit(): void {
    this.contactTypeService.getContactType().subscribe((result :any) =>{
      this.contactTypes = result.data;
    })
  }
}
