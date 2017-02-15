/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SendFromPrivkeyComponent } from './send-from-privkey.component';

describe('SendFromPrivkeyComponent', () => {
  let component: SendFromPrivkeyComponent;
  let fixture: ComponentFixture<SendFromPrivkeyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendFromPrivkeyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendFromPrivkeyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
