import {Component, OnDestroy, OnInit} from '@angular/core';
import {Product} from "../shared-model/product.model";
import {HttpClient} from "@angular/common/http";
import {ProductEditService} from "./product-edit.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-shared-model-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit{
  prod: Product = new Product();
  showId = true;
  id: number;



  constructor(private http: HttpClient,
              private productEditService: ProductEditService,
              private router: Router,
              private route: ActivatedRoute) {
  }



  ngOnInit() {
    // this.currentURL = this.router.url;
    // console.log(this.currentURL);
    // let idToGetProduct = this.route.snapshot.params ['id'];
    // console.log('onInit ' + this.route.snapshot.params ['id']);
    // this.productEditService.getProduct(idToGetProduct)
    //   .subscribe((response) => this.prod = response);
  }


  onProductCreate(): void {
    this.showId = true;
    this.productEditService.createProduct(this.prod).subscribe(
      (response) => {
        this.router.navigate(['admin/product/edit', response._id])
          .then(() => console.log(this.router));
        this.prod = response;
        console.log(response);
      },

      (error: any) => console.log(error),
      () => console.log('Done creating product'),
    )
  }


  onProductUpdate(): void {
    this.showId = true;
    this.productEditService.updateProduct(this.prod).subscribe(
      (response) => this.prod = response,
      (error: any) => console.log(error),
      () => console.log('Done updating product'),
    )
  }


  onProductReset() {
    this.showId = true;
    this.prod = new Product();
    // this.router.navigate(['admin/product/add'])
    //   .then(() => console.log('Information  was cleaned'));
  }

  onProductDelete(): void {
    this.showId = false;
    this.productEditService.deleteProduct(this.prod).subscribe(
      () => this.onProductReset(),
      (error: any) => console.log(error),
      () => console.log('Done deleting product'),
    )
  }


}

