/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EciesEncryptComponent } from './ecies-encrypt.component';

describe('EciesEncryptComponent', () => {
  let component: EciesEncryptComponent;
  let fixture: ComponentFixture<EciesEncryptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EciesEncryptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EciesEncryptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
