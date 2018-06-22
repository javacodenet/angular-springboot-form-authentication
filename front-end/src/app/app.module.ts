import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { FormsModule } from '@angular/forms';
import { AuthService } from "./services/auth.service";
import {HttpModule} from "@angular/http";
import {AccountService} from "./services/account.service";
import { ProfileComponent } from './components/profile/profile.component';
import {routing} from "./app.routing";
import {FacebookModule} from "ngx-facebook";
import {UrlPermission} from "./urlPermission/url.permission";
import { AuthInterceptor } from './services/auth.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,


  ],
  imports: [
    BrowserModule,HttpClientModule,FormsModule,routing, FacebookModule.forRoot(),
  ],
  providers: [
    {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true,
    }
    , AuthService
    , AccountService
    , UrlPermission
    ],

  bootstrap: [AppComponent]
})
export class AppModule { }
