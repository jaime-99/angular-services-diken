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

  @ViewChild('sidenav') sidenav: MatSidenav | undefined;

  ngOnInit(){
    if (this.sidenav) {
      this.sidenav.open();
    }

  }

  toggleSidenav() {
    if(this.sidenav)
    this.sidenav.toggle();
  }

}
