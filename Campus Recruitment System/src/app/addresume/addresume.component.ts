import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormControl, AbstractControl} from '@angular/forms';
import {Router} from '@angular/router';
import { AngularFire } from "angularfire2";
import {UserService} from '../Services/userService';

@Component({
  selector: 'app-addresume',
  templateUrl: './addresume.component.html',
  styleUrls: ['./addresume.component.css']
})
export class AddresumeComponent implements OnInit {

  userForm: FormGroup;
  uid;

  constructor(private _formBuilder:FormBuilder, public us:UserService, private af:AngularFire ) {
    this.userForm=_formBuilder.group({
      education:['',Validators.required],
      year:['',Validators.required],
      Cgpa:['',Validators.required],
      skills:['', Validators.required],
      experience:['',Validators.required],
      description:['',Validators.required]
    })

    this.af.auth.subscribe((auth)=>{
      if (auth !== null){
        this.uid=auth.uid;
      }
    })
  
  }

  addResume(){
    this.us.addResume(this.userForm.value, this.uid);
  }


  ngOnInit() {
  }

}
