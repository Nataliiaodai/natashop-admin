import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable} from "rxjs";
import {URLSearchParamsModel} from "../shared-model/URLSearchParams.model";


@Injectable({
  providedIn: 'root'
})
export class ProductListService {
  params: URLSearchParamsModel = new URLSearchParamsModel();


  constructor(private http: HttpClient) {
  }

  fetchProductList():Observable<any> {
    return this.http.get(`http://localhost:3000/products?${this.params}`);
    // return this.http.get('http://localhost:3000/products?page=0&limit=25&searchString=поталь&sort=_id&direction=asc');
  }

  getNextPage() {
    this.params.page += 1;
  }

  getPreviousPage() {
    if (this.params.page >0 ) {
      this.params.page -= 1;
    }
  }

  filtersReset() {
    console.log('All filters were reset');
  }



}
