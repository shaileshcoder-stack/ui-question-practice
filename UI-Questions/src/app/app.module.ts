import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoaderComponent } from './components/loader/loader.component';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { UserPageComponent } from './pages/user-page/user-page.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { TokenInterceptor } from './auth/token.interceptor';
import { ErrorInterceptor } from './core/interceptors/error.interceptor';

@NgModule({
  declarations: [
    AppComponent,
   
    LoginComponent,
        SignupComponent,
        LoaderComponent,
        AdminPageComponent,
        UserPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [ {provide:HTTP_INTERCEPTORS,useClass:TokenInterceptor,multi:true},
              {provide:HTTP_INTERCEPTORS,useClass:ErrorInterceptor,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
