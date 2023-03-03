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
  constructor(private productListService: ProductListService) {}

  itemsFiltered: number;
  itemsTotal: number;
  page: number;
  pagesTotal: number;


  ngOnInit() {
    this.productListService.fetchProductList()
      .subscribe((response) => {
        // console.log(JSON.stringify(response));
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
      })
  }



}
