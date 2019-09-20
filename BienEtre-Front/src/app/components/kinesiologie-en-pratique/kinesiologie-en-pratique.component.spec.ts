import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KinesiologieEnPratiqueComponent } from './kinesiologie-en-pratique.component';

describe('KinesiologieEnPratiqueComponent', () => {
  let component: KinesiologieEnPratiqueComponent;
  let fixture: ComponentFixture<KinesiologieEnPratiqueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KinesiologieEnPratiqueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KinesiologieEnPratiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
