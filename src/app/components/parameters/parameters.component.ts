import { Component,OnInit } from '@angular/core';
import { ParmData } from 'src/app/models/parmetersData';

@Component({
  selector: 'app-parameters',
  templateUrl: './parameters.component.html',
  styleUrls: ['./parameters.component.css']
})
export class ParametersComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  prmList: ParmData[];

  constructor() {
    this.prmList = [
      { code: '01', description: ' description 1', value: 112311 },
      { code: 'c7', description: ' description 2', value: 12345 },
      { code: '90', description: ' description 3', value: 112311 },
      { code: '111', description: ' description 4', value: 98765 },
      { code: '50', description: ' description 5', value: 12 },
    ];
  }


}
