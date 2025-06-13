import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactListComponent } from './contact/contact-list.component/contact-list';
import { ContactTypeComponent } from './contact_type/contact-type.component/contact-type.component';
import { UserComponenet } from './user/user.component/user.component';


const routes: Routes = [
  { path: 'contact-list', component: ContactListComponent },
  { path: 'contact-type', component: ContactTypeComponent },
  { path: 'user', component: UserComponenet }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
