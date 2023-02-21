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

    this.http.post('http://localhost:3000/products', products)
      .subscribe((res) => {
        console.log(res);
      });
  }
}


// private fetchProduct() {
//   this.http.get('http://localhost:3000/products')
//     .pipe(map((res) => {
//       const products = [];
//       for (const key in res) {
//         if(res.hasOwnProperty(key)) {
//           products.push({...res[key], id: key});
//         }
//       }
//       return products;
//     }))
//     .subscribe((res) => {
//       console.log(res);
//     })
// }
