import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import { AboutComponent } from './about/about.component';
import { SearchComponent } from './search/search.component';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import { CartComponent } from './cart/cart.component';
import { ModalComponent } from './modal/modal.component';
import {FormsModule} from "@angular/forms";
import { AccountComponent } from './account/account.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    SearchComponent,
    CartComponent,
    ModalComponent,
    AccountComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        MatToolbarModule,
        FontAwesomeModule,
        FormsModule,
        BrowserAnimationsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
