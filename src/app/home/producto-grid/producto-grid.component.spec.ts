import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoGridComponent } from './producto-grid.component';

describe('ProductoGridComponent', () => {
  let component: ProductoGridComponent;
  let fixture: ComponentFixture<ProductoGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductoGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductoGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
