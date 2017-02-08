import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl, AbstractControl} from '@angular/forms';
import {UserService} from'../Services/userService';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],

})
export class SignupComponent implements OnInit {

  userForm: FormGroup;4
  

  constructor(private us:UserService, private _formBuilder:FormBuilder) {
    this.userForm= this._formBuilder.group({ 
     fullname:[null, [Validators.required, Validators.minLength(5), Validators.maxLength(10)]],
     email:[null,[Validators.pattern('^[a-z]+[a-z0-9._]+@[a-z]+\.[a-z.]{4,13}$'),Validators.required]],
     passwordfields: this._formBuilder.group ({
        pass:['', passvalidator],
        cpass:['',Validators.compose([Validators.required])],
     }, {validator: matchingPasswords('pass', 'cpass')}
     ),
     accounttype: ['', Validators.required],
    })
  }

  signUp(){
    this.us.createUser(this.userForm.value)
    console.log(this.userForm.value);
  }

  ngOnInit() {
  }

}

function passvalidator(control: FormControl):{ [s: string] : boolean }{                          // custom validation function for password
   if ( ! control.value.match(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/ )){
     return {invalidPassword: true}
   }
 }


function matchingPasswords(passwordKey: string, confirmPasswordKey:string) {                // custom validation function for password and confirm password
  return (group: FormGroup): {[key: string]: any} => {
    let password = group.controls[passwordKey];
    let confirmPassword = group.controls[confirmPasswordKey];

    if (password.value !== confirmPassword.value) {
      return {mismatchedPasswords: true}
    }
  }
}