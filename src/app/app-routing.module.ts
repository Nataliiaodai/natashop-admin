import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {ProductEditComponent} from "./product/product-edit/product-edit.component";
import {NotFoundComponent} from "./not-found/not-found.component";


const routes: Routes = [
  // { path: '', component: HomeComponent},
  { path: 'admin/product/edit', component: ProductEditComponent },
  { path: 'admin/product', component: AppComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
