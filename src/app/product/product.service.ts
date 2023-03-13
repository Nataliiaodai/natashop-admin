import { Injectable } from '@angular/core';
import {Product} from "../shared-model/product.model";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  prod: Product = new Product();

  constructor(private http: HttpClient) { }


  createProduct(product: Product):Observable<Product> {
    return this.http.post('http://localhost:3000/products', product);
  }


  updateProduct(product: Product):Observable<Product> {
   return this.http.put('http://localhost:3000/products/'+ product._id, product );
  }


  deleteProduct(product: Product):Observable<Product> {
    return this.http.delete('http://localhost:3000/products/' + product._id);
  }

  getProduct(idToGetProduct: number):Observable<any> {
    return this.http.get('http://localhost:3000/products/'+ idToGetProduct);
  }

  deleteImage(imageIndex: number){
    console.log(imageIndex);
    this.prod.medias.splice(imageIndex,1);
  }

}
