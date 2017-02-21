/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { VanityAddressComponent } from './vanity-address.component';

describe('VanityAddressComponent', () => {
  let component: VanityAddressComponent;
  let fixture: ComponentFixture<VanityAddressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VanityAddressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VanityAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
