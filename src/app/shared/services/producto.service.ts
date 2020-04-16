import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

export interface Producto {
  id: number;  
  title: string;  
  price: number;  
  imageUrl: string;  
  description: string;
  categories: string[]
}

interface ParametrosBusqueda {
  title: string;
  maxPrice: string;
  minPrice: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor( private http: HttpClient ) { }

  getAll() :Observable<Producto[]> {
    return this.http.get<Producto[]>('http://localhost:3000/api/productos')
  }

  getById(id: number ): Observable<Producto> {
    return this.http.get<Producto[]>('http://localhost:3000/api/productos').pipe(
      map( productos => <Producto> productos.find( p => p.id === id ))
    )
  }

  getByCategoria(categoria: string) {
    return this.http.get<Producto[]>(`http://localhost:3000/api/productos/categoria/${categoria}`)
  }

  buscar(params: ParametrosBusqueda) {
    const { title, maxPrice, minPrice } = params;
    console.log('DESDE BUSCAR: ', params )
    return this.http.get<Producto[]>(`http://localhost:3000/api/productos/buscar?title=${title}&min=${minPrice}&max=${maxPrice}` )
  }

  getDistintaCategoria(): Observable<string[]> {
    return this.http.get<Producto[]>('http://localhost:3000/api/productos').pipe(
      map( productos => productos.reduce( (all: any[], producto) => all.concat(producto.categories), [] ) ),
      map( categorias => Array.from( new Set(categorias) ) )
    )
  }
}
