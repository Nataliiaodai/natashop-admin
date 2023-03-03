import {MultiLangText} from "./multiLangText.model";

export class ProductListItem {
    _id?: number;
    name?: MultiLangText = new MultiLangText();
    price?: number;

}
