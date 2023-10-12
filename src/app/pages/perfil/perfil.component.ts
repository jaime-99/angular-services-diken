import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent  implements OnInit{
  usuario: any;
  numeroDeEmpleado: any;
  fechaAlta: any;
  empresa: any;
  correo: any;


  ngOnInit(){

    let userauth = JSON.parse(localStorage.getItem("datalogin")!);

    this.correo = userauth.email
    this.empresa = userauth.empresa
    console.log(this.empresa)
    this.usuario = userauth.data.usuario
    this.numeroDeEmpleado = userauth.data.numero_empleado
    this.fechaAlta = userauth.data.fecha_alta

  }



}
