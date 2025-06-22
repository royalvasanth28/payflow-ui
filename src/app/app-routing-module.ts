import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactListComponent } from './contact/contact-list.component/contact-list.component';
import { ContactTypeComponent } from './contact_type/contact-type.component/contact-type.component';
import { UserComponenet } from './user/user.component/user.component';
import { ContactViewComponent } from './contact/contact-view/contact-view.component';
import { CreateUpdateContactComponent } from './contact/create-update-contact/create-update-contact.component';


const routes: Routes = [
  { path: 'contact-list', component: ContactListComponent },
  { path: 'contact-type', component: ContactTypeComponent },
  { path: 'user', component: UserComponenet },
  {path:'contact-view', component:ContactViewComponent},
  {path:'Create-update', component:CreateUpdateContactComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
