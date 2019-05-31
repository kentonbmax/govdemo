import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCardModule, MatSidenavModule, MatInputModule, MatSnackBarModule, MatDialogModule, MatSlideToggleModule } from '@angular/material';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ManageContactsComponent } from './components/manage-contacts/manage-contacts.component';
import { AuthorizationService } from './services/authorization.service';
import { ContactsService } from './services/contacts.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ManageContactsDialogComponent } from './components/manage-contacts/manage-contacts-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    ManageContactsDialogComponent,
    ManageContactsComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatSidenavModule,
    MatInputModule,
    MatSnackBarModule,
    MatDialogModule,
    MatSlideToggleModule
  ],
  providers: [
    AuthorizationService,
    ContactsService
  ],
  bootstrap: [AppComponent],
  entryComponents: [ManageContactsDialogComponent],
})
export class AppModule { }
