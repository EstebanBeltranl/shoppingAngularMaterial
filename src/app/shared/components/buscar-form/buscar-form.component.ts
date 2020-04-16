import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ErrorStateMatcher } from '@angular/material/core';
import { FormControl, FormGroupDirective, NgForm, FormGroup, FormBuilder, Validators, ValidationErrors } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buscar-form',
  templateUrl: './buscar-form.component.html',
  styleUrls: ['./buscar-form.component.scss']
})
export class BuscarFormComponent implements OnInit {

  @Output() busqueda = new EventEmitter();
  readonly matcher = new MostrarEnElFormElStateMacherNoValido();
  readonly buscarForm: FormGroup;

  constructor( private fb: FormBuilder , private router: Router) { 
    this.buscarForm = this.fb.group({
      title: [, Validators.compose([Validators.required , Validators.minLength(2) ])],
      minPrice: [0, Validators.compose([ Validators.required , Validators.min(0) ])],
      maxPrice: [0, Validators.compose( [Validators.min(0), Validators.max(10000)] )],
    }, { validators: [ this.minMenorQueMaxValidator ] }  )
  }

  ngOnInit(): void {
  }

  onBuscar() {
    console.log( this.buscarForm.value )

    if( this.buscarForm.valid ) {
      this.busqueda.emit();
      this.router.navigate(['/resultados-busqueda'], { queryParams: { ...this.buscarForm.value }, skipLocationChange: true } )
    }
  }

 

  private minMenorQueMaxValidator ( group: FormGroup ): ValidationErrors | null {
    let { minPrice, maxPrice } = group.value;
    maxPrice = maxPrice === 0 ? true : maxPrice

    if( minPrice && maxPrice ) {
      maxPrice = maxPrice === true ? 0 : maxPrice
      return minPrice <= maxPrice ? null : { minMenorQueMax: true }
    } else {
      return null
    }
  }


}


export class MostrarEnElFormElStateMacherNoValido implements ErrorStateMatcher {
  
  isErrorState(control: FormControl, form: FormGroupDirective | NgForm): boolean {
    return !!( (control && control.invalid) || (form && form.hasError('minMenorQueMax')) )
  }
  
}