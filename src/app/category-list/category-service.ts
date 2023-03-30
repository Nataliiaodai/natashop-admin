import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {GlobalVariables} from "../global-variables";
import {Injectable} from "@angular/core";
import {CategoryTreeModel} from "../shared-model/category-tree.model";
import {CategoryTreeItemModel} from "../shared-model/category-tree-item.model";
import {CategoryModel} from "../shared-model/category.model";


@Injectable({
  providedIn: 'root'
})
export class CategoryService {


  constructor(private http: HttpClient) {}

  public fetchCategoryList(): Observable<CategoryTreeModel> {
    let url = `${GlobalVariables.baseURL}categories/tree`;
    console.log("GET" + url)
    return this.http.get<CategoryTreeModel>(url);
  };

  public fetchCategory(id: number): Observable<CategoryModel> {
    let url = `${GlobalVariables.baseURL}categories/` + id;
    console.log("GET" + url)
    return this.http.get<CategoryModel>(url);

  };



  createCategory(category: CategoryTreeItemModel):Observable<CategoryTreeItemModel> {
    return this.http.post<CategoryTreeItemModel>(GlobalVariables.baseURL + 'categories/', category);
  }


  updateCategory(category: CategoryModel):Observable<CategoryModel> {
    return this.http.put<CategoryModel>(GlobalVariables.baseURL + 'categories/' + category._id, category );
  }


  deleteCategory(category: CategoryModel):Observable<CategoryModel> {
    return this.http.delete<CategoryModel>(GlobalVariables.baseURL + 'categories/' + category._id);
  }


}
