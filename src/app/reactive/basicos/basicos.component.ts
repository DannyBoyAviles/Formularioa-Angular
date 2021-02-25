import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

  // miFormulario: FormGroup = new FormGroup({
  //   nombre      : new FormControl('Ipad Air'),
  //   precio      : new FormControl(1500),
  //   existencias : new FormControl(5)
  // })

    miFormulario: FormGroup = this.fb.group({
      nombre:['iPad'],
      precio:[0],
      existencias:[0],
    })


  constructor(private fb: FormBuilder) { }

}

/*
para asociar la propiedad del formularioa al input HTML se le debe de colocar la linea formControlName="nombre.propiedad"
*/