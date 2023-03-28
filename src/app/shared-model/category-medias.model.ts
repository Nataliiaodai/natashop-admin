import {CategoryImageURLModel} from "./category-image-URL.model";

export class CategoryMediasModel {
  variantsUrls : CategoryImageURLModel;

  constructor(variantsUrls = new CategoryImageURLModel()) {
    this.variantsUrls = variantsUrls;
  }

}
