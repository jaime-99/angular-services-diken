import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio.component';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';


export const routes: Routes = [
  { path: '', component: InicioComponent, pathMatch: 'full' },
];



@NgModule({
  declarations: [
    InicioComponent
  ],
  imports: [
    CommonModule,
    CommonModule,
    RouterModule.forChild(routes),
    MatButtonModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatCardModule
  ]
})
export class InicioModule { }
