import {Component, OnInit} from '@angular/core';
import {ProductListService} from "./product-list.service";



@Component({
  selector: 'app-home-page',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  errorOccurs = false;

  constructor(public productListService: ProductListService) {
  }


  onGettingNextPage() {
    if (this.productListService.params?.page
      && this.productListService.pagesTotal
      && (this.productListService.params?.page < this.productListService.pagesTotal)
    ) {
      this.productListService.params.page += 1;
      this.productListService.getNextPage();
    }
  }


  onGettingPreviousPage() {
    if (this.productListService.params.page && this.productListService.params.page > 1) {
      this.productListService.params.page -= 1;
      this.productListService.getPreviousPage();
    }
  }

  fetchAndSaveResponseData() {
    this.productListService.fetchProductList()
  }

  // onShow() {
  //   this.fetchAndSaveResponseData();
  // }

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


  onGetProductDetail(prodId: number) {
    this.productListService.getProductDetail(prodId);
  }


  onImageError (event: any) {
    this.productListService.handleImageError(event);
  }
}
