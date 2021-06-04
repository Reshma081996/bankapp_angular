import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
//  acno ="";
//  pwd="";
//  amt="";

//  wacno ="";
//  wpwd="";
//  wamt="";

user=this.dataService.currentuser

depositForm=this.fb.group({

  acno:['',[Validators.required,Validators.pattern('[0-9]*')]],
  pwd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]],
  amt:['',[Validators.required,Validators.pattern('[0-9]*')]]

})

withdrawForm=this.fb.group({

  wacno:['',[Validators.required,Validators.pattern('[0-9]*')]],
  wpwd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]],
  wamt:['',[Validators.required,Validators.pattern('[0-9]*')]]

})

  constructor(private dataService:DataService,private fb:FormBuilder) { }

  ngOnInit(): void {
  }
 deposit(){
   var accno=this.depositForm.value.acno;
   var pswd = this.depositForm.value.pwd;
   var amt = this.depositForm.value.amt;

   console.log(accno,pswd,amt)
   if (this.depositForm.valid){
    const  result  = this.dataService.deposit(accno,pswd,amt)
    if (result){
      alert("Amount "+amt+"deposited succesfully and new balance: "+result);}
    
  }
   else{
     alert("Invalid Form")
   }
   
 }

 withdraw(){
  var accno=this.withdrawForm.value.wacno;
  var pwd =this.withdrawForm.value.wpwd;
  var amt = this.withdrawForm.value.wamt;
  console.log(accno,pwd,amt)
  if (this.withdrawForm.valid){
    const result = this.dataService.withdraw(accno,pwd,amt);

    if(result){
      alert("Amount "+amt+" is withdrawn successfully and available balance: "+result)
    }

  }
  else{alert("Invalid Form")}
  
 }
}
