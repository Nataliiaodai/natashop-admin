import {Component, Injectable, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Product} from "./model/product.model";
import {ProductService} from "./product.service";


@Injectable()
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
  title = 'natashop-admin';
  prod : Product = new Product();
  showId = true;

  constructor(private http: HttpClient,
              private productService: ProductService) {}


  ngOnInit() {
    console.log(this.prod);
  }

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

