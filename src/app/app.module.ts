import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AuthModule } from '@auth0/auth0-angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
    MaterialModule,
    AuthModule.forRoot({
      domain: 'dev-cjxhb-x9.eu.auth0.com',
      clientId: 'FRN00astHF7aUUKfIrb9bEbFmk2ZMDII'
    }),    
    FormsModule, BrowserAnimationsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
