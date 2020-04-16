import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from 'src/app/shared/services';
import { MediaObserver } from '@angular/flex-layout';
import { map, startWith, tap } from 'rxjs/operators';

@Component({
  selector: 'app-sugerir-producto',
  templateUrl: './sugerir-producto.component.html',
  styleUrls: ['./sugerir-producto.component.scss']
})
export class SugerirProductoComponent implements OnInit {

  @Input() productos: Producto[];
  readonly columnas$: Observable<number>;
  readonly breakPointToColumNumber = new Map([
    [ 'xs', 2 ],
    [ 'sm', 3 ],
    [ 'md', 5 ],
    [ 'lg', 2 ],
    [ 'xl', 3 ],
  ])


  constructor( private media: MediaObserver) { 
    this.columnas$ = this.media.media$.pipe(
      tap( md => console.log('Medida: ,', md.mqAlias) ),
      map( mc => <number>this.breakPointToColumNumber.get(mc.mqAlias)),
      startWith(3)
    )
  }

  ngOnInit(): void {
  }

}
