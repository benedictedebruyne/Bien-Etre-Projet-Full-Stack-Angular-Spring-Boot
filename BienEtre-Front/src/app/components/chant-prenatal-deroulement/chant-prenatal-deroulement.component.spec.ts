import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChantPrenatalDeroulementComponent } from './chant-prenatal-deroulement.component';

describe('ChantPrenatalDeroulementComponent', () => {
  let component: ChantPrenatalDeroulementComponent;
  let fixture: ComponentFixture<ChantPrenatalDeroulementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChantPrenatalDeroulementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChantPrenatalDeroulementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
