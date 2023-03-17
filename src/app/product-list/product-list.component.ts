import {Component, OnInit} from '@angular/core';
import {ProductListService} from "./product-list.service";
import {ProductListItem} from "../shared-model/product-list-item.model";



@Component({
  selector: 'app-home-page',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  page = 1;
  productList: ProductListItem [] = [];
  itemsTotal = 0;
  itemsFiltered = 0;
  limit = 25;
  pagesTotal = 0;
  searchString = '';
  sort = '_id';
  direction = 'desc';

  constructor(public productListService: ProductListService) {
  }

  fetchAndSaveResponseData() {
    this.productListService.fetchProductPage(this.page, this.limit, this.searchString, this.sort, this.direction)
      .subscribe((productPageResponse) => {
        console.log(productPageResponse);
        this.itemsFiltered = productPageResponse.itemsFiltered;
        this.itemsTotal = productPageResponse.itemsTotal;
        this.page = productPageResponse.page;
        this.pagesTotal = productPageResponse.pagesTotal;
        this.productList = productPageResponse.data;
        console.log(this.itemsFiltered);
        console.log(this.itemsTotal);
        console.log(this.page);
        console.log(this.pagesTotal);
        console.log(this.productList);
      })
  }


  onGettingNextPage() {
    if (this.page
      && this.pagesTotal
      && (this.page < this.pagesTotal)
    ) {
      this.page += 1;
      this.getNextPage();
    }
    this.fetchAndSaveResponseData();
  }

  onGettingPreviousPage() {
    if (this.page && this.page > 1) {
      this.page -= 1;
      this.getPreviousPage();
    }
    this.fetchAndSaveResponseData();
  }


  ngOnInit() {
    this.fetchAndSaveResponseData();
  }

  onSortByName() {
    this.sortByName();
    if (this.direction === 'asc') {
      this.direction = 'desc';
    } else {
      this.direction = 'asc';
    }
    this.fetchAndSaveResponseData();
  }

  onSortByID() {
    this.sortByID();
    if (this.direction === 'asc') {
      this.direction = 'desc';
    } else {
      this.direction = 'asc';
    }
    this.fetchAndSaveResponseData();
  }

  onSortByPrice() {
    this.sortByPrice();
    if (this.direction === 'asc') {
      this.direction = 'desc';
    } else {
      this.direction = 'asc';
    }
    this.fetchAndSaveResponseData();
  }

  onFiltersReset() {
    this.filtersReset();
  }


  onGetProductDetail(prodId: number) {
    this.getProductDetail(prodId);
  }


  onImageError (event: ErrorEvent) {
    this.handleImageError(event);
  }


  getNextPage() {
    this.productListService.fetchProductPage(this.page, this.limit, this.searchString, this.sort, this.direction);
  }

  getPreviousPage() {
    this.productListService.fetchProductPage(this.page, this.limit, this.searchString, this.sort, this.direction);
  }

  sortByID() {
    this.sort = '_id';
  }

  sortByName() {
    this.sort = 'name.uk';
  }

  sortByPrice() {
    this.sort = 'price';
  }

  filtersReset() {
    this.page = 1;
    this.itemsTotal = 4266;
    this.itemsFiltered = 4266;
    this.limit = 25;
    this.pagesTotal = 171;
    this.searchString = '';
    this.sort = '_id';
    this.direction = 'desc';
    this.productListService.fetchProductPage(this.page, this.limit, this.searchString, this.sort, this.direction);
    console.log('All filters were reset');
    this.fetchAndSaveResponseData();
  }

  getProductDetail(productId: number) {
    console.log(productId);
    this.productListService.router.navigate(['admin/product/edit/' + productId])
      .then();
  }


  handleImageError(event: any) {
    event.target.src  = 'https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg';
  }

}
