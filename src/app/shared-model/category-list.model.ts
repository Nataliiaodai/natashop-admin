import {CategoryItemModel} from "./category-item.model";


export class CategoryListModel {
  data: CategoryItemModel [] = [];

  constructor(data: CategoryItemModel [] = []) {
    this.data = data;
  }

}
