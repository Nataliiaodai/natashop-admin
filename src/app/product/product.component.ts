import {Component, OnInit} from '@angular/core';
import {Product} from "../shared-model/product.model";
import {HttpClient} from "@angular/common/http";
import {ProductService} from "./product.service";
import {ActivatedRoute, Router} from "@angular/router";
import {MediasObjectModel} from "../shared-model/medias.obect.model";
import {GlobalVariables} from "../global-variables";
import {CategoryTreeModel} from "../shared-model/category-tree.model";


@Component({
  selector: 'app-shared-model-edit',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  prod: Product = new Product();
  categoryTree: CategoryTreeModel = new CategoryTreeModel();

  idToGetProduct = this.route.snapshot.params['productId'];
  currentURL: any = this.router.url;
  prodCategoryItem = {};

  constructor(private http: HttpClient,
              public productService: ProductService,
              private router: Router,
              private route: ActivatedRoute,
  ) {
  }

  isChecked(categoryId: number) {
    for (let prodCategory of this.prod.categories) {
      if (categoryId === prodCategory.id) {
        return true;
      }
    }
    return false;
  }

  onCategoryTreeClick(categoryTreeId: number) {
    if (!this.isChecked(categoryTreeId)) {
      this.prod.categories.push({id: categoryTreeId})
    } else {
      this.onDeleteCategory(categoryTreeId);
    }

  }

  ngOnInit() {
    console.log("ngOnInit. this.router.url=" + this.router.url);
    this.fetchProduct();
    this.fetchCategoryTree();
    console.log("ngOnInit. Done.");
  }


  fetchProduct() {
    if (this.idToGetProduct) {
      this.productService.getProduct(this.idToGetProduct)
        .subscribe((response) => {
          this.setProduct(response);
          console.log("Done productService.getProduct");
        });
    }
  }


  fetchCategoryTree() {
    this.productService.fetchCategoryList()
      .subscribe((categoryTreeResponse) => {
        this.categoryTree = categoryTreeResponse;

        for (let obj of this.prod.categories) {
          this.prodCategoryItem = obj;
        }

      })
  };


  setProduct(updatedProduct: Product) {
    this.prod = updatedProduct;
  }


  onProductSave(): void {
    if (this.idToGetProduct) {
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
  }


  onProductDelete(): void {

    this.productService.deleteProduct(this.prod).subscribe(
      () => {
        this.router.navigate(['admin/product/add'])
          .then();
      },
      (error: any) => console.log(error),
      () => console.log('Done deleting product'),
    )
  }


  onDeleteImage(imageIndex: number) {
    console.log(imageIndex);
    this.prod.medias?.splice(imageIndex, 1);
  }

  onFileSelected(event: any) {
    console.log(event);
    const selectedImageFile: File = event.target.files[0];
    const formData = new FormData();
    formData.append('image', selectedImageFile, selectedImageFile.name)
    this.http.post<MediasObjectModel>(GlobalVariables.baseURL + 'products/media', formData)
      .subscribe(response => {
        console.log(response);
        this.prod.medias.push(response);
      });
  }

  onLeftMove(index: number) {
    const imgToMove = this.prod.medias[index];
    this.prod.medias[index] = this.prod.medias[index - 1];
    this.prod.medias[index - 1] = imgToMove;
  }

  onRightMove(index: number) {
    const imgToMove = this.prod.medias[index];
    this.prod.medias[index] = this.prod.medias[index + 1];
    this.prod.medias[index + 1] = imgToMove;
  }


  onDeleteCategory(categId: number) {
    const productCategIds: number[] = this.prod.categories.map(categoryIdentify => categoryIdentify.id);
    const index = productCategIds.indexOf(categId);

    this.prod.categories.splice(index, 1);
    console.log("this.prod.categories " + JSON.stringify(this.prod.categories));
  }

}

