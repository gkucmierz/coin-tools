/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EciesComponent } from './ecies.component';

describe('EciesComponent', () => {
  let component: EciesComponent;
  let fixture: ComponentFixture<EciesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EciesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
