import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, pipe} from "rxjs";
import {Product} from "./model/product";



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
  title = 'natashop-admin';
  productArray = [];
  prod : Product = new Product();

  constructor(private http: HttpClient) {
  }


  ngOnInit() {
    this.fetchProduct();
  }

  onProductCreate(form: any) {
    let product: Product = form.value;
    this.http.post('http://localhost:3000/products', product)
      .subscribe((responseData) => {
        console.log(responseData);
        console.log(responseData["_id"]);
        console.log(responseData["price"]);
        console.log(responseData["note"]);

        this.prod.price = responseData["price"];
        this.prod.note = responseData["note"];
        this.prod._id = responseData["_id"];
        console.log(this.prod);

        form.value.note = "some value";
      });

  }


  private fetchProduct () {
    this.http
      .get<{ [key: string]: Product }>(
        'http://localhost:3000/products/4720'
      )
      .pipe(map (responseData => {
        const productArray: Product [] = [];
        for (const key in responseData) {
          if (responseData. hasOwnProperty (key) ) {
            productArray.push (responseData [key]);
          }
        }

          return productArray;
  })
  )
        .subscribe (responseData => {
            console. log (responseData);
          });

}



}

