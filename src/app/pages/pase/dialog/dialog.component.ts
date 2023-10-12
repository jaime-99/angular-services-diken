import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit{

 public datosPase: FormGroup; // Declara una variable para el formulario reactivo

 constructor(private fb: FormBuilder){

  this.datosPase= this.fb.group({
    fecha: ['', Validators.required], // Campo de usuario, requerido
    tipo: ['', Validators.required], // Campo de contraseña, requerido
    hora: ['', Validators.required], // Campo de contraseña, requerido
  });
}
  ngOnInit(): void {

  }



  onSubmit(){

  }


 }







