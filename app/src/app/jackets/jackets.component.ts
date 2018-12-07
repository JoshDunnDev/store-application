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
