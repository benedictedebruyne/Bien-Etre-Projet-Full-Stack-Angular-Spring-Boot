import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KinesiologieDescriptionComponent } from './kinesiologie-description.component';

describe('KinesiologieDescriptionComponent', () => {
  let component: KinesiologieDescriptionComponent;
  let fixture: ComponentFixture<KinesiologieDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KinesiologieDescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KinesiologieDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
