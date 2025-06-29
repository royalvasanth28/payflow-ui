import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactListComponent } from './contact/contact-list.component/contact-list.component';
import { ContactTypeComponent } from './contact_type/contact-type.component/contact-type.component';
import { UserComponenet } from './user/user.component/user.component';
import { ContactViewComponent } from './contact/contact-view/contact-view.component';
import { CreateUpdateContactComponent } from './contact/create-update-contact/create-update-contact.component';
import { CreateUpdateContactTypeComponent } from './contact_type/create-update-contact-type/create-update-contact-type.component';
import { ContactTypeViewComponent } from './contact_type/contact-type-view/contact-type-view.component';


const routes: Routes = [
  { path: 'contact-list', component: ContactListComponent },
  { path: 'contact-type', component: ContactTypeComponent },
  { path: 'user', component: UserComponenet },
  {path:'contact-view', component:ContactViewComponent},
  {path:'create-update', component:CreateUpdateContactComponent},
  {path:'contact-type-view', component:ContactTypeViewComponent},
  {path:'create-Update-contact-type',component:CreateUpdateContactTypeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
