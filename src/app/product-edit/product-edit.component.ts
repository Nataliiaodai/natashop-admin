import {Component, OnInit} from '@angular/core';
import {Product} from "../shared-model/product.model";
import {HttpClient} from "@angular/common/http";
import {ProductEditService} from "./product-edit.service";

@Component({
  selector: 'app-shared-model-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit{
  prod : Product = new Product();
  showId = true;

  constructor(private http: HttpClient,
              private productService: ProductEditService) {}


  ngOnInit() {}

  onProductCreate():void  {
    this.showId = true;
    this.productService.createProduct(this.prod).subscribe(
      (response) => this.prod = response,
      (error: any) => console.log(error),
      () => console.log('Done creating shared-model'),
    )
  }


  onProductUpdate():void  {
    this.showId = true;
    this.productService.updateProduct(this.prod).subscribe(
      (response) => this.prod = response,
      (error: any) => console.log(error),
      () => console.log('Done updating shared-model'),
    )
  }

  onProductReset() {
    this.showId = true;
    this.prod = new Product();
  }

  onProductDelete():void  {
    this.showId = false;
    this.productService.deleteProduct(this.prod).subscribe(
      () => this.onProductReset(),
      (error: any) => console.log(error),
      () => console.log('Done deleting shared-model'),
    )
  }

}

