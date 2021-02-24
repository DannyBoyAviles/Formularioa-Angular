import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SidemenuComponent } from './sidemenu/sidemenu.component';



@NgModule({
  declarations: [
    SidemenuComponent
  ],
  imports: [
    CommonModule,
    RouterModule //si no se agrega no funcionan las ligas
  ],
  exports: [
    SidemenuComponent
  ]
})
export class SharedModule { }
