import {Component, OnInit} from '@angular/core';
import {CategoryService} from "./category-service";
import {CategoryTreeModel} from "../shared-model/category-tree.model";
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
              private http: HttpClient) {
  }

  categoryTree: CategoryTreeModel = new CategoryTreeModel();
  category: CategoryModel = new CategoryModel();
  currentURL: any = this.router.url;


  ngOnInit() {
    console.log("ngOnInit start");
    this.fetchCategoryTree();

    let idToGetCategory = this.route.snapshot.params['categoryId'];
    if (idToGetCategory) {
      this.fetchCategory(idToGetCategory);
    }
    console.log("ngOnInit end this.currentURL=" + this.router.url);
  }

  fetchCategoryTree() {
    this.categoryService.fetchCategoryList()
      .subscribe((categoryTreeResponse) => {
        console.log(categoryTreeResponse);
        this.categoryTree = categoryTreeResponse;
      })
  };

  fetchCategory(id: number) {
    this.categoryService.fetchCategory(id)
      .subscribe((categoryResponse) => {
        console.log(`fetchCategory id=${id} categoryResponse=${categoryResponse}`);
        this.setCategory(categoryResponse);
      });
  };

  onGetCategoryDetail(id: number) {
    console.log("onGetCategoryDetail=" + id);
    this.router.navigate(['admin/category/edit/' + id])
      .then(() => {
        // const idToGetCategory = this.route.snapshot.params['categoryId'];
        console.log("onGetCategoryDetail this.router.navigate success id=" + id);
        this.fetchCategory(id);
      });
  }

  onCategoryDelete(): void {
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
    console.log("Setting this.category = " + JSON.stringify(updatedCategory));
    this.category = updatedCategory;
  }

  onCategorySave(): void {
    let idToGetCategory = this.route.snapshot.params ['categoryId'];
    if (idToGetCategory) {
      this.updateCategory();
    } else {
      let parentID = this.route.snapshot.params ['parentId'];
      console.log(' onCategorySave --- PARENT Id: ' + parentID);
      if (parentID !== 0) {
        this.category.parentId = parentID;
      }

      this.createCategory();
    }


    this.fetchCategoryTree();
  }

  private createCategory() {
    this.categoryService.createCategory(this.category).subscribe(
      (response) => {
        console.log("Before navigate. response = " + JSON.stringify(response));
        this.router.navigate(['admin/category/edit', response._id])
          .then(() => {
            console.log("Router navigate done. response = " + JSON.stringify(response));
          });
        this.setCategory(response);
        this.fetchCategoryTree();
      },

      (error: any) => console.log(error),
      () => console.log('Done creating category'),
    )
  }

  private updateCategory() {
    this.categoryService.updateCategory(this.category).subscribe(
      (response) => {
        console.log('categoryService.updateCategory = ' + JSON.stringify(response));
        this.setCategory(response);
        this.fetchCategoryTree();
      },
      (error: any) => console.log(error),
      () => console.log('Done updating category'),
    )
  }

  onDeleteImage(imageIndex: number) {
    console.log(imageIndex);
    this.category.medias?.splice(imageIndex, 1);
  }

  onFileSelected(event: any) {
    console.log(event);
    const selectedImageFile: File = event.target.files[0];
    const formData = new FormData();
    formData.append('image', selectedImageFile, selectedImageFile.name)
    this.http.post<MediasObjectModel>(GlobalVariables.baseURL + 'categories/media', formData)
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
