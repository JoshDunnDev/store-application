import { Component, OnInit } from '@angular/core';
import { ProductsService } from './../services/products.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  private sub: any;
  searchText: string;

  filterargs = {category: ''};
  products: any[];
  filterResultsData = { count: 0 };
  toggleHide = false;

  constructor(private service: ProductsService, private route: ActivatedRoute) { 
   
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

        this.sub = this.route.params.subscribe(params => {
          this.searchText = params.searchText;
   
          // In a real app: dispatch action to load the details here.
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
