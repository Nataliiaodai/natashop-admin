import {Component, OnInit} from '@angular/core';
import {CategoryListService} from "./category-list-service";
import {CategoryListModel} from "../shared-model/category-list.model";

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  constructor(private categoryListService: CategoryListService) {
  }

  categoryList = new CategoryListModel();

  ngOnInit() {
    this.fetchAndSaveCategoryList();
  }


  fetchAndSaveCategoryList() {
    this.categoryListService.fetchCategoryList()
      .subscribe((categoryListResponse) => {
        console.log(categoryListResponse);
        // console.log(categoryListResponse.data[0]);
        // console.log(categoryListResponse.data[0].name.uk);
        // console.log(categoryListResponse.data[0].children);

        this.categoryList = categoryListResponse;
      })
  }


}
