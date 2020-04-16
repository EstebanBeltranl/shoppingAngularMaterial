import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatGridListModule } from '@angular/material/grid-list';
import { ResultadosBusquedaComponent } from './resultados-busqueda/resultados-busqueda.component';
import { ProductoGridComponent } from './producto-grid/producto-grid.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { MatTabsModule } from '@angular/material/tabs';


const rutas: Route[] = [
  { path: '', pathMatch: 'full', redirectTo: 'categorias' },
  { path: 'resultados-busqueda', component: ResultadosBusquedaComponent },
  { path: 'categorias', children: [
    { path: '', pathMatch: 'full', redirectTo: 'all' },
    { path: ':categoria', component: CategoriasComponent },
  ] },
]

@NgModule({
  declarations: [ ResultadosBusquedaComponent, ProductoGridComponent, CategoriasComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(rutas),
    FlexLayoutModule,
    MatGridListModule,
    MatTabsModule
  ]
})
export class HomeModule { }
