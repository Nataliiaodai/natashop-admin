import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProductComponent} from "./product/product.component";
import {ProductListComponent} from "./product-list/product-list.component";
import {CategoryComponent} from "./category/category.component";


const routes: Routes = [
  {path: 'admin/products', component: ProductListComponent},
  {path: 'admin/product/add', component: ProductComponent},
  {path: 'admin/product/edit/:productId', component: ProductComponent},
  {path: 'admin/category', component: CategoryComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
