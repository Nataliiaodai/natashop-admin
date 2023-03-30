import {CategoryMediasModel} from "./category-medias.model";
import {MultiLangText} from "./multiLangText.model";


export class CategoryTreeItemModel {
  _id: number;
  parentId: number;
  name: MultiLangText;
  slug: string;
  medias: CategoryMediasModel [];
  children: CategoryTreeItemModel [];

  constructor(_id = 0, parentId = 0,  name:  MultiLangText = new MultiLangText(), slug = '', medias: CategoryMediasModel [] = [], children: CategoryTreeItemModel [] = []) {
    this._id = _id;
    this.parentId = parentId;
    this.name = name;
    this.slug = slug;
    this.medias = medias;
    this.children = children;
  }

}
