import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import {ProductsComponent} from './products/products.component';
import {AboutComponent} from './about/about.component';
import{AppComponent} from './app.component'

const routes:Routes=[
  {path:'products', component:ProductsComponent},
  {path:'about', component:AboutComponent},
  {path:'home', component:AppComponent}
]

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}