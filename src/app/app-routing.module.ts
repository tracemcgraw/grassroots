import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import {ProductsComponent} from './products/products.component';
import {AboutComponent} from './about/about.component';
import { HomeComponent } from './home/home.component';

const routes:Routes=[
  {path:'products', component:ProductsComponent},
  {path:'about', component:AboutComponent},
  {path:'home', component:HomeComponent}
]

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}