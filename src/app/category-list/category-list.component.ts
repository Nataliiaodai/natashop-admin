import {Component, OnInit} from '@angular/core';
import {CategoryService} from "./category-service";
import { CategoryTreeModel} from "../shared-model/category-tree.model";
import {CategoryTreeItemModel} from "../shared-model/category-tree-item.model";
import {ActivatedRoute, Router} from "@angular/router";
import {MediasObjectModel} from "../shared-model/medias.obect.model";
import {GlobalVariables} from "../global-variables";
import {HttpClient} from "@angular/common/http";
import {CategoryModel} from "../shared-model/category.model";

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  constructor(private categoryService: CategoryService,
              public router: Router,
              private route: ActivatedRoute,
              private http: HttpClient) {}

  categoryTree = new CategoryTreeModel();
  categoryTreeItem = new CategoryTreeItemModel();
  category = new CategoryModel();

  currentURL: any = this.router.url;
  idToGetCategory = this.route.snapshot.params ['productId'];

  ngOnInit() {
    this.fetchAndSaveCategoryList();
  }


  fetchAndSaveCategoryList() {
    this.categoryService.fetchCategoryList()
      .subscribe((categoryTreeResponse) => {
        console.log(categoryTreeResponse);
        console.log(categoryTreeResponse.data[0]);
        console.log(categoryTreeResponse.data[0].name.uk);
        console.log(categoryTreeResponse.data[0].children);

        this.categoryTree = categoryTreeResponse;
      })
  };


  fetchAndSaveCategory(id: number) {
    this.categoryService.fetchCategory(id)
      .subscribe((categoryResponse) => {
        console.log(categoryResponse);
        for (let imageMedia of categoryResponse.medias){
            console.log(imageMedia.variantsUrls.small);
            console.log(imageMedia.altText)
        }

        this.category = categoryResponse;
      });

    this.onGetCategoryDetail(id);
  };


  onGetCategoryDetail(id: number) {
    console.log(id);
    this.router.navigate(['admin/category/edit/' + id])
      .then();
  }



  onCategoryDelete() : void {
    this.categoryService.deleteCategory(this.category).subscribe(
      () => {
        this.router.navigate(['admin/category/add'])
          .then();
      },
      (error: any) => console.log(error),
      () => console.log('Done deleting category'),
    )

  }


  setCategory(updatedCategory: CategoryModel) {
    console.log("Setting this.prod = " + JSON.stringify(updatedCategory));
    this.category = updatedCategory;
  }


  onCategorySave(): void {
    if(this.idToGetCategory) {
      this.categoryService.updateCategory(this.category).subscribe(
        (response) => {
          console.log('categoryService.updateCategory = ' + JSON.stringify(response));
          this.setCategory(response);
        },
        (error: any) => console.log(error),
        () => console.log('Done updating category'),
      )
    } else {
      this.categoryService.createCategory(this.categoryTreeItem).subscribe(
        (response) => {
          console.log("Before navigate. response = " + JSON.stringify(response));
          this.router.navigate(['admin/category/edit', response._id])
            .then(() => {
              console.log("Router navigate done. response = " + JSON.stringify(response));
            });
          // this.category = response;
        },

        (error: any) => console.log(error),
        () => console.log('Done creating category'),
      )
    }
  }



  onDeleteImage (imageIndex: number) {
    console.log(imageIndex);
    this.category.medias?.splice(imageIndex,1);
  }

  onFileSelected (event: any) {
    console.log(event);
    const selectedImageFile : File = event.target.files[0];
    const formData = new FormData();
    formData.append('image', selectedImageFile, selectedImageFile.name )
    this.http.post<MediasObjectModel>(GlobalVariables.baseURL + 'categories/media' , formData)
      .subscribe(response => {
        console.log(response);
        this.category.medias.push(response);
      });
  }

  onLeftMove(index: number) {
    const imgToMove = this.category.medias[index];
    this.category.medias[index] = this.category.medias[index - 1];
    this.category.medias[index - 1] = imgToMove;
  }

  onRightMove(index: number) {
    const imgToMove = this.category.medias[index];
    this.category.medias[index] = this.category.medias[index + 1];
    this.category.medias[index + 1] = imgToMove;
  }


}
