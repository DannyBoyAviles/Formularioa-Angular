import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit{

  // miFormulario: FormGroup = new FormGroup({
  //   nombre      : new FormControl('Ipad Air'),
  //   precio      : new FormControl(1500),
  //   existencias : new FormControl(5)
  // })

    miFormulario: FormGroup = this.fb.group({
      nombre      :[ '', [Validators.required, Validators.minLength(3)]],
      precio      :[ , [Validators.required, Validators.min(0)] ],
      existencias :[ , [Validators.required, Validators.min(0)] ],
    })


  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    //enviando valores predefinidos al cargar el formulario
    // this.miFormulario.setValue({ //
    this.miFormulario.reset({
      nombre: 'iPad Air',
      precio: 16500
    })    
  }

  campoEsValido(campo:string){
    return this.miFormulario.controls[campo].errors &&
            this.miFormulario.controls[campo].touched
  }

  guardar(){
    if (this.miFormulario.invalid) {
      this.miFormulario.markAllAsTouched();//marcar todos los campos como tocados, ppor la condicion que tenemos "campoEsValido()" automaticamente muestra los mensajes
      return;
    }
    console.log(this.miFormulario.value);
    this.miFormulario.reset();
  }

}

/*
para asociar la propiedad del formularioa al input HTML se le debe de colocar la linea formControlName="nombre.propiedad"
FormBuilder
nombre      :[ valor, validadores sincronos, validadores asincronos ],
*/