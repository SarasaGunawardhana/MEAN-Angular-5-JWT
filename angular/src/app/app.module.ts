import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { AppRoutingModule } from './/app-routing.module';
import { MainDeskComponent } from './main-desk/main-desk.component';

import {MatInputModule} from '@angular/material/input';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material';

import { FormsModule,  ReactiveFormsModule } from '@angular/forms';
import { MyserviceService } from './myservice.service';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth/auth.guard';
import { JwtHelperService } from '@auth0/angular-jwt';
import { JwtModule } from '@auth0/angular-jwt';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    UserDashboardComponent,
    MainDeskComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatInputModule,
    MatSnackBarModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    JwtModule
  ],
  providers: [ MyserviceService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
