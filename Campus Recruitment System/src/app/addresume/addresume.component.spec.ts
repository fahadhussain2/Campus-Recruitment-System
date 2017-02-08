/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AddresumeComponent } from './addresume.component';

describe('AddresumeComponent', () => {
  let component: AddresumeComponent;
  let fixture: ComponentFixture<AddresumeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddresumeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddresumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
