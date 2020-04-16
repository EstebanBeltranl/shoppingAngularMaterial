import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto, ProductoService } from 'src/app/shared/services';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.scss']
})
export class CategoriasComponent implements OnInit {
  readonly categoriesNames$: Observable<string[]>;
  readonly productos$: Observable<Producto[]>;
  
  constructor( private productosServices: ProductoService, private activatedRoute: ActivatedRoute) { 
    this.categoriesNames$ = this.productosServices.getDistintaCategoria().pipe(
      map( categorias => [ 'all', ...categorias ] )
    )

    this.productos$ = this.activatedRoute.paramMap.pipe(
      switchMap( params => this.getCategoria(params.get('categoria')) )
    )
  }

  private getCategoria(categoria: string): Observable<Producto[]> {
    return categoria.toLowerCase() === 'all' ? this.productosServices.getAll() : this.productosServices.getByCategoria(categoria.toLowerCase())
  }

  ngOnInit(): void {
  }

}
