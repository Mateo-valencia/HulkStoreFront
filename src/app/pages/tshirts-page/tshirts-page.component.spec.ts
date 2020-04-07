import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TshirtsPageComponent } from './tshirts-page.component';

describe('TshirtsPageComponent', () => {
  let component: TshirtsPageComponent;
  let fixture: ComponentFixture<TshirtsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TshirtsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TshirtsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
