import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

  miFormulario: FormGroup = new FormGroup({
    nombre      : new FormControl('Ipad Air'),
    precio      : new FormControl(1500),
    existencias : new FormControl(5)
  })

  constructor() { }

}

/*
para asociar la propiedad del formularioa al input HTML se le debe de colocar la linea formControlName="nombre.propiedad"
*/