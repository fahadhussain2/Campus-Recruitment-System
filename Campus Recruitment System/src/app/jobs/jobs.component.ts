import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from "angularfire2";
import { UserService } from '../Services/userService';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {

  jobs$: FirebaseListObservable<any>;
  
  constructor(private us: UserService,private af : AngularFire, private route:Router) {
    //   this.us.fetchjobs().subscribe((x)=>{
    // this.jobs.push(x)
    //   })
    // this.jobs = this.us.fetchjobs();
    
     this.jobs$ = this.us.fetchjobs();
     
  }

  ngOnInit() {
  }

  deleteCompany(key){
    this.us.deleteCompany(key);
  }

  navigate(){
    this.route.navigate(['admin'])
  }

}
