import { Component } from '@angular/core';
export class Hero {
  name:string;
  email:string;
}
@Component({
  selector: 'my-info',
  template:`
  <h1> {{hero.name}} </h1>

  `
})


export class InfoComponent   {
hero:Hero = {name:'',email:''};
 

	infoUpdate(hero:Hero){
       this.hero = hero;
	}
	test(){
	  console.log("yeeeeeeeeeees");
	}
}