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
import { AddressViewComponent } from './address/address-view/address-view.component';
import { CreateUpdateAddressComponent } from './address/create-update-address/create-update-address.component';
import { ContactAddressViewComponent } from './contact_address/contact-address-view/contact-address-view.component';
import { CreateUpdateContactAddressComponent } from './contact_address/create-update-contact-address/create-update-contact-address.component';

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
  {path:'contact-type/edit/:id',component:CreateUpdateContactTypeComponent},
  {path:'addresses',component:AddressViewComponent},
  {path:'address/create',component:CreateUpdateAddressComponent},
  {path:'address/edit/:id',component:CreateUpdateAddressComponent},
  {path:'contact-addresses',component:ContactAddressViewComponent},
  {path:'contact-address/create',component:CreateUpdateContactAddressComponent},
  {path:'contact-address/edit/:id',component:CreateUpdateContactAddressComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
