import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app.routing';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AppComponent} from './app.component';
// BOOTSTRAP COMPONENTS
import {PerfectScrollbarModule} from 'ngx-perfect-scrollbar';
import {PERFECT_SCROLLBAR_CONFIG} from 'ngx-perfect-scrollbar';
import {PerfectScrollbarConfigInterface} from 'ngx-perfect-scrollbar';
// LAYOUT
import {BaseLayoutComponent} from './core/Layout/base-layout/base-layout.component';
// HEADER
import {HeaderComponent} from './core/Layout/Components/header/header.component';
import {UserBoxComponent} from './core/Layout/Components/user-box/user-box.component';
// SIDEBAR
import {SidebarComponent} from './core/Layout/Components/sidebar/sidebar.component';
// FOOTER
import {FooterComponent} from './core/Layout/Components/footer/footer.component';
import { MenuItems } from './core/menu-item/menu-item';
import { LoginLayoutComponent } from './core/Layout/login-layout/login.component';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OAuthModule } from 'angular-oauth2-oidc';
import { resource } from './core/auth/auth.config';
import { TokenInterceptor } from './core/auth/token.interceptor';


const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

@NgModule({
  declarations: [

    // LAYOUT

    AppComponent,
    BaseLayoutComponent,
    LoginLayoutComponent,

    // HEADER

    HeaderComponent,
    UserBoxComponent,

    // SIDEBAR

    SidebarComponent,

    // FOOTER

    FooterComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PerfectScrollbarModule,
    HttpClientModule,
    SharedModule,
    BrowserAnimationsModule,
    OAuthModule.forRoot(resource)

  ],
  providers: [
    {
      provide:PERFECT_SCROLLBAR_CONFIG,
      useValue:DEFAULT_PERFECT_SCROLLBAR_CONFIG,
    },
    {
        provide: HTTP_INTERCEPTORS,
        useClass: TokenInterceptor,
        multi: true
    },
    MenuItems
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
