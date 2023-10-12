import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';


@Component({
  selector: 'app-pase',
  templateUrl: './pase.component.html',
  styleUrls: ['./pase.component.scss']
})
export class PaseComponent implements OnInit {


  constructor (public dialog: MatDialog) {}

  usuario = ''
  numeroDeEmpleado = 0;
  correo = ''
  empresa = ''
  fechaAlta= ''


  ngOnInit(): void {

    let userauth = JSON.parse(localStorage.getItem("datalogin")!);

    this.correo = userauth.email
    this.empresa = userauth.empresa
    this.usuario = userauth.data.usuario
    this.numeroDeEmpleado = userauth.data.numero_empleado
    this.fechaAlta = userauth.data.fecha_alta

    console.log(userauth)
    // console.log(userauth.data)
  }



  abrirDialogo(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '500px', // Configura el ancho del diálogo según tus necesidades
    });

    dialogRef.afterClosed().subscribe(result => {
      // Procesa el resultado del diálogo si es necesario
    });
  }


}
