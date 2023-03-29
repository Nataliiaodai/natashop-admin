import {CategoryMediasModel} from "./category-medias.model";
import {MultiLangText} from "./multiLangText.model";


export class CategoryItemModel {
  _id: number;
  parentId: number;
  name: MultiLangText;
  slug: string;
  medias: CategoryMediasModel [];
  children: CategoryItemModel [];

  constructor(_id = 0, parentId = 0,  name:  MultiLangText = new MultiLangText(), slug = '', medias: CategoryMediasModel [] = [], children: CategoryItemModel [] = []) {
    this._id = _id;
    this.parentId = parentId;
    this.name = name;
    this.slug = slug;
    this.medias = medias;
    this.children = children;
  }

}
