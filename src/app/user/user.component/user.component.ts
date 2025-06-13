import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../core/services/user.service';

@Component({
  selector: 'app-user',
  standalone: false,
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponenet implements OnInit {

  users : any [] = [];

  constructor(private user:UserService){}

  ngOnInit(): void {
    this.user.getUser().subscribe(result=>{
      this.users=result.data;
    })
  }

}
