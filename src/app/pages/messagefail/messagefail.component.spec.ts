import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagefailComponent } from './messagefail.component';

describe('MessagefailComponent', () => {
  let component: MessagefailComponent;
  let fixture: ComponentFixture<MessagefailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessagefailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessagefailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
