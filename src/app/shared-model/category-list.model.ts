import {CategoryDataModel} from "./category-data.model";


export class CategoryListModel {
  data: CategoryDataModel [] = [];

  constructor(data: CategoryDataModel [] = []) {
    this.data = data;
  }

}
