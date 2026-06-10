import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'salaryGrade',
})
export class SalaryGradePipe implements PipeTransform {

  transform(finalSalary: number): string {
    if (finalSalary >= 60000) {
      return 'Grade A';
    } else if (finalSalary >= 50000) {
      return 'Grade B';
    } else if (finalSalary >= 40000) {
      return 'Grade C';
    } else {
      return 'Grade D';
    }
  }

}
