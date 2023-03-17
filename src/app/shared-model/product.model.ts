import {MultiLangText} from "./multiLangText.model";
import {MediasObjectModel} from "./medias.obect.model";


export class Product {
  name: MultiLangText;
  price: number;
  note: string;
  _id: number;
  fullDescription: MultiLangText;
  medias: MediasObjectModel [] = [];

  constructor(name: MultiLangText = new MultiLangText(),
              price: number = 0,
              note: string = '',
              _id: number = 0,
              fullDescription: MultiLangText = new MultiLangText(),
              medias: MediasObjectModel [] = []) {
    this.name = name;
    this.price = price;
    this.note = note;
    this._id = _id;
    this.fullDescription = fullDescription;
    this.medias = medias;
  }
}


