import {MultiLangText} from "./multiLangText.model";
import {MediasObjectModel} from "./medias.obect.model";
import {CategoriesIdentifyModel} from "./categories-identify.model";


export class Product {
  name: MultiLangText;
  price: number;
  note: string;
  _id: number;
  fullDescription: MultiLangText;
  slug: string;
  medias: MediasObjectModel [] = [];
  categories: CategoriesIdentifyModel [] = [];

  constructor(name: MultiLangText = new MultiLangText(),
              price = 0,
              note = '',
              _id = 0,
              fullDescription: MultiLangText = new MultiLangText(),
              slug: string = '',
              medias: MediasObjectModel [] = [],
              categories: CategoriesIdentifyModel [] = []) {
    this.name = name;
    this.price = price;
    this.note = note;
    this._id = _id;
    this.fullDescription = fullDescription;
    this.slug = slug;
    this.medias = medias;
    this.categories = categories;
  }
}


