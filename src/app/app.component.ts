import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { AppSettings, Settings } from './app.settings';
import { NavigationEnd, Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pase_digital';

  loading: boolean = false;
  public settings: Settings;
  constructor(public appSettings: AppSettings,
              public router: Router,
              @Inject(PLATFORM_ID) private platformId: Object,
              ){
    this.settings = this.appSettings.settings;


  }



  ngAfterViewInit(){
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        if (isPlatformBrowser(this.platformId)) {
          window.scrollTo(0,0);
        }
      }
    })
  }


}
