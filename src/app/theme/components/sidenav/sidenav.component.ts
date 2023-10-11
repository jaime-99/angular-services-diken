import { Component,ViewChild,OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';


@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit{

  constructor( ){

  }

  @ViewChild('sidenav')
  sidenav!: MatSidenav; // Esto obtiene una referencia al mat-sidenav



  ngOnInit(){

    if (this.sidenav) {
      // La referencia a 'sidenav' estará disponible después de que la vista se inicialice
      // Ahora puedes usar this.sidenav.toggle() u otras funciones de MatSidenav
    }

  }
}
