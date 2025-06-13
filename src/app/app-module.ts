import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing-module';
import { RouterModule } from '@angular/router';
import { App } from './app';
import { ContactListComponent} from './contact/contact-list.component/contact-list.component';
import { ContactTypeComponent } from './contact_type/contact-type.component/contact-type.component';
import { UserComponenet } from './user/user.component/user.component';

@NgModule({
  declarations: [
    App,
    ContactListComponent,
    ContactTypeComponent,
    UserComponenet
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [App]
})
export class AppModule { }
