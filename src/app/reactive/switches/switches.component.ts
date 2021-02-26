import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [
  ]
})
export class SwitchesComponent  implements OnInit {

  miFormulario:FormGroup = this.fb.group({
    genero: ['M', Validators.required],
    notificaciones: [true, Validators.required],
    condiciones: [false, Validators.requiredTrue],
  });

  persona = {
    genero : 'F',
    notificaciones: true
  }

  constructor( private fb:FormBuilder) { }

  ngOnInit() {
    this.miFormulario.reset({
      ...this.persona,
      condiciones:false// se carga el objeto persona mas le agregamos otra propiedad al formulario
    })

    //modificando los vlores del objeto persona en timepo real con rxjs suscribiendose  a los cambios
    //RXJS
    /*
      this.miFormulario.get('condiciones')?.valueChanges.subscribe( newValue => {//subscritos  a un solo campo
        console.log(newValue); 
      })
    */
 
    this.miFormulario.valueChanges.subscribe(form =>{
      console.log(form);
      delete form.condiciones;
      this.persona = form;
    })
  }

  guardar(){
    const formValue = {...this.miFormulario.value};
    delete formValue.condiciones; //elimina la propiedad del objeto

    console.log(formValue);
    this.persona= formValue
    
  }

}
