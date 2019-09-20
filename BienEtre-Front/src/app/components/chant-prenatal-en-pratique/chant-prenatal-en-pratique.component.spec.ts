import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChantPrenatalEnPratiqueComponent } from './chant-prenatal-en-pratique.component';

describe('ChantPrenatalEnPratiqueComponent', () => {
  let component: ChantPrenatalEnPratiqueComponent;
  let fixture: ComponentFixture<ChantPrenatalEnPratiqueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChantPrenatalEnPratiqueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChantPrenatalEnPratiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
