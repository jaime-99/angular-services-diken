import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './theme/components/footer/footer.component';
import { MatIconModule } from '@angular/material/icon';
import { PagesComponentComponent } from './pages/pages-component/pages-component.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    PagesComponentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule

    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
