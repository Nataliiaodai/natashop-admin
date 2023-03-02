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
    console.log("ngOnInit. this.router.url=" + this.router.url);
    const idToGetProduct = this.route.snapshot.params ['productId'];

    if (idToGetProduct) {
      console.log('ngOnInit. idToGetProduct=' + idToGetProduct);
      this.productEditService.getProduct(idToGetProduct)
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


  onProductCreate(): void {
    this.showId = true;
    this.productEditService.createProduct(this.prod).subscribe(
      (response) => {
        console.log("Before navigate. response = " + JSON.stringify(response));
        this.router.navigate(['admin/product/edit', response._id])
          .then(() => {
            // console.log(this.router);
            // console.log("this.prod = " + JSON.stringify(this.prod))
            console.log("Router navigate done. response = " + JSON.stringify(response));
            // this.prod = response;
            // console.log("this.prod = " + JSON.stringify(this.prod))
          });
        // this.prod = response;
        console.log("After navigate. response = " + JSON.stringify(response));

      },

      (error: any) => console.log(error),
      () => console.log('Done creating product'),
    )
  }


  onProductUpdate(): void {
    this.showId = true;
    this.productEditService.updateProduct(this.prod).subscribe(
      (response) => {
        console.log('productService.updateProduct = ' + JSON.stringify(response));
        this.setProduct(response);
      },
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

