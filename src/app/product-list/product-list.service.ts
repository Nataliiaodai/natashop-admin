import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";
import {ProductPage} from "../shared-model/product-page.model";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class ProductListService {

  constructor(private http: HttpClient,
              private route: ActivatedRoute,
              public router: Router) {
  }

  fetchProductPage(page: number, limit: number, searchString: string, sort: string, direction: string): Observable<ProductPage> {
    return this.http.get<ProductPage>(
      `http://localhost:3000/products?page=${page}&limit=${limit}&searchString=${searchString}&sort=${sort}&direction=${direction}`)

  }

}

