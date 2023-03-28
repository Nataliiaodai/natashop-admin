import {CategoryDataModel} from "./category-data.model";

export class CategoryChildrenModel {

  children: CategoryDataModel[] = [];

  constructor(children = []) {
    this.children = children;
  }




}
