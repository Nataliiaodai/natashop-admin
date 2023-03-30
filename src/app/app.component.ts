import {Component, Injectable} from '@angular/core';
import {Router} from "@angular/router";

@Injectable()
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'natashop-admin';
  currentURL: string = this.router.url;

  constructor(public router: Router) {}

}

