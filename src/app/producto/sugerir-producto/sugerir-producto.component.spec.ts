import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SugerirProductoComponent } from './sugerir-producto.component';

describe('SugerirProductoComponent', () => {
  let component: SugerirProductoComponent;
  let fixture: ComponentFixture<SugerirProductoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SugerirProductoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SugerirProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
