import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
 
  

  registerForm=this.fb.group({
    uname:['',[Validators.required,Validators.pattern('[a-zA-z]*')]],
    accno:['',[Validators.required,Validators.pattern('[0-9]*')]],
    pswd:['',[Validators.required,Validators.pattern('[a-zA-z0-9]*')]]

  })

  constructor(private dataService:DataService,private router : Router,private fb:FormBuilder) { }

  ngOnInit(): void {
  }

register(){
  //alert("register clicked")
  // if(this.registerForm.get('uname')?.errors){
  //   alert("invalid username")
  // }

  var uname=this.registerForm.value.uname;
  var acno = this.registerForm.value.accno;
  var pwd = this.registerForm.value.pswd;
  console.log(uname,acno,pwd)
  
  if (this.registerForm.valid){
    const result = this.dataService.register(uname,acno,pwd)
    if (result){
        alert("Succesfully Registered .........")
        this.router.navigateByUrl("")
        
      }
    else{
      alert("Account already exists!!!!!! Please logged in")
    }
  }
  else{
    alert("invalid form")
  }
   

}
 
}
