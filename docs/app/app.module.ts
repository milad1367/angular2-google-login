import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { RouterModule, Routes } from '@angular/router';
import {Component, Directive, Input, ViewChild,NgZone} from '@angular/core';

@NgModule({
  imports:      [ BrowserModule],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
