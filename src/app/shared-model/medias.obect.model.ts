import {ImageURLSModel} from "./imageURLS.model";
import {MultiLangText} from "./multiLangText.model";

export class MediasObjectModel {
  altText: MultiLangText;
  variantsUrls: ImageURLSModel;

  constructor(altText: MultiLangText = new MultiLangText(), variantsUrls: ImageURLSModel = new ImageURLSModel()) {
    this.altText = altText;
    this.variantsUrls = variantsUrls;
  }
}
