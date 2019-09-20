import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChantPrenatalBienfaitsComponent } from './chant-prenatal-bienfaits.component';

describe('ChantPrenatalBienfaitsComponent', () => {
  let component: ChantPrenatalBienfaitsComponent;
  let fixture: ComponentFixture<ChantPrenatalBienfaitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChantPrenatalBienfaitsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChantPrenatalBienfaitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
