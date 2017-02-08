import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormControl, AbstractControl} from '@angular/forms';
import {Router} from '@angular/router';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from "angularfire2";
import {UserService} from '../Services/userService';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  resumes$:FirebaseListObservable<any>;
  constructor(private af:AngularFire, public us:UserService, private route:Router) {
    this.resumes$ = this.us.fetchstudents();
    
  }

  ngOnInit() {
  }

  deleteResume(key){
    this.us.deleteResume(key)
  }

  navigate(){
    this.route.navigate(['admin'])
  }

}
