import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'productFilter',
  pure: false
})
export class ProductFilterPipe implements PipeTransform {

  transform(products: any[], filter: any, filterResultsData): any {
    if (!products || !filter) {
        return products;
    }
    // filter items array, items which match and return true will be
    // kept, false will be filtered out

    let filterdProducts = products.filter(product => product.category.indexOf(filter.category) !== -1);
    filterResultsData.count = filterdProducts.length;
    return filterdProducts;
  }

}
