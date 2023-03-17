import { Injectable } from '@angular/core';
import {Product} from "../shared-model/product.model";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }


  createProduct(product: Product):Observable<Product> {
    return this.http.post<Product>('http://localhost:3000/products', product);
  }


  updateProduct(product: Product):Observable<Product> {
   return this.http.put<Product>('http://localhost:3000/products/'+ product._id, product );
  }


  deleteProduct(product: Product):Observable<Product> {
    return this.http.delete<Product>('http://localhost:3000/products/' + product._id);
  }

  getProduct(idToGetProduct: number):Observable<any> {
    return this.http.get('http://localhost:3000/products/'+ idToGetProduct);
  }


}
