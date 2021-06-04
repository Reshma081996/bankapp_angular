import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  aim ="Your perfect banking partner"
  
  acno ="" //component class can be fetched using this keyword 
  pwd=""



  loginForm=this.fb.group({  
    acno:['',[Validators.required,Validators.pattern('[0-9]*')]],
    pwd:['',[Validators.required,Validators.pattern('[a-zA-z0-9]*')]]
  })


//   userdata:any = {
//     1000: { accno: 1000, password: "userone", balance: 5000 },
//     1001: { accno: 1001, password: "usertwo", balance: 5000 },
//     1002: { accno: 1002, password: "userthree", balance: 5000 }
// }

  constructor( private router:Router,private dataService:DataService,private fb:FormBuilder) { }

  ngOnInit(): void {
  }
  // accChange(event:any){
  //   //console.log(event.target.value)
  //   this.acno = event.target.value
  //   console.log(this.acno);
  // }
  // pwdChange(event:any){
  //   this.pwd = event.target.value
  //   console.log(this.pwd); 
  // }
 login(){
    //console.log(a,p);
    var accno = this.loginForm.value.acno;
    var pswd = this.loginForm.value.pwd ;
    console.log(accno,pswd);

    if (this.loginForm.valid){
      const result = this.dataService.login(accno,pswd);

      if (result){
        
        alert("Succcessfully logged in")
        this.router.navigateByUrl("dashboard")} 
    }
    else{
      alert("invalid form")
    }
    
  
   
  //   if (accno in dataset) {
  //     if (pswd == dataset[accno]["password"]){
  //       alert("Succcessfully logged in")
  //       this.router.navigateByUrl("dashboard")}
        
  //     else{
  //       alert("Incorrect password")}
   
  //      }
  //   else{
  //     alert("Invalid account")}  
  }

  register(){
    this.router.navigateByUrl("register");
  }
}


// #application view and component sync ai nikan vendii using databinding method
// data binding -1way binding(),2way binding   











