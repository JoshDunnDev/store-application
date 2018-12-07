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
