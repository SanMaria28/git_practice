import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'finalSalary',
})
export class FinalSalaryPipe implements PipeTransform {

  transform(basicSalary: number, bonus: number): number {
    return basicSalary + (basicSalary * bonus); 
  }

}
