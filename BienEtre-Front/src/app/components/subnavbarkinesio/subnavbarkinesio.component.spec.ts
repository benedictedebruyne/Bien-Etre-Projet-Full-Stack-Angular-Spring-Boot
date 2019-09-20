import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubnavbarkinesioComponent } from './subnavbarkinesio.component';

describe('SubnavbarkinesioComponent', () => {
  let component: SubnavbarkinesioComponent;
  let fixture: ComponentFixture<SubnavbarkinesioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubnavbarkinesioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubnavbarkinesioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
