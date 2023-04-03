import {Component, Injectable, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Injectable()
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  title = 'natashop-admin';


  constructor(public router: Router) {}

  ngOnInit() {
  }

}

