import {MultiLangText} from "./multiLangText.model";
import {MediasObjectModel} from "./medias.obect.model";

export class ProductListItem {
    _id?: number;
    name?: MultiLangText = new MultiLangText();
    price?: number;
    medias?: MediasObjectModel [] = [];
}
