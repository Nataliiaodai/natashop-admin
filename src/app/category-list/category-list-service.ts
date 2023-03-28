import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {GlobalVariables} from "../global-variables";
import {CategoryListModel} from "../shared-model/category-list.model";
import {Injectable} from "@angular/core";


@Injectable({
  providedIn: 'root'
})
export class CategoryListService {


  constructor(private http: HttpClient) {}

  public fetchCategoryList(): Observable<CategoryListModel> {
    let url = `${GlobalVariables.baseURL}categories/tree`;
    console.log("GET" + url)
    return this.http.get<CategoryListModel>(url);
  }

}
