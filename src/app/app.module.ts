import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {ProductComponent} from './product/product.component';
import {ProductListComponent} from './product-list/product-list.component';
import { EditorModule } from "@tinymce/tinymce-angular";


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    EditorModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
