import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerfilComponent } from './perfil.component';
import { RouterModule, Routes } from '@angular/router';
import { PaseComponent } from '../pase/pase.component';
import { FlexLayoutModule } from '@angular/flex-layout';


export const routes: Routes = [
  { path: '', component: PerfilComponent, pathMatch: 'full' },
];



@NgModule({
  declarations: [
    PerfilComponent,


  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FlexLayoutModule

  ],
  exports:[


  ],
})
export class PerfilModule { }
