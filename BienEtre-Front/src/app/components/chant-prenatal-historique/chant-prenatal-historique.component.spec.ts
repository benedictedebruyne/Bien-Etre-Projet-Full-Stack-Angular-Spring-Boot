import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChantPrenatalHistoriqueComponent } from './chant-prenatal-historique.component';

describe('ChantPrenatalHistoriqueComponent', () => {
  let component: ChantPrenatalHistoriqueComponent;
  let fixture: ComponentFixture<ChantPrenatalHistoriqueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChantPrenatalHistoriqueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChantPrenatalHistoriqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
