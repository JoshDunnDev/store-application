import { Component, OnInit } from '@angular/core';
import { ProductsService } from './../services/products.service';

@Component({
  selector: 'app-jackets',
  templateUrl: './jackets.component.html',
  styleUrls: ['./jackets.component.css']
})
export class JacketsComponent implements OnInit {

  filterargs = {category: 'jackets'};
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

  autoCloseDropdown(event) {
    let target = event.target;
    if (!target.closest(".dropdown-menu")) { 
      this.toggleHide = false;
    }
  }

}
