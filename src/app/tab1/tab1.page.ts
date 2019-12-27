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
  resultText: any;
  errorText: any;

  constructor() {
    this.selectedNumberIndex = 0;
    this.totalNumberPairs = 3;
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
    this.selectedNumberIndex = Math.round(Math.random()* (this.numbers.filter(num=> num.choosen !== true).length -1));
    this.changeToAbs('selectedNumberIndex');
  }

  changeNumber() {
    if(this.numbers.filter(item=> item.choosen).length === this.numbers.length) {
      return false;
    }
    this.selectedNumberIndex = Math.round(Math.random() * this.totalNumberPairs - 1 );
    this.changeToAbs('selectedNumberIndex');
    do {
        this.selectedNumberIndex = Math.round(Math.random() * this.totalNumberPairs) -1;
        this.changeToAbs('selectedNumberIndex');
        console.log(this.selectedNumberIndex);
    }

    while(this.numbers[this.selectedNumberIndex].choosen);
  }

  changeToAbs(key) {
    this[key] = Math.abs(this[key]);
  }

  checkAnswer(index){
      this.numbers[index]['choosen'] = this.numbers[index]['total'] === this.numbers[this.selectedNumberIndex]['total'];
      if(this.numbers[index]['choosen']) {
        this.resultText = 'Great!';
        setTimeout(()=> {
          this.changeNumber();
          this.resultText = '';
        }, 3000);

      } else {
        console.log("Wrong Answer");
        this.errorText = 'Try Again';
        setTimeout(()=> {
          this.errorText = '';
        }, 3000);
      }
  }
}
