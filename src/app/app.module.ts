import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { ProductEditComponent } from './product/product-edit/product-edit.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductsComponent } from './product/products.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductEditComponent,
    NotFoundComponent,
    ProductsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
