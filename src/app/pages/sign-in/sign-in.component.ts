import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent  implements OnInit{
  loginForm: FormGroup; // Declara una variable para el formulario reactivo


  constructor(private fb: FormBuilder, private router:Router) {
    // Inicializa el formulario en el constructor
    this.loginForm = this.fb.group({
      username: ['', Validators.required], // Campo de usuario, requerido
      password: ['', Validators.required], // Campo de contraseña, requerido
    });
  }

  ngOnInit(): void {

  }

  onSubmit() {

    if (this.loginForm.valid) {

      // El formulario es válido, puedes acceder a los valores
      const formData = this.loginForm.value;
      console.log('Formulario enviado:', formData);
      this.router.navigate(['/pase']); // esto es para que me redireccione a ventas cuando inicio sesion
  }

}

getErrorMessage() {
  if (this.loginForm.hasError('required')) {

    // return 'You must enter a value';
  }
}


}
