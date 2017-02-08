import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormControl, AbstractControl} from '@angular/forms';
import {Router} from '@angular/router';
import {UserService} from '../Services/userService';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userForm: FormGroup;

  constructor(private _route:Router, private _formBuilder:FormBuilder, public us:UserService) {
    this.userForm= this._formBuilder.group({ 
     email:[null,[Validators.pattern('^[a-z]+[a-z0-9._]+@[a-z]+\.[a-z.]{4,13}$'),Validators.required]],
     password:['', Validators.required]
    })
  }

  login(){
    this.us.loginUser(this.userForm.value);
  }


  ngOnInit() {
  }

}

