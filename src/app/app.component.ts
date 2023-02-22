import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
  title = 'natashop-admin';

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    // this.fetchProduct();
  }


    // this.fetchProduct()


  onProductCreate(products: {price: string, note: string }) {
    this.http.post('http://localhost:3000/products', products)
      .subscribe((res) => {
        console.log( res);
      });

  }


  private fetchProduct() {
    this.http.get('http://localhost:3000/products/4720')
      // .pipe(map((res) => {
      //   const products = [];
      //   for (const key in res) {
      //     if (res.hasOwnProperty(key)) {
      //       products.push({...res[key]});
      //     }
      //     products.push({...res});
      //   }
      //   return products;
      // }))
      .subscribe((res) => {
        console.log(res);
        // const keys = res.id.keys();
        // this.id = keys.map(key =>
        //   `${key}: ${res.headers.get(key)}`);
      })
  }

//   const myList = document.querySelector('ul');
//   const myRequest = new Request('products.json');
//
//   fetch(myRequest)
// .then((response) => response.json())
// .then((data) => {
//   for (const product of data.products) {
//   const listItem = document.createElement('li');
//   listItem.appendChild(
//     document.createElement('strong')
// ).textContent = product.Name;
//   listItem.append(
// ` can be found in ${
//   product.Location
// }. Cost: `
// );
// listItem.appendChild(
// document.createElement('strong')
// ).textContent = `£${product.Price}`;
// myList.appendChild(listItem);
// }
// })
// .catch(console.error);



}
