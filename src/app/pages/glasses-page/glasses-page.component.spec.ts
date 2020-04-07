import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlassesPageComponent } from './glasses-page.component';

describe('GlassesPageComponent', () => {
  let component: GlassesPageComponent;
  let fixture: ComponentFixture<GlassesPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlassesPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlassesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
