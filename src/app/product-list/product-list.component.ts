import {Component, OnInit} from '@angular/core';
import {ProductListService} from "./product-list.service";
import {ProductListItem} from "../shared-model/product-list-item.model";
import {Router} from "@angular/router";


@Component({
  selector: 'app-home-page',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  page = 1;
  limit = 25;
  searchString = '';
  sort = '_id';
  direction = 'desc';

  productList: ProductListItem [] = [];
  pagesTotal = 0;
  itemsTotal = 0;
  itemsFiltered = 0;

  constructor(public productListService: ProductListService,
              public router: Router) {
  }

  ngOnInit() {
    this.fetchAndSaveResponseData();
  }

  fetchAndSaveResponseData() {
    this.productListService.fetchProductPage(this.page, this.limit, this.searchString, this.sort, this.direction)
      .subscribe((productPageResponse) => {
        console.log(productPageResponse);
        this.productList = productPageResponse.data;
        this.pagesTotal = productPageResponse.pagesTotal;
        this.itemsTotal = productPageResponse.itemsTotal;
        this.itemsFiltered = productPageResponse.itemsFiltered;
        this.page = productPageResponse.page;
      })
  }

  onGettingNextPage() {
    if (this.page
      && this.pagesTotal
      && (this.page < this.pagesTotal)
    ) {
      this.page += 1;
      this.fetchAndSaveResponseData();
    }
  }

  onGettingPreviousPage() {
    if (this.page && this.page > 1) {
      this.page -= 1;
      this.fetchAndSaveResponseData();
    }
  }

  onGetProductDetail(prodId: number) {
    console.log(prodId);
    this.router.navigate(['admin/product/edit/' + prodId])
      .then();
  }

  onSortByName() {
    this.onNewSortField("name.uk");
  }

  onSortByID() {
    this.onNewSortField("_id");
  }


  onSortByPrice() {
    this.onNewSortField("price");
  }

  private onNewSortField(newSortField: string) {
    console.log('onNewSortField ' + newSortField);
    if (this.sort === newSortField) {
      this.flipSortDirection();
    } else {
      this.sort = newSortField;
      this.direction = 'desc';
      console.log('onNewSortField ' + newSortField + " direction=" + this.direction + " sort=" + this.sort);
    }
    this.fetchAndSaveResponseData();
  }

  onFiltersReset() {
    this.page = 1;
    this.limit = 25;
    this.searchString = '';
    this.sort = '_id';
    this.direction = 'desc';
    console.log('All filters were reset');
    this.fetchAndSaveResponseData();
  }

  private flipSortDirection() {
    if (this.direction === 'asc') {
      this.direction = 'desc';
    } else {
      this.direction = 'asc';
    }
  }

  onImageError(event: any) {
    event.target.src = 'https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg';
  }

}
