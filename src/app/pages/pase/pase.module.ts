import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PaseComponent } from './pase.component';


export const routes: Routes = [
  { path: '', component: PaseComponent, pathMatch: 'full' },
];



@NgModule({
  declarations: [
    PaseComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),

  ]
})
export class PaseModule { }
