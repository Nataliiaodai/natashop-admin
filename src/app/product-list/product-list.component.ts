import {Component, OnInit} from '@angular/core';
import {ProductListService} from "./product-list.service";
import {ProductListItem} from "../shared-model/product-list-item.model";


@Component({
  selector: 'app-home-page',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent  implements OnInit{
  productList: ProductListItem [] = [];
  constructor(public productListService: ProductListService) {}

  itemsTotal: number;
  itemsFiltered: number;
  page: number;
  pagesTotal: number;

  onGettingNextPage() {
    this.productListService.getNextPage();
  }

  onGettingPreviousPage() {
    this.productListService.getPreviousPage();
  }

  fetchAndSaveResponseData() {
    this.productListService.fetchProductList()
      .subscribe((response) => {
        console.log(response);
        this.itemsFiltered = response["itemsFiltered"];
        this.itemsTotal = response["itemsTotal"];
        this.page = response["page"];
        this.pagesTotal = response["pagesTotal"];
        console.log(this.itemsFiltered);
        console.log(this.itemsTotal);
        console.log(this.page);
        console.log(this.pagesTotal);
        this.productList = response["data"];
        console.log(this.productList);
        console.log(this.productListService.params);
      })
  }

  ngOnInit() {
    this.fetchAndSaveResponseData();
  }

  onSortByName() {
    this.productListService.sortByName();
    if (this.productListService.params.direction === 'asc') {
      this.productListService.params.direction = 'desc';
    } else {
      this.productListService.params.direction = 'asc';
    }
    this.fetchAndSaveResponseData();
  }

  onSortByID() {
    this.productListService.sortByID();
    if (this.productListService.params.direction === 'asc') {
      this.productListService.params.direction = 'desc';
    } else {
      this.productListService.params.direction = 'asc';
    }
    this.fetchAndSaveResponseData();
  }

  onSortByPrice() {
    this.productListService.sortByPrice();
    if (this.productListService.params.direction === 'asc') {
      this.productListService.params.direction = 'desc';
    } else {
      this.productListService.params.direction = 'asc';
    }
    this.fetchAndSaveResponseData();
  }
  // onFiltersReset() {
  //   this.productListService.filtersReset()
  // }


}
