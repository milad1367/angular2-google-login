import { Component,NgZone  } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {InfoComponent} from './info.component'; 
import {InfoProfile} from './infoProfile';

@Component({
   moduleId: module.id,
   selector: 'my-app',
   templateUrl: 'app.component.html',
   styleUrls: ['app.component.css']
})
export class AppComponent {
  infoProfile:InfoProfile = {name:'',email:''};
  fShowInfo = false;
  constructor(private zone: NgZone){}
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
    this.fShowInfo = true;
    var profile = googleUser.getBasicProfile();
       // console.log("ID: " + profile.getId()); // Don't send this directly to your server!
       // console.log('Full Name: ' + profile.getName());
       // console.log('Given Name: ' + profile.getGivenName());
       // console.log('Family Name: ' + profile.getFamilyName());
       // console.log("Image URL: " + profile.getImageUrl());
       // console.log("Email: " + profile.getEmail());
       this.zone.run(() => { this.infoProfile.name = profile.getName(),
                             this.infoProfile.email = profile.getEmail(),
                             console.log(profile)
                             
       })   
  };
  signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut();
    this.fShowInfo = false;
  }

}
