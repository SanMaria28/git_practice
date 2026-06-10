import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'finalPrice',
})
export class FinalPricePipe implements PipeTransform {

  transform(price: number, discount: number): number{
    return price - (price * discount);
  } 
    
  

}
