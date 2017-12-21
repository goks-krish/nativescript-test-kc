import { Component } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import "rxjs/add/operator/map";

@Component({
  selector: "my-app",
  templateUrl:'./app.component.html'
})
export class AppComponent {
  // Your TypeScript logic goes here
  items: any = null;
  url: string = "https://www.kannammacooks.com/wp-json/wp/v2/posts?_embed&per_page=20"; 

  constructor(private http: Http) {
    console.log("Hello Gokul");
    
    this.http.get( this.url )
    .map(res => res.json())
    .subscribe(data => {
      this.items = data;
    });
    console.dir(this.items);
  }
}
