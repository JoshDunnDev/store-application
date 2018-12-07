import { Injectable } from '@angular/core';
import { Http } from '@angular/http';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private url = '../assets/mockup-data.JSON';

  constructor(private http: Http) { 
   
  }

  getProducts() {
    return this.http.get(this.url);
  }

}
