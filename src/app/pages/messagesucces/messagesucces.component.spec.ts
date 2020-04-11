import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagesuccesComponent } from './messagesucces.component';

describe('MessagesuccesComponent', () => {
  let component: MessagesuccesComponent;
  let fixture: ComponentFixture<MessagesuccesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessagesuccesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessagesuccesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
