import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './theme/components/footer/footer.component';
import { MatIconModule } from '@angular/material/icon';
import { PagesComponentComponent } from './pages/pages-component/pages-component.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { SidenavComponent } from './theme/components/sidenav/sidenav.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { AppSettings } from './app.settings';
import { SupportService } from './support.service';
import {MatButtonModule} from '@angular/material/button';
import { TopMenuComponent } from './theme/components/top-menu/top-menu.component';




@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    PagesComponentComponent,
    SidenavComponent,
    TopMenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatToolbarModule,
    FlexLayoutModule,
    HttpClientModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule





    ],
    providers: [
      AppSettings,
      SupportService,

         ],
  bootstrap: [AppComponent]
})
export class AppModule { }
