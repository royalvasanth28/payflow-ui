import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactListComponent } from './contact/contact-list.component/contact-list.component';
import { ContactTypeComponent } from './contact_type/contact-type.component/contact-type.component';
import { UserComponenet } from './user/user.component/user.component';
import { ContactViewComponent } from './contact/contact-view/contact-view.component';
import { CreateUpdateContactComponent } from './contact/create-update-contact/create-update-contact.component';
import { CreateUpdateContactTypeComponent } from './contact_type/create-update-contact-type/create-update-contact-type.component';
import { ContactTypeViewComponent } from './contact_type/contact-type-view/contact-type-view.component';
import { ViewProfile } from './temp/view-profile/view-profile';

const routes: Routes = [
  { path: 'contact-list', component: ContactListComponent },
  { path: 'contact-type', component: ContactTypeComponent },
  { path: 'user', component: UserComponenet },
  {path:'view-profile',component: ViewProfile},
  {path:'contacts',component:ContactViewComponent},
  {path:'contacts/create',component:CreateUpdateContactComponent},
  {path:'contacts/edit/:id',component:CreateUpdateContactComponent},
  {path:'contact-types',component:ContactTypeViewComponent},
  {path:'contact-type/create',component:CreateUpdateContactTypeComponent},
  {path:'contact-type/edit/:id',component:CreateUpdateContactTypeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
