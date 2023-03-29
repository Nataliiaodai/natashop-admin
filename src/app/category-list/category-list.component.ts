import {Component, OnInit} from '@angular/core';
import {CategoryService} from "./category-service";
import { CategoryTreeModel} from "../shared-model/category-tree.model";

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  constructor(private categoryService: CategoryService) {
  }

  categoryTree = new CategoryTreeModel();

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
  }


}
