import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormControl, AbstractControl} from '@angular/forms';
import {Router} from '@angular/router';
import { AngularFire } from "angularfire2";
import {UserService} from '../Services/userService';

@Component({
  selector: 'app-addcompany',
  templateUrl: './addcompany.component.html',
  styleUrls: ['./addcompany.component.css']
})
export class AddcompanyComponent implements OnInit {
  myForm;
  //uid;
  constructor(private fb:FormBuilder, public us:UserService, private af:AngularFire) {
    this.myForm = fb.group({
      'JobTitle': ['', Validators.required],
      'JobDescription': ['', Validators.required],
      'Salary': ['', Validators.required],
      'JobType': ['', Validators.required],
    })
    //  this.af.auth.subscribe((auth)=>{
    //   if (auth !== null){
    //     this.uid=auth.uid;
    //   }
    //  })
   
  }

  postJob(){
   this.us.addCompany(this.myForm.value);
  }

  ngOnInit() {
  }

}
