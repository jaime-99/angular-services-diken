import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PaseComponent } from './pase.component';
import {MatButtonModule} from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DialogComponent } from './dialog/dialog.component';
import {  MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';



export const routes: Routes = [
  { path: '', component: PaseComponent, pathMatch: 'full' },
];



@NgModule({
  declarations: [
    PaseComponent,
    DialogComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatButtonModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatDialogModule


  ]
})
export class PaseModule { }
