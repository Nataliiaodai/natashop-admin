import {ImageURLSModel} from "./imageURLS.model";
import {MultiLangText} from "./multiLangText.model";

export class MediasObjectModel {
  altText?: MultiLangText = new MultiLangText();
  variantsUrls?: ImageURLSModel = new ImageURLSModel();
}
