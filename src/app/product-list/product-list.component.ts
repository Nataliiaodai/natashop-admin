import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {ProductListService} from "./product-list.service";
import {ProductListItem} from "../shared-model/product-list-item.model";
import {URLSearchParamsModel} from "../shared-model/URLSearchParams.model";


@Component({
  selector: 'app-home-page',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  // productList: ProductListItem [] = [];


  constructor(public productListService: ProductListService) {
  }

  // itemsTotal: number;
  // itemsFiltered: number;
  // page: number;
  // pagesTotal: number;

  // ngOnChanges(changes: SimpleChanges) {
  //   if ( !changes['params'].firstChange) {
  //     this.fetchAndSaveResponseData();
  //   }
  //   console.log(changes['params'].currentValue);
  //   // this.fetchAndSaveResponseData();
  // }


  // onItemsOnPageChange(eventData: Event) {
  //   console.log((<HTMLInputElement>eventData.target).value);
  //   this.fetchAndSaveResponseData();
  // }

  onGettingNextPage() {
    if (this.productListService.params.page < this.productListService.pagesTotal) {
      this.productListService.params.page += 1;
      this.productListService.getNextPage();
    }
  }


  onGettingPreviousPage() {
    if (this.productListService.params.page > 1) {
      this.productListService.params.page -= 1;
      this.productListService.getPreviousPage();
    }
  }

  fetchAndSaveResponseData() {
    this.productListService.fetchProductList()
  }

  onShow() {
    this.fetchAndSaveResponseData();
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

  onFiltersReset() {
    this.productListService.filtersReset();
  }


}
