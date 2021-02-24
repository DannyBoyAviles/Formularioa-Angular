import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemplateRoutingModule } from './template-routing.module';
import { BasicosComponent } from './basicos/basicos.component';
import { DinamicosComponent } from './dinamicos/dinamicos.component';
import { SwitchesComponent } from './switches/switches.component';
import { FormsModule } from '@angular/forms';
import { CustomMinDirective } from './directives/custom-min.directive';


@NgModule({
  declarations: [
    BasicosComponent, 
    DinamicosComponent, 
    SwitchesComponent,
    CustomMinDirective //no se importa la directivoa solo se declara
  ],
  imports: [
    CommonModule,
    FormsModule, //angular toma el control de los formularios
    TemplateRoutingModule
  ]
})
export class TemplateModule { }
