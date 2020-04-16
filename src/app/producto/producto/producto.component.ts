import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductoService, Producto } from 'src/app/shared/services';
import { Observable } from 'rxjs';
import { map, filter, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss']
})
export class ProductoComponent implements OnInit {

  producto$: Observable<Producto>;
  productosSugeridos$: Observable<Producto[]>
  id: any;
  constructor(private activatedRoute: ActivatedRoute, 
              private productoService: ProductoService) { 

      this.producto$ = this.activatedRoute.paramMap.pipe(
        map( params => parseInt(params.get('ID') || '') ),
        filter( id => !!id ),
        switchMap( id => {
          this.id = id
          return this.productoService.getById(id)
        })
      )

      this.productosSugeridos$ = this.productoService.getAll()
  }

  ngOnInit(): void {
    this.productosSugeridos$.subscribe( p => console.log(p) )
  }

}


// .pipe(
//   map( productos => {
//     let index = productos.findIndex( p => this.id === p.id )
//     productos.splice(index, 1);
//     return productos;
//   })
// )