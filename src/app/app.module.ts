import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {ProductComponent} from './product/product.component';
import {ProductListComponent} from './product-list/product-list.component';
import { EditorModule } from "@tinymce/tinymce-angular";
import { CategoryListComponent } from './category-list/category-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule} from "@angular/material/select";
import {MatFormFieldModule} from "@angular/material/form-field";
import {TransCategIdToNamePipe} from "./pipes/transCategIdToName.pipe";

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductListComponent,
    CategoryListComponent,
    TransCategIdToNamePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    EditorModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
