import { Component } from '@angular/core';
import {UserService} from './Services/userService';
import {AngularFire} from 'angularfire2';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  flag:boolean;
  fullname:string;
  constructor(private us:UserService, private af:AngularFire){
    this.af.auth.subscribe(user=>{
      if(user !==null){
        this.flag = true;
        this.af.database.object('accounts/' + user.uid).subscribe(x=>{
          this.fullname = x.fullname;
        })
      }
      else{
        this.flag= false;
      }
    })
  }

  logOut(){
    this.us.logOut();
    this.fullname='';
  }
}
