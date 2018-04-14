import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'FilterPipe'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, name: string, price: number) {
        if (name) {
            name = name.toLowerCase();
            return value.filter( item =>
                item.name.toLowerCase().indexOf(name) > -1
            );
        } else if(price) {
            return value.filter( item =>
                item.price > price
            );
        }
        return value;
    }
}
