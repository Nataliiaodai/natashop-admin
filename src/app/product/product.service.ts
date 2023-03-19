import { Injectable } from '@angular/core';
import {Product} from "../shared-model/product.model";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {GlobalVariables} from "../global-variables";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }


  createProduct(product: Product):Observable<Product> {
    return this.http.post<Product>(GlobalVariables.baseURL + 'products/', product);
  }


  updateProduct(product: Product):Observable<Product> {
   return this.http.put<Product>(GlobalVariables.baseURL + 'products/' + product._id, product );
  }


  deleteProduct(product: Product):Observable<Product> {
    return this.http.delete<Product>(GlobalVariables.baseURL + 'products/' + product._id);
  }

  getProduct(idToGetProduct: number):Observable<Product> {
    return this.http.get<Product>(GlobalVariables.baseURL + 'products/' + idToGetProduct);
  }


}
