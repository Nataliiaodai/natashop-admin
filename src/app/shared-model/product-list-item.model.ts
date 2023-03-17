import {MultiLangText} from "./multiLangText.model";
import {MediasObjectModel} from "./medias.obect.model";

export class ProductListItem {
    _id: number;
    name: MultiLangText;
    price: number;
    medias: MediasObjectModel[] = [];

    constructor(_id: number = 0, name: MultiLangText = new MultiLangText(), price: number = 0, medias: MediasObjectModel[] = []) {
      this._id = _id;
      this.name = name;
      this.price = price;
      this.medias = medias;
    }
}
