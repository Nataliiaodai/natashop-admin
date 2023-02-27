import {MultiLangText} from "../multiLangText.model";


export class Product {
  name?: MultiLangText = new MultiLangText();
  price?: number;
  note?: string;
  _id?: number;
  fullDescription?: MultiLangText = new MultiLangText();
}
