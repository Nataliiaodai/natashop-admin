import {MultiLangText} from "./multiLangText.model";
import {MediasObjectModel} from "./medias.obect.model";


export class Product {
  name?: MultiLangText = new MultiLangText();
  price?: number;
  note?: string;
  _id?: number;
  fullDescription?: MultiLangText = new MultiLangText();
  medias?: MediasObjectModel [] = [];
}
