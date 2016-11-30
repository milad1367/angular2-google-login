import { Component,NgZone  } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {InfoComponent} from './info.component' 

export class Hero {
  name:string;
  email:string;
}

@Component({
  selector: 'my-app',
  template: `
  <div>
    <div  id="my-signin2" (data-onsuccess)="onSignIn"></div>  
  </div>
  <a href="#" (click)="signOut()">Sign out</a>

  <div *ngIf="t">
     {{userDisplayName}}
     {{userEmailAddres}}
  </div>
  

  `
})
export class AppComponent {
   heroes :Hero[] = [{name:'mm',email:'mmm'}] ;
   hero:Hero = {name:'',email:''};
   userDisplayName = "";
   userEmailAddres = "";
   t = false;
 constructor(private zone: NgZone){
   console.log(this);
 }


 ngAfterViewInit() {
    gapi.signin2.render('my-signin2', {    
        'onsuccess': param => this.onSignIn(param),
        'scope': 'profile email',
        'width': 240,
        'height': 50,
        'longtitle': true,
        'theme': 'light'
        
    });

}
  onSignIn(googleUser) {
    this.t = true;
    var profile = googleUser.getBasicProfile();
       // console.log("ID: " + profile.getId()); // Don't send this directly to your server!
       // console.log('Full Name: ' + profile.getName());
       // console.log('Given Name: ' + profile.getGivenName());
       // console.log('Family Name: ' + profile.getFamilyName());
       // console.log("Image URL: " + profile.getImageUrl());
       // console.log("Email: " + profile.getEmail());
       this.zone.run(() => { this.userDisplayName = profile.getName(),
                             this.userEmailAddres = profile.getEmail(),
                             console.log(profile)
                             
       })   
  };
   signOut() {
     var auth2 = gapi.auth2.getAuthInstance();
     auth2.signOut();
     this.t = false;
  }


  addHero(hero: Hero){
     if(hero.name){
     this.heroes.push(hero);
    }
  }


}
