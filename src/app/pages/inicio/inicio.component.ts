import { Component,OnInit } from '@angular/core';

@Component({
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  usuario = ''



  ngOnInit(){

    let userauth = JSON.parse(localStorage.getItem("datalogin")!);
    this.usuario = userauth.data.usuario


  }

}
