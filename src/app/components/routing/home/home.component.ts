import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { from } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  myRegFormValidation = new FormGroup({
    name: new FormControl("amira",Validators.required),
    age:new FormControl(0,[Validators.min(20), Validators.max(40),Validators.nullValidator]),
    email:new FormControl("",Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g))

  })
  get NameValid(){

    return this.myRegFormValidation.controls.name.valid;
  }
  get AgeValid(){

    return this.myRegFormValidation.controls.age.valid;
  }
  get EmailValid(){

    return this.myRegFormValidation.controls.email.valid;
  }
  sendData(){
    console.log(this.myRegFormValidation);
    if(this.myRegFormValidation.valid){
      // console.log("true")
    }
  }
}
