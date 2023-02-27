import {Component, OnInit} from '@angular/core';
import {Product} from "../product.model";
import {HttpClient} from "@angular/common/http";
import {ProductService} from "../product.service";

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit{
  prod : Product = new Product();
  showId = true;

  constructor(private http: HttpClient,
              private productService: ProductService) {}


  ngOnInit() {}

  onProductCreate():void  {
    this.showId = true;
    this.productService.createProduct(this.prod).subscribe(
      (response) => this.prod = response,
      (error: any) => console.log(error),
      () => console.log('Done creating product'),
    )
  }


  onProductUpdate():void  {
    this.showId = true;
    this.productService.updateProduct(this.prod).subscribe(
      (response) => this.prod = response,
      (error: any) => console.log(error),
      () => console.log('Done updating product'),
    )
  }

  onProductReset() {
    this.showId = true;
    this.prod = new Product();
  }

  onProductDelete():void  {
    this.showId = false;
    this.productService.deleteProduct(this.prod).subscribe(
      (response) => this.onProductReset(),
      (error: any) => console.log(error),
      () => console.log('Done deleting product'),
    )
  }

}

