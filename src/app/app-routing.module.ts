import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProductComponent} from "./product/product.component";
import {ProductListComponent} from "./product-list/product-list.component";
import {CategoryListComponent} from "./category-list/category-list.component";


const routes: Routes = [
  {path: 'admin/products', component: ProductListComponent},
  {path: 'admin/product/add', component: ProductComponent},
  {path: 'admin/product/edit/:productId', component: ProductComponent},
  {path: 'admin/category/edit/:categoryId', component: CategoryListComponent},
  {path: 'admin/category', component: CategoryListComponent},
  {path: 'admin/category/add', component: CategoryListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
