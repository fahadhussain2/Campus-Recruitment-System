import {Injectable} from '@angular/core';
import {AngularFire} from 'angularfire2';
import { AngularFireModule, AuthProviders, AuthMethods, FirebaseAuthState, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import {Router} from '@angular/router';
 
@Injectable()

export class UserService{
    resume: FirebaseObjectObservable<any>;
    company: FirebaseListObservable<any>;
    jobs: FirebaseListObservable<any>;
    constructor(private af:AngularFire, public route:Router){
        this.fetchjobs();
    }
    
    createUser(userObj){
        let self=this;
        this.af.auth.createUser({
            email:userObj.email,
            password:userObj.passwordfields.pass
        }).then(function (data){
            //console.log('success',data);
            self.af.database.object('accounts/'+ data.uid).set(userObj);
            data.auth.updateProfile({displayName: userObj.fullname, photoURL:"photo"})
            if(userObj.accounttype == 'Student'){
                self.route.navigate(['addresume'])
            }
            else{
                self.route.navigate(['addcompany']);
            }
        
        }).catch(function (err){
            console.log("error",err)
        })
         
    }

    loginUser(userObj){
        let self=this;
        this.af.auth.login(
        {email: userObj.email,password:userObj.password},
        {provider: AuthProviders.Password, method: AuthMethods.Password})
        .then(function(data){
            //console.log('success',data);
            self.af.database.object('accounts/' + data.uid).subscribe( id => {
            if(id.accounttype == 'Student'){
                self.route.navigate(['addresume'])
            }
            else if (id.accounttype == 'Company'){
                self.route.navigate(['addcompany'])
            }

            else if(id.accounttype == 'admin'){
                self.route.navigate(['admin'])
            }
            })
            
        }).catch(function(err){
            console.log('error',err)
        })
    }

    logOut(){
        this.af.auth.logout();
        this.route.navigate(['login']);
    }
    addResume(resume, uid){
        this.resume= this.af.database.object('resume/' + uid)
        this.resume.set(resume);
    }

    addCompany(company){
        this.company= this.af.database.list('company/');
        this.company.push(company);
    }

    fetchjobs(){
        return this.af.database.list('company')
    }

    fetchstudents(){
        return this.af.database.list('resume')
    }

    deleteResume(key){
        this.af.database.object('resume/' + key).remove();
        
    }

    deleteCompany(key){
        this.af.database.object('company/' + key).remove();
       
    }   
}