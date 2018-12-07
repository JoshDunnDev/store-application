import { ProductsService } from './../services/products.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shorts',
  templateUrl: './shorts.component.html',
  styleUrls: ['./shorts.component.css']
})
export class ShortsComponent implements OnInit {


  filterargs = {category: 'shorts'};
  products: any[];
  filterResultsData = { count: 0 };

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
}
