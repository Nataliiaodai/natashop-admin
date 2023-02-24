import {Component} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Product} from "./model/product";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'natashop-admin';
  prod : Product = new Product();

  constructor(private http: HttpClient) {
  }


  onProductCreate() {
    this.http.post('http://localhost:3000/products', this.prod)
      .subscribe((responseData) => {
        // this.prod.price = responseData["price"];
        // this.prod.note = responseData["note"];
        // this.prod._id = responseData["_id"];
        this.prod = responseData;
        console.log(this.prod);

      });
  }

}

