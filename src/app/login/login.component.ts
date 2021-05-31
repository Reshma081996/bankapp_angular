import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  aim ="Your perfect banking partner"
  account ="Account Number Please"
  acno ="" //component class can be fetched using this keyword 
  pwd=""
  userdata:any = {
    1000: { accno: 1000, password: "userone", balance: 5000 },
    1001: { accno: 1001, password: "usertwo", balance: 5000 },
    1002: { accno: 1002, password: "userthree", balance: 5000 }
}

  constructor() { }

  ngOnInit(): void {
  }
  accChange(event:any){
    //console.log(event.target.value)
    this.acno = event.target.value
    console.log(this.acno);
  }
  pwdChange(event:any){
    this.pwd = event.target.value
    console.log(this.pwd);
  }
 login(a:any,p:any){
    console.log(a,p);
    var accno = a.value;
    var pswd = p.value ;
    console.log(accno,pswd);
    let dataset = this.userdata;
    if (accno in dataset) {
      if (pswd == dataset[accno]["password"]){
        alert("Succcessfully logged in")}
      else{
        alert("Incorrect password")}
   
       }
    else{
      alert("Invalid account")}  
  }
}


// #application view and component sync ai nikan vendii using databinding method
// data binding -1way binding(),2way binding   











