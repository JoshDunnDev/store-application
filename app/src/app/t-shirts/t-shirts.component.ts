import { ProductsService } from './../services/products.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-t-shirts',
  templateUrl: './t-shirts.component.html',
  styleUrls: ['./t-shirts.component.css']
})
export class TShirtsComponent implements OnInit {

  filterargs = {category: 'shirts'};
  products: any[];
  filterResultsData = { count: 0 };
  toggleHide = false;

  constructor(private service: ProductsService) { 
   
  }

  ngOnInit() {
    this.service.getProducts()
      .subscribe(
        response => {
          this.products = response.json();
        }, 
        error => {
          alert('An unexpected error occurred.')
          console.log(error);
        });
  }

  sortByLow() {
    this.products.sort((a, b) => {
      if (a.price < b.price) return -1;
      else if (a.price > b.price) return 1;
      else return 0;
    });
    this.toggleHide = false;
  }

  sortByHigh() {
    this.products.sort((a, b) => {
      if (a.price < b.price) return 1;
      else if (a.price > b.price) return -1;
      else return 0;
    });
    this.toggleHide = false;
  }

  defaultList() {
    this.service.getProducts()
    .subscribe(
      response => {
        this.products = response.json();
      }, 
      error => {
        alert('An unexpected error occurred.')
        console.log(error);
      });
    this.toggleHide = false;
  }

}
