import { Component } from '@angular/core';
import { ImgserviceService } from "./imgservice.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'animalFarm';
  dogs : any = [];
  cats : any = [];
  fox : any = [];

  constructor(private imgServ: ImgserviceService) {
  }

  ngOnInit() {
    for(let i=0; i<4; i++){
      this.receiveDogs();
      this.receiveCats();
      this.receiveFox();
    }
  }

  receiveDogs() {
    return this.imgServ.getDog().subscribe((response: any) => {
      if(this.dogs.indexOf(response.url) < 0){
        this.dogs.push(response.url);
      }
      console.log(this.dogs);
    }, (error) => {
      console.log(error);
    });
  }

  receiveCats() {
    return this.imgServ.getCat().subscribe((response: any) => {
      if(this.dogs.indexOf(response.url) < 0){
        this.cats.push(response.file);
      }
      console.log(this.cats);
    }, (error) => {
      console.log(error);
    });
  }

  receiveFox() {
    return this.imgServ.getFox().subscribe((response: any) => {
      if(this.dogs.indexOf(response.url) < 0){
        this.fox.push(response.image);
      }
      console.log(this.fox);
    }, (error) => {
      console.log(error);
    });
  }

  onScroll() {
    for(let i=0; i<4; i++){
      this.receiveDogs();
      this.receiveCats();
      this.receiveFox();
    }
  }

}
