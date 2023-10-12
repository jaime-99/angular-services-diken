import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AppSettings, Settings } from 'src/app/app.settings';

@Component({
  selector: 'app-pages-component',
  templateUrl: './pages-component.component.html',
  styleUrls: ['./pages-component.component.scss']
})
export class PagesComponentComponent implements OnInit {

  @ViewChild('sidenav') sidenav:any;
 public settings: Settings;
 showFiller = false;



 constructor(public appSettings:AppSettings,
  public router:Router,
  ){
this.settings = this.appSettings.settings;
}


  ngOnInit(): void {

    if(window.innerWidth <= 960){
      this.settings.adminSidenavIsOpened = false;
      this.settings.adminSidenavIsPinned = false;
    };
  }



  public toggleSidenav(){
    this.sidenav.toggle();
  }



}
