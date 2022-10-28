import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TabsComponent } from './tabs/tabs.component';
import { ContactComponent } from './contact/contact.component';
import { MaterialModule } from './material.module';
import { SearchFilterComponent } from './search-filter/search-filter.component';
import { ShopComponent } from './shop/shop.component';
import { SellComponent } from './sell/sell.component';
import { FilterComponent } from './filter/filter.component';
import { LouerComponent } from './louer/louer.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TabsComponent,
    ContactComponent,
    SearchFilterComponent,
    ShopComponent,
    SellComponent,
    FilterComponent,
    LouerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
