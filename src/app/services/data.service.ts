import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  currentuser=""
  currentacc=""
  userdata:any = {
    1000: { name:"ajay", accno: 1000, password: "userone", amount: 5000 },
    1001: { name:"vijay",accno: 1001, password: "usertwo", amount: 3000 },
    1002: { name:"sajay", accno: 1002, password: "userthree", amount: 1000 }
}
  constructor() {

    this.getDetails();

   }

// store permanent data from database and login currentuser  to local stoage, savedetail func is created
saveDetails(){
  
    localStorage.setItem("userdata",JSON.stringify(this.userdata))
   
  
  if (this.currentuser){
    localStorage.setItem("currentuser",JSON.stringify(this.currentuser))
    }
  if (this.currentacc){
    localStorage.setItem("currentacc",JSON.stringify(this.currentacc))
  }
}
  
//get data from localstorage
getDetails(){
  if (localStorage.getItem("userdata")){
    this.userdata=JSON.parse(localStorage.getItem("userdata") || '')
  }
  if (localStorage.getItem("currentuser")){
    this.currentuser =JSON.parse(localStorage.getItem("currentuser") || '')
    }
  if (localStorage.getItem("currentacc")){
  this.currentacc =JSON.parse(localStorage.getItem("currentacc") || '')}

}

deleteAccDetails(acno:any){
  if (this.currentacc == acno )
  {
    localStorage.removeItem("currentacc")
    this.saveDetails()
    return true
  
  }
  else{
    return false
  }


}

  login(accno:any,pswd:any){
    let dataset = this.userdata
    if (accno in dataset){
      if (pswd == dataset[accno]["password"]){
        this.currentuser = dataset[accno]["name"] 
        this.currentacc = accno
        this.saveDetails();
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
        this.saveDetails();
        return true;
       }
    
  
  }
  deposit(accno:any,pswd:any,amt:any){
    var amount = parseInt(amt)
    let dataset=this.userdata;

    if (accno in dataset){
      if (pswd == dataset[accno]["password"]){
        dataset[accno]["amount"]+= amount
        this.saveDetails();
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
          this.saveDetails();
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
