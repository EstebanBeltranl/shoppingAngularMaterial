import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductoComponent } from './producto/producto.component';
import { DetalleProductoComponent } from './detalle-producto/detalle-producto.component';
import { SugerirProductoComponent } from './sugerir-producto/sugerir-producto.component';
import { RouterModule } from '@angular/router';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';


@NgModule({
  declarations: [ProductoComponent, DetalleProductoComponent, SugerirProductoComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatButtonModule,
    MatGridListModule,
    RouterModule.forChild([
      { path: '', component: ProductoComponent }
    ])
  ]
})
export class ProductoModule { }
