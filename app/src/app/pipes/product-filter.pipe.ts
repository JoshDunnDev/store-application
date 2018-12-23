import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'productFilter',
  pure: false
})
export class ProductFilterPipe implements PipeTransform {

  transform(products: any[], filter: any, filterResultsData?: any): any {
    if (!products || !filter) {
        return products;
    }
    // filter items array, items which match and return true will be
    // kept, false will be filtered out

    let filteredProducts = products.filter(product => product.category.indexOf(filter.category) !== -1);
    if (filterResultsData)
      filterResultsData.count = filteredProducts.length;
    return filteredProducts;
  }

}
