import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LibModule } from './lib';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TabsModule, ModalModule, BsDropdownModule, AlertModule, BsDatepickerModule } from 'ngx-bootstrap'
import { AppComponent } from './app.component';
import { SigninPageComponent } from './pages/signin-page/signin-page.component';
import { AdminSigninPageComponent } from './pages/admin/admin-signin-page/admin-signin-page.component';
import { AdminPageComponent } from './pages/admin/admin-page/admin-page.component';
import { AdminHomePageComponent } from './pages/admin/admin-home-page/admin-home-page.component';
import { AppGroupComponent } from './pages/admin/admin-home-page/app-group/app-group.component';
import { FruitOrderSystemPageComponent } from './pages/admin/fruit-order-system-page/fruit-order-system-page.component';
import { NavComponent } from './com/nav/nav.component';
import { FruitUserManageComponent } from './pages/admin/fruit-order-system-page/fruit-user-manage/fruit-user-manage.component';
import { TextComponent } from './com/fields/text/text.component';
import { FieldComponent } from './com/fields/field/field.component';
import { FormComponent } from './com/fields/form/form.component';
import { FruitProductManageComponent } from './pages/admin/fruit-order-system-page/fruit-product-manage/fruit-product-manage.component';
import { FruitAnalysisComponent } from './pages/admin/fruit-order-system-page/fruit-analysis/fruit-analysis.component';
import { listLocales, defineLocale } from 'ngx-bootstrap/bs-moment';
import { zhCn } from 'ngx-bootstrap/locale';
defineLocale('zh-cn', zhCn);

// import { FruitUserManageComponent } from './admin/fruit-order-system-page/fruit-user-manage/fruit-user-manage.component';


@NgModule({
  declarations: [
    AppComponent,
    SigninPageComponent,
    AdminSigninPageComponent,
    AdminPageComponent,
    AdminHomePageComponent,
    AppGroupComponent,
    FruitOrderSystemPageComponent,
    NavComponent,
    FruitUserManageComponent,
    TextComponent,
    FieldComponent,
    FormComponent,
    FruitProductManageComponent,
    FruitAnalysisComponent,

    // FruitUserManageComponent
  ],
  imports: [
    AlertModule.forRoot(),
    TabsModule.forRoot(),
    ModalModule.forRoot(),
    BsDropdownModule.forRoot(),
    ReactiveFormsModule,
    BsDatepickerModule.forRoot(),
    // FormsModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/admin/signin', pathMatch: 'full', data: {} },
      { path: 'admin/signin', component: AdminSigninPageComponent, data: { label: '登录' } },
      {
        path: 'admin', component: AdminPageComponent, data: { label: '首页' },
        children: [
          { path: '', component: AdminHomePageComponent, data: { label: '首页' } },

          { path: 'fruitOrderSystem', component: FruitOrderSystemPageComponent, data: { label: '水果订购系统' } },
        ]
      }]),
    BrowserModule,
    LibModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
