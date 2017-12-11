import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Test1Component } from './component/test1/test1.component';
import { Test2Component } from './component/test2/test2.component';

export const routes: Routes = [
  { path: 'test1',  component: Test1Component },
  { path: 'test2',  component: Test2Component }
];