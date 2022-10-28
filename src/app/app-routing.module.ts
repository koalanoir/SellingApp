import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { LouerComponent } from './louer/louer.component';
import { SellComponent } from './sell/sell.component';
import { ShopComponent } from './shop/shop.component';


const routes: Routes = [
  {
    path:'Home', component: HomeComponent
  },
  { path:'Sell', component: SellComponent },
  { path:'Shop', component: ShopComponent },
  { path:'Louer', component: LouerComponent },
  { path:'Contact', component: ContactComponent },

  { path: '',   redirectTo: '/Home', pathMatch: 'full' }, // redirect to `first-component`
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
