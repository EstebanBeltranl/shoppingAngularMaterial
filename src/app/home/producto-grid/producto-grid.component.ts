import { Component, OnInit, Input } from '@angular/core';
import { Producto } from 'src/app/shared/services';
import { Observable } from 'rxjs';
import { MediaObserver } from '@angular/flex-layout';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-producto-grid',
  templateUrl: './producto-grid.component.html',
  styleUrls: ['./producto-grid.component.scss']
})
export class ProductoGridComponent implements OnInit {

  @Input() productos: Producto[];
  readonly columnas$: Observable<number>;
  readonly breakpointsToColumnsNumber = new Map([
    [ 'xs', 1 ],
    [ 'sm', 2 ],
    [ 'md', 3 ],
    [ 'lg', 4 ],
    [ 'xl', 5 ],
  ]);


  constructor( private media: MediaObserver ) { 
    this.columnas$ = this.media.media$.pipe(
      map( mc => <number> this.breakpointsToColumnsNumber.get(mc.mqAlias)),
      startWith(3)
    )
  }

  ngOnInit(): void {
   
  }

}
