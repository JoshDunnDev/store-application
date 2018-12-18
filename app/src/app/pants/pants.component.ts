import { ProductsService } from './../services/products.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pants',
  templateUrl: './pants.component.html',
  styleUrls: ['./pants.component.css']
})
export class PantsComponent implements OnInit {

  filterargs = {category: 'pants'};
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
