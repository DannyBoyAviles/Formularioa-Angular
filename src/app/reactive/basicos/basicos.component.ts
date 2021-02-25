import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

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
      nombre      :[ '', [Validators.required, Validators.minLength(3)]],
      precio      :[ 0, [Validators.required, Validators.min(0)] ],
      existencias :[ 0, [Validators.required, Validators.min(0)] ],
    })


  constructor(private fb: FormBuilder) { }

  campoEsValido(campo:string){
    return this.miFormulario.controls[campo].errors &&
            this.miFormulario.controls[campo].touched
  }
}

/*
para asociar la propiedad del formularioa al input HTML se le debe de colocar la linea formControlName="nombre.propiedad"
FormBuilder
nombre      :[ valor, validadores sincronos, validadores asincronos ],
*/