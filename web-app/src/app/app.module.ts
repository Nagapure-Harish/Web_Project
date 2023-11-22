import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from "@angular/material/button";
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component'
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { HttpClientModule } from '@angular/common/http'
import { MatMenuModule } from '@angular/material/menu'
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { FormsModule } from '@angular/forms';
import { MatListModule } from '@angular/material/list';
import { AboutusComponentComponent } from './components/aboutus-component/aboutus-component.component';
import { ContactComponent } from './components/contact/contact.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FolderCardsComponent } from './components/folder-cards/folder-cards.component';
import { LoginForm2Component } from './components/login-form2/login-form2.component';
import { SlideBarComponent } from './components/slide-bar/slide-bar.component';
import { WelcomeHomeComponent } from './components/welcome-home/welcome-home.component';
import { LoginServiceService } from './services/login-service.service';

import { BusinessPlaceComponent } from './components/business-place/business-place.component';
import { OrganizationComponent } from './components/organization/organization.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ToastrModule } from 'ngx-toastr';
import { LayoutComponent } from './layout/layout/layout.component';
//import {FormControl} from '@angular/forms'






@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    LoginComponent,
    DashboardComponent,
    AboutusComponentComponent,
    ContactComponent,
    ForgotPasswordComponent,
    FolderCardsComponent,
    LoginForm2Component,
    SlideBarComponent,
    WelcomeHomeComponent,

    BusinessPlaceComponent,
    OrganizationComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    MatMenuModule,
    MatDividerModule,
    MatIconModule,
    MatSidenavModule,
    FormsModule,
    MatListModule,
    ReactiveFormsModule,
    MatDialogModule,
    ToastrModule.forRoot()
  
    // FormControl

  ],
  providers: [LoginServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
