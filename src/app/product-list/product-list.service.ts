import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {URLSearchParamsModel} from "../shared-model/URLSearchParams.model";
import {ProductListItem} from "../shared-model/product-list-item.model";
import {ActivatedRoute, Router} from "@angular/router";


@Injectable({
  providedIn: 'root'
})
export class ProductListService {
  params: URLSearchParamsModel = new URLSearchParamsModel();

  productList: ProductListItem [] = [];

  itemsTotal: number;
  itemsFiltered: number;
  page: number;
  pagesTotal: number;


  constructor(private http: HttpClient,
              private route: ActivatedRoute,
              private router: Router) {
  }


  fetchProductList() {
    this.http.get(`http://localhost:3000/products?page=${this.params.page}&limit=${this.params.limit}&searchString=${this.params.searchString}&sort=${this.params.sort}&direction=${this.params.direction}`)
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
        console.log(this.params);
      })
  }

  getNextPage() {
    this.fetchProductList();
  }

  getPreviousPage() {
    this.fetchProductList();
  }

  sortByID() {
    this.params.sort = '_id';
  }

  sortByName() {
    this.params.sort = 'name.uk';
  }

  sortByPrice() {
    this.params.sort = 'price';
  }

  filtersReset() {
    this.params = new URLSearchParamsModel();
    this.fetchProductList();
    console.log('All filters were reset');
  }

  getProductDetail(productId) {
      console.log(productId);
         this.router.navigate(['admin/product/edit/' + productId])
          .then();
      }


  handleImageError(event:any) {
        event.target.src = 'https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg';
      }

}
