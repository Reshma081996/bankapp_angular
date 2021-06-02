import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
 acno ="";
 pwd="";
 amt="";

 wacno ="";
 wpwd="";
 wamt="";
  constructor(private dataService:DataService) { }

  ngOnInit(): void {
  }
 deposit(){
   var accno=this.acno;
   var pswd = this.pwd;
   var amt = this.amt
   console.log(accno,pswd,amt)
   const  result  = this.dataService.deposit(accno,pswd,amt)
   if (result){
     alert("Amount "+amt+"deposited succesfully and new balance: "+result);}
   
 }

 withdraw(){
  var accno=this.wacno;
  var pwd =this.wpwd;
  var amt = this.wamt;
  console.log(accno,pwd,amt)
  const result = this.dataService.withdraw(accno,pwd,amt);
  if(result){
    alert("Amount "+amt+" is withdrawn successfully and available balance: "+result)
  }

 }
}
