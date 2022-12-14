import { Component, OnInit, EventEmitter,Output } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { Quote} from '../quote';


@Component({
  selector: 'app-form-quotes',
  templateUrl: './form-quotes.component.html',
  styleUrls: ['./form-quotes.component.css']
})
export class FormQuotesComponent implements OnInit {
   place = 'Next'
  dateObj = new Date;
  
   newQuote = new Quote();
   @Output() addQuote = new EventEmitter<Quote>();

  onSubmit(){
    this.addQuote.emit(this.newQuote);
      }
 
  
  constructor() { }

  ngOnInit(): void {
  }

}
