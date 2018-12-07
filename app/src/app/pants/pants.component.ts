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
