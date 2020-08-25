import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ImgserviceService {

  constructor(private http: HttpClient) { }

  getDog() {
    console.log("ENTER");
    return this.http.get('https://random.dog/woof.json');
  }

  getCat() {
    return this.http.get('https://aws.random.cat/meow');
  }

  getFox() {
    return this.http.get('https://randomfox.ca/floof/');
  }
}
