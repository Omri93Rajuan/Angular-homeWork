import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BindingCompComponent } from './binding-comp.component';

describe('BindingCompComponent', () => {
  let component: BindingCompComponent;
  let fixture: ComponentFixture<BindingCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BindingCompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BindingCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
