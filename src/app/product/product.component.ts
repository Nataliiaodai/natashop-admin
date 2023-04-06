import {Component, OnInit} from '@angular/core';
import {Product} from "../shared-model/product.model";
import {HttpClient} from "@angular/common/http";
import {ProductService} from "./product.service";
import {ActivatedRoute, Router} from "@angular/router";
import {MediasObjectModel} from "../shared-model/medias.obect.model";
import {GlobalVariables} from "../global-variables";
import {CategoryTreeModel} from "../shared-model/category-tree.model";
import {CategoriesIdentifyModel} from "../shared-model/categories-identify.model";


@Component({
  selector: 'app-shared-model-edit',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  prod: Product = new Product();
  categoryTree: CategoryTreeModel = new CategoryTreeModel();




  checked: boolean = false;

  idToGetProduct = this.route.snapshot.params['productId'];
  currentURL: any = this.router.url;

  constructor(private http: HttpClient,
              public productService: ProductService,
              private router: Router,
              private route: ActivatedRoute,
  ) {
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
        // console.log(categoryTreeResponse);
        this.categoryTree = categoryTreeResponse;

        for (let category of this.categoryTree.data) {
          this.isMainCategoryChecked({id: category._id});

          for (let child of category.children) {
            this.isChildCategoryChecked({id: child._id});

            for (let grandChild of  child.children) {
              this.isGrandChildCategoryChecked({id: grandChild._id});

            }
          }
        }

        // this.isMainCategoryChecked({id: category._id});
        // this.isChildCategoryChecked({id: child._id});
        // this.isGrandChildCategoryChecked({id:grandChild._id});
      })
  };


  setProduct(updatedProduct: Product) {
    // console.log("Setting this.prod = " + JSON.stringify(updatedProduct));
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

  isMainCategoryChecked(categoryId: CategoriesIdentifyModel) {
    for (let obj of this.prod.categories) {
      if (obj === categoryId) {
        this.checked = true;
      } else {
        this.checked = true;
      }

      // console.log("this.prod.categories from NGONINIT ------ " + JSON.stringify(this.prod.categories));
      // console.log("itemOfExistsProdCategoryArray from NGONINIT ------ " + JSON.stringify(this.iterableCategoryObj));

    }
  }

  isChildCategoryChecked(categoryId: CategoriesIdentifyModel) {
    for (let obj of this.prod.categories) {
      if (obj === categoryId) {
        this.checked = true;
      } else {
        this.checked = true;
      }
    }
  }


  isGrandChildCategoryChecked(categoryId: CategoriesIdentifyModel) {
    for (let obj of this.prod.categories) {
      if (obj === categoryId) {
        this.checked = true;
      } else {
        this.checked = true;
      }
    }

  }

  onAddCategory(categoryId: CategoriesIdentifyModel) {


    console.log('Я ПОЛУЧАЮ НА КЛИКЕ ПО ЧЕКБОКС ------- обьект  ' + JSON.stringify(categoryId));
    // console.log('ЭТО СПИСОК СУЩЕСТВУЮЩИХ КАТЕГОРИЙ ДАННОГО ПРОДУКТА -------' + JSON.stringify(this.prod.categories));
    // for (let categoryObj of this.prod.categories) {
    //         let indexOfCategoryToDelete = this.prod.categories.indexOf(categoryObj);
    //         // this.arrayOfExistsProdCategory.splice(indexOfCategoryToDelete, 1);
    //       } else {
    //         // this.arrayOfExistsProdCategory.push(categoryId);
    //       console.log(false);
    //       }
    //   console.log('ID КАТЕГОРИИ ИЗ ЧЕКБОКСА --------  ' + JSON.stringify(categoryId.id));
    //
    // }
    // this.fetchProduct();

  }


  onDeleteCategory(categoryId: CategoriesIdentifyModel) {
    const index = this.prod.categories.map(categoryId => categoryId.id).indexOf(categoryId.id);
    console.log("index " + index);
    this.prod.categories.splice(index, 1);
    console.log("this.prod.categories " + JSON.stringify(this.prod.categories));


  }

}

