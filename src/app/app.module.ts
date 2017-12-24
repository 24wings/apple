import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {LibModule} from './lib';
import {RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { SigninPageComponent } from './pages/signin-page/signin-page.component';
import { AdminSigninPageComponent } from './pages/admin/admin-signin-page/admin-signin-page.component';
import { AdminPageComponent } from './pages/admin/admin-page/admin-page.component';


@NgModule({
  declarations: [
    AppComponent,
    SigninPageComponent,
    AdminSigninPageComponent,
    AdminPageComponent
  ],
  imports: [
    RouterModule.forRoot([
      {path:'',redirectTo:'/admin/signin',pathMatch:'full'},
      {
      path:'admin',component:AdminPageComponent,
       children:[
         {path:'signin',component:AdminSigninPageComponent}
       ]
    }]),
    BrowserModule,
    LibModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
