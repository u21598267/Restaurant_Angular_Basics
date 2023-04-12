import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SearchComponent } from './search/search.component';
import { CartComponent } from './cart/cart.component';
import {AccountComponent} from "./account/account.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path: 'about', component: AboutComponent},
  {path : 'search', component: SearchComponent},
  {path: 'cart', component: CartComponent},
  {path: 'account', component: AccountComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
