import {CategoryItemModel} from "./category-item.model";


export class CategoryTreeModel {
  data: CategoryItemModel [] = [];

  constructor(data: CategoryItemModel [] = []) {
    this.data = data;
  }

}
