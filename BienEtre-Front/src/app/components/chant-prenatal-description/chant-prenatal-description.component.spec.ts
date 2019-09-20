import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChantPrenatalDescriptionComponent } from './chant-prenatal-description.component';

describe('ChantPrenatalDescriptionComponent', () => {
  let component: ChantPrenatalDescriptionComponent;
  let fixture: ComponentFixture<ChantPrenatalDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChantPrenatalDescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChantPrenatalDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
