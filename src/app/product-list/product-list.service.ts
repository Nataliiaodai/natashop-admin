import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class ProductListService {

  constructor(private http: HttpClient) {
  }


  fetchProductList():Observable<any> {
    return this.http.get('http://localhost:3000/products?page=0&limit=25&searchString=поталь&sort=_id&direction=asc')
  }
    // page=0
    // &
    // limit=25
    // &
    // searchString=поталь
    // &
    // sort=_id
    // &
    // direction=asc


}
