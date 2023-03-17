import {ProductListItem} from "./product-list-item.model";


export class ProductPage {
  itemsFiltered: number;
  itemsTotal: number;
  page: number;
  pagesTotal: number;
  data: ProductListItem[];

  constructor(itemsFiltered: number = 0, itemsTotal: number = 0, page: number = 0, pagesTotal: number = 0, data: ProductListItem[] = []) {
    this.itemsFiltered = itemsFiltered;
    this.itemsTotal = itemsTotal;
    this.page = page;
    this.pagesTotal = pagesTotal;
    this.data = data;
  }

}


