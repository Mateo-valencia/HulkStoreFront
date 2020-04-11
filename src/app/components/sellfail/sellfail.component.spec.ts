import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SellfailComponent } from './sellfail.component';

describe('SellfailComponent', () => {
  let component: SellfailComponent;
  let fixture: ComponentFixture<SellfailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellfailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SellfailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
