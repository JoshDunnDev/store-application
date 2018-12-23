import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(items: any[], value: string, label: string, filterResultsData): any[] {
    if(!items) return [];
    if(!value) {
      filterResultsData.count = items.length;
      return items;

    } else {
      if (value == '' || value == null) return[];
      let filteredItems = items.filter(e => e[label].toLowerCase().indexOf(value) > -1);
  
      filterResultsData.count = filteredItems.length;
      return filteredItems;
    }

    
  }
}