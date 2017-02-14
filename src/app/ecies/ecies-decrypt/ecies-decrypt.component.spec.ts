/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EciesDecryptComponent } from './ecies-decrypt.component';

describe('EciesDecryptComponent', () => {
  let component: EciesDecryptComponent;
  let fixture: ComponentFixture<EciesDecryptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EciesDecryptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EciesDecryptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
