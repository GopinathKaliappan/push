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
  totalNumberPairs: any;
  digit: any;
  sign: any;

  constructor() {
    this.selectedNumberIndex = 0;
    this.totalNumberPairs = 18;
    this.digit = 3;
    this.sign = 'plus';

    this.calculation = new CalculationService();
  }
  ngOnInit() {
    this.numbers = this.calculation.getDynamicNumbers(
      this.sign,
      this.totalNumberPairs,
      this.digit
    );
    this.selectedNumberIndex = Math.round(Math.random()* (this.numbers.filter(num=> num.choosen !== true).length));
  }

  changeNumber() {
    this.selectedNumberIndex = Math.round(Math.random() * this.totalNumberPairs);
    do {
        this.selectedNumberIndex = Math.round(Math.random() * this.totalNumberPairs);
        console.log(this.selectedNumberIndex);
    }
    while(this.numbers[this.selectedNumberIndex].choosen);
  }

  checkAnswer(index){
      this.numbers[index]['choosen'] = this.numbers[index]['total'] === this.numbers[this.selectedNumberIndex]['total'];
      if(this.numbers[index]['choosen']) {
        this.changeNumber()
      } else {
        console.log("Wrong Answer");
      }
  }
}
