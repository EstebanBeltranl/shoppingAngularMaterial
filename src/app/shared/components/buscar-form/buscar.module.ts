import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuscarFormComponent } from './buscar-form.component';
import { ReactiveFormsModule } from '@angular/forms';

// Angular material
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    BuscarFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  exports: [ BuscarFormComponent ]
})
export class BuscarModule { }
