import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'discountBadge',
})
export class DiscountBadgePipe implements PipeTransform {

  transform(discount: number):string {
    if(discount >= 0.35){
      return "HotDeal Offer";
    } 
    else if(discount >= 0.15){
      return "Special Offer";
    } 
    else {
      return "No Offer";
    }
  }
}
