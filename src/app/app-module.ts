import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing-module';
import { RouterModule } from '@angular/router';
import { App } from './app';
import { ContactListComponent} from './contact/contact-list.component/contact-list.component';
import { ContactTypeComponent } from './contact_type/contact-type.component/contact-type.component';
import { UserComponenet } from './user/user.component/user.component';
import { ContactViewComponent } from './contact/contact-view/contact-view.component';
import { CreateUpdateContactComponent } from './contact/create-update-contact/create-update-contact.component';
import { FormsModule } from '@angular/forms';
import { ContactTypeViewComponent } from './contact_type/contact-type-view/contact-type-view.component';
import { CreateUpdateContactTypeComponent } from './contact_type/create-update-contact-type/create-update-contact-type.component';
import { ViewProfile } from './temp/view-profile/view-profile';
import { PersonalDetails } from './temp/personal-details/personal-details';
import { EmergencyContacts } from './temp/emergency-contacts/emergency-contacts';
import { WorkDetails } from './temp/work-details/work-details';
import { AddressViewComponent } from './address/address-view/address-view.component';
import { CreateUpdateAddressComponent } from './address/create-update-address/create-update-address.component';
import { ContactAddressViewComponent } from './contact_address/contact-address-view/contact-address-view.component';
import { CreateUpdateContactAddressComponent } from './contact_address/create-update-contact-address/create-update-contact-address.component';



@NgModule({
  declarations: [
    App,
    ContactListComponent,
    ContactTypeComponent,
    UserComponenet,
    ContactViewComponent,
    CreateUpdateContactComponent,
    ContactTypeViewComponent,
    CreateUpdateContactTypeComponent,
    ViewProfile,
    PersonalDetails,
    EmergencyContacts,
    WorkDetails,
    AddressViewComponent,
    CreateUpdateAddressComponent,
    ContactAddressViewComponent,
    CreateUpdateContactAddressComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [App]
})
export class AppModule { }
