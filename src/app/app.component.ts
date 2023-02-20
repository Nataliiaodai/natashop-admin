import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'natashop-admin';

  constructor(private http: HttpClient) {}

  onProductCreate(products: {prodName: string, prodPrice: string, prodComment: string}) {
    console.log(products);

    this.http.post('192.168.0.101:3000/products', products)
      .subscribe((res) => {
        console.log(res);
      });
  }
}


// {
//   "name": {
//   "ru" : "My product 2"
// },
//   "price": "0,33"
// }
