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

@NgModule({
  declarations: [
    App,
    ContactListComponent,
    ContactTypeComponent,
    UserComponenet,
    ContactViewComponent,
    CreateUpdateContactComponent
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
