import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {ProductEditComponent} from "./product/product-edit/product-edit.component";
import {NotFoundComponent} from "./not-found/not-found.component";
import { ProductsComponent} from "./product/products.component";


const routes: Routes = [
  { path: 'admin/product', component: ProductsComponent },
  { path: 'admin/product/edit', component: ProductEditComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
