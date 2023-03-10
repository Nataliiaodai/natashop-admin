import {Component, OnInit} from '@angular/core';
import {Product} from "../shared-model/product.model";
import {HttpClient} from "@angular/common/http";
import {ProductService} from "./product.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-shared-model-edit',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit{
  prod: Product = new Product();
  showId = true;
  id: number;
  idToGetProduct: any;
  constructor(private http: HttpClient,
              private productService: ProductService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    console.log("ngOnInit. this.router.url=" + this.router.url);
    this.idToGetProduct = this.route.snapshot.params ['productId'];

    if (this.idToGetProduct) {
      console.log('ngOnInit. idToGetProduct=' + this.idToGetProduct);
      this.productService.getProduct(this.idToGetProduct)
        .subscribe((response) => {
          console.log("Done productService.getProduct. old this.prod = " + JSON.stringify(this.prod));
          console.log("Done productService.getProduct. response = " + JSON.stringify(response));
          this.setProduct(response);
          console.log("Done productService.getProduct. new this.prod = " + JSON.stringify(this.prod));

        });
    }

    console.log("ngOnInit. Done.");
  }

  setProduct(updatedProduct: Product) {
    console.log("Setting this.prod = " + JSON.stringify(updatedProduct));
    this.prod = updatedProduct;
  }


  onProductSave(): void {
    this.showId = true;
    if(this. idToGetProduct) {
      this.showId = true;
      this.productService.updateProduct(this.prod).subscribe(
        (response) => {
          console.log('productService.updateProduct = ' + JSON.stringify(response));
          this.setProduct(response);
        },
        (error: any) => console.log(error),
        () => console.log('Done updating product'),
      )
    } else {
      this.productService.createProduct(this.prod).subscribe(
        (response) => {
          console.log("Before navigate. response = " + JSON.stringify(response));
          this.router.navigate(['admin/product/edit', response._id])
            .then(() => {
              console.log("Router navigate done. response = " + JSON.stringify(response));
            });
          // this.prod = response;
        },

        (error: any) => console.log(error),
        () => console.log('Done creating product'),
      )
    }
  };


  onProductDelete(): void {
    this.showId = false;
    this.productService.deleteProduct(this.prod).subscribe(
      () => {
        this.router.navigate(['admin/product/add'])
          .then();
      },
      (error: any) => console.log(error),
      () => console.log('Done deleting product'),

    )
  }


}

