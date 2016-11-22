import { Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Router } from '@angular/router';

export class Hero {
  name:string;
  email:string;
}

@Component({
  selector: 'my-app',
  template: `
  <div  id="my-signin2" (data-onsuccess)="onSignIn"></div>
   <router-outlet></router-outlet>
   <li *ngFor="let hero of heroes">
        {{hero.name}}
   </li>
  `
})
export class AppComponent   {
 heroes :Hero[] = [{name:'mm',email:'mmm'}] ;
constructor(private router: Router){}

 ngAfterViewInit() {
    gapi.signin2.render('my-signin2', {
        'scope': 'profile email',
        'width': 240,
        'height': 50,
        'longtitle': true,
        'theme': 'light',
        'onsuccess': param => this.onSignIn(param)
    });

}

  onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
        console.log("ID: " + profile.getId()); // Don't send this directly to your server!
        console.log('Full Name: ' + profile.getName());
        console.log('Given Name: ' + profile.getGivenName());
        console.log('Family Name: ' + profile.getFamilyName());
        console.log("Image URL: " + profile.getImageUrl());
        console.log("Email: " + profile.getEmail());
        this.addHero({name:profile.getName(),email:profile.getEmail()});
        console.log(this.heroes);
       // this.goHome();       
  };

  addHero(hero: Hero){
  if(hero.name){
    this.heroes.push(hero);
    }
  }

  goHome() {
    
    this.router.navigate(['login']);
    
  }

}
