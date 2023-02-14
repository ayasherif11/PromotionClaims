import { Component ,OnInit } from '@angular/core';
import { ConditionTypesData } from 'src/app/models/conditionTypes';

@Component({
  selector: 'app-condition-type',
  templateUrl: './condition-type.component.html',
  styleUrls: ['./condition-type.component.css']
})
export class ConditionTypeComponent implements OnInit{
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  conType: ConditionTypesData[];


  constructor() {
    this.conType = [
      { scenario: 11, description: "desc 1", conditionType: "A12", onInvoice: true },
      { scenario: 13, description: "desc 2", conditionType: "B7", onInvoice: false },
      { scenario: 53, description: "desc 3", conditionType: "Y77", onInvoice: true },
      { scenario: 80, description: "desc 4", conditionType: "I88", onInvoice: false },
      { scenario: 33, description: "desc 5", conditionType: "O76", onInvoice: false },
      { scenario: 27, description: "desc 6", conditionType: "A23", onInvoice: true },

    ];
  }

}
