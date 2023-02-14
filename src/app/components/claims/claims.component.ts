import { Component,OnInit } from '@angular/core';
import { claimsData } from 'src/app/models/claimsData';
import { DistributorsData } from 'src/app/models/distributorsData';

@Component({
  selector: 'app-claims',
  templateUrl: './claims.component.html',
  styleUrls: ['./claims.component.css']
})
export class ClaimsComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  dis:DistributorsData[];
  claims: claimsData[];


  constructor(){
    this.dis= [
      {branch: 11,distributerNo:"distributerNo 1",sapCode:11111111,schema:"aa1",region:"Egypt",type:"JNT",lastSendDate:' ',isChecked:false},
      {branch: 11,distributerNo:"distributerNo 1",sapCode:11111111,schema:"aa1",region:"Egypt",type:"JNT",lastSendDate:' ',isChecked:false},
      {branch: 11,distributerNo:"distributerNo 1",sapCode:11111111,schema:"aa1",region:"Egypt",type:"JNT",lastSendDate:' ',isChecked:false},
      {branch: 11,distributerNo:"distributerNo 1",sapCode:11111111,schema:"aa1",region:"Egypt",type:"JNT",lastSendDate:' ',isChecked:false},
      {branch: 11,distributerNo:"distributerNo 1",sapCode:11111111,schema:"aa1",region:"Egypt",type:"JNT",lastSendDate:' ',isChecked:false},
      {branch: 11,distributerNo:"distributerNo 1",sapCode:11111111,schema:"aa1",region:"Egypt",type:"JNT",lastSendDate:' ',isChecked:false},
      {branch: 11,distributerNo:"distributerNo 1",sapCode:11111111,schema:"aa1",region:"Egypt",type:"JNT",lastSendDate:' ',isChecked:false},
      {branch: 11,distributerNo:"distributerNo 1",sapCode:11111111,schema:"aa1",region:"Egypt",type:"JNT",lastSendDate:' ',isChecked:false},
      {branch: 11,distributerNo:"distributerNo 1",sapCode:11111111,schema:"aa1",region:"Egypt",type:"JNT",lastSendDate:' ',isChecked:false},
      {branch: 11,distributerNo:"distributerNo 1",sapCode:11111111,schema:"aa1",region:"Egypt",type:"JNT",lastSendDate:' ',isChecked:false},
      {branch: 11,distributerNo:"distributerNo 1",sapCode:11111111,schema:"aa1",region:"Egypt",type:"JNT",lastSendDate:' ',isChecked:false},
      {branch: 11,distributerNo:"distributerNo 1",sapCode:11111111,schema:"aa1",region:"Egypt",type:"JNT",lastSendDate:' ',isChecked:false},
      {branch: 11,distributerNo:"distributerNo 1",sapCode:11111111,schema:"aa1",region:"Egypt",type:"JNT",lastSendDate:' ',isChecked:false},
      {branch: 11,distributerNo:"distributerNo 1",sapCode:11111111,schema:"aa1",region:"Egypt",type:"JNT",lastSendDate:' ',isChecked:false},
      {branch: 11,distributerNo:"distributerNo 1",sapCode:11111111,schema:"aa1",region:"Egypt",type:"JNT",lastSendDate:' ',isChecked:false},
      {branch: 11,distributerNo:"distributerNo 1",sapCode:11111111,schema:"aa1",region:"Egypt",type:"JNT",lastSendDate:' ',isChecked:false},
      {branch: 11,distributerNo:"distributerNo 1",sapCode:11111111,schema:"aa1",region:"Egypt",type:"JNT",lastSendDate:' ',isChecked:false},
      {branch: 11,distributerNo:"distributerNo 1",sapCode:11111111,schema:"aa1",region:"Egypt",type:"JNT",lastSendDate:' ',isChecked:false},
      {branch: 11,distributerNo:"distributerNo 1",sapCode:11111111,schema:"aa1",region:"Egypt",type:"JNT",lastSendDate:' ',isChecked:false},
      {branch: 11,distributerNo:"distributerNo 1",sapCode:11111111,schema:"aa1",region:"Egypt",type:"JNT",lastSendDate:' ',isChecked:false},
    ];

   this.claims=[

   ];


  }


}
