import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuiSuisJeComponent } from './qui-suis-je.component';

describe('QuiSuisJeComponent', () => {
  let component: QuiSuisJeComponent;
  let fixture: ComponentFixture<QuiSuisJeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuiSuisJeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuiSuisJeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
