import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  userdata:any = {
    1000: { name:"ajay", accno: 1000, password: "userone", amount: 5000 },
    1001: { name:"vijay",accno: 1001, password: "usertwo", amount: 3000 },
    1002: { name:"sajay", accno: 1002, password: "userthree", amount: 1000 }
}
  constructor() { }

login(accno:any,pswd:any){
  let dataset = this.userdata
  if (accno in dataset){
    if (pswd == dataset[accno]["password"]){
      return true;
    }
    else{
      alert("Incorrect password")
      return false;
    }
  }
  else{
    alert("Incorrect account")
    return false;
  }
}






  register(name:any,accno:any,password:any){
    let dataset = this.userdata;
    if (accno in dataset) {
      //alert("Account already exists!!!!!! Please logged in") 
      return false;}
  
    else{
        this.userdata[accno]={
          name,
          accno,
          password,
          amount:0
        }
        //alert("Successfully Registered......")
        return true;
       }
    
  
  }
  deposit(accno:any,pswd:any,amt:any){
    var amount = parseInt(amt)
    let dataset=this.userdata;

    if (accno in dataset){
      if (pswd == dataset[accno]["password"]){
        dataset[accno]["amount"]+= amount
        return dataset[accno]["amount"]
      }
      else{
        alert("Invalid Password ")
        return false;
      }
  
    }
    else{
      alert("Invalid account")
      return false;
    }

  }
  withdraw(accno:any,pwd:any,amt:any){
    let dataset = this.userdata;
    var amount = parseInt(amt);
    if( accno in dataset){
      if (pwd ==  dataset[accno]["password"]){
        if (amount<dataset[accno]["amount"]){
          dataset[accno]["amount"]-= amount
          return dataset[accno]["amount"]
        }
        else{
          alert("insufficient balance")
          return false;
        }

       

      }
      else{
        
        alert("invalid password")
        return false;
      }
    }
    else{alert("invalid account")
    return false;}
  }
}
