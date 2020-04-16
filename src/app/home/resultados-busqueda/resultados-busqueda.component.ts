import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto, ProductoService } from 'src/app/shared/services';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-resultados-busqueda',
  templateUrl: './resultados-busqueda.component.html',
  styleUrls: ['./resultados-busqueda.component.scss']
})
export class ResultadosBusquedaComponent implements OnInit {

  readonly productos$: Observable<Producto[]>

  constructor( private productoService: ProductoService, private activatedRoute: ActivatedRoute ) { 
    this.productos$ = this.activatedRoute.queryParamMap.pipe(
      switchMap( p => this.productoService.buscar( p['params'] )
      )
    )
    
  }

  ngOnInit(): void {
  }

}
