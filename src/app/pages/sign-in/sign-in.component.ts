import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { subscribeOn } from 'rxjs';
import { SupportService } from 'src/app/support.service';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent  implements OnInit{
  loginForm: FormGroup; // Declara una variable para el formulario reactivo


  constructor(private fb: FormBuilder, private router:Router, private supportService:SupportService) {
    // Inicializa el formulario en el constructor
    this.loginForm = this.fb.group({
      username: ['', Validators.required], // Campo de usuario, requerido
      password: ['', Validators.required], // Campo de contraseña, requerido
    });
  }

  ngOnInit(): void {

  }

  onSubmit() {
    const username = this.loginForm.get('username')?.value;
    const password = this.loginForm.get('password')?.value;

    const datos = {
      p_Username:username ,
      p_Password:password

    }

    if (this.loginForm.valid) {

      this.supportService.GetLoginAuth("jose.gomez", "897f1c962a93c0ee5c3e6bee455c2959").subscribe((res)=>{

        console.log(res)
      })
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
