import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProductEditComponent} from "./product-edit/product-edit.component";
import {ProductListComponent} from "./product-list/product-list.component";


const routes: Routes = [
  {path: 'admin/products', component: ProductListComponent},
  {path: 'admin/product-edit/add', component: ProductEditComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
