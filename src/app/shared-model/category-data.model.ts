import {CategoryChildrenModel} from "./category-children.model";
import {CategoryMediasModel} from "./category-medias.model";

export class CategoryDataModel {
  _id: number;
  parentId: number;
  name: string;
  slug: string;
  medias: CategoryMediasModel [];
  children: CategoryChildrenModel [];

  constructor(_id = 0, parentId = 0, name = '', slug = '', medias: CategoryMediasModel [] = [], children: CategoryChildrenModel [] = []) {
    this._id = _id;
    this.parentId = parentId;
    this.name = name;
    this.slug = slug;
    this.medias = medias;
    this.children = children;
  }

}
