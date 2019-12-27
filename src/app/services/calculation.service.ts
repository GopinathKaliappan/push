import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculationService {

    constructor() {
       this.getDynamicNumbers = this.getDynamicNumbers.bind(this);
    }

    getDynamicNumbers(sign, count, digit) {

        let realNumbers = [];
        let total = 0;

        for (var i=0; i< count; i++) {

            let signs = [];
            let dynamicNumbers = [];
            for(let j=0; j<digit; j++){
                let randomNumber = Math.random() * 10;
                dynamicNumbers.push(Math.round(randomNumber));
            }


            if(sign === 'plus') {
              total = dynamicNumbers.reduce((currentTotal, currentNumber) => currentTotal + currentNumber);
            } else if(sign === 'multiply') {
              total = dynamicNumbers.reduce((currentTotal, currentNumber) => currentTotal * currentNumber);
            } else if(sign === 'minus') {
              total = dynamicNumbers.reduce((currentTotal, currentNumber) => currentTotal - currentNumber);
            }

            realNumbers.push({
              dynamicNumbers,
              total,
              choosen: false
            })
        }
        return realNumbers;
     }
 }
