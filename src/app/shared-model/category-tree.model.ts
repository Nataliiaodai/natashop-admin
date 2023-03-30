import {CategoryTreeItemModel} from "./category-tree-item.model";


export class CategoryTreeModel {
  data: CategoryTreeItemModel [] = [];

  constructor(data: CategoryTreeItemModel [] = []) {
    this.data = data;
  }

}
