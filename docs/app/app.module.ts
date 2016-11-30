import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { InfoComponent }   from './info.component';
import { RouterModule, Routes } from '@angular/router';
import {Component, Directive, Input, ViewChild,NgZone} from '@angular/core';

@NgModule({
  imports:      [ BrowserModule,
  RouterModule.forRoot([
  {
    path: 'login',
    component: InfoComponent
  }
])
],
  declarations: [ AppComponent,InfoComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
