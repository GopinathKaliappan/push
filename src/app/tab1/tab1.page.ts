import { Component } from '@angular/core';
// Custom Services
import { CalculationService } from '../services/calculation.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  calculation: any;
  numbers: any;
  selectedNumberIndex: any;
  constructor() {
    this.selectedNumberIndex = 0;
    this.calculation = new CalculationService();
  }
  ngOnInit() {
    this.numbers = this.calculation.getDynamicNumbers('plus', 18, 3);
    console.log(this.numbers);
  }
  checkAnswer(index){
      console.log(index);
      this.numbers[index]['choosen'] = this.numbers[index]['total'] === this.numbers[this.selectedNumberIndex]['total'];
  }
}
