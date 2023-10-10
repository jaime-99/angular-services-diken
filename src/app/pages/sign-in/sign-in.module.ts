import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './sign-in.component';
import { RouterModule, Routes } from '@angular/router';
// import { PaseComponent } from '../pase/pase.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';

import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';






export const routes: Routes = [
  { path: '', component: SignInComponent, pathMatch: 'full' },
];


@NgModule({
  declarations: [
    SignInComponent
    ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule




    ]
})
export class SignInModule { }
