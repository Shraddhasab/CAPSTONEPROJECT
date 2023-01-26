import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';

import { VegesComponent } from './veges.component';

describe('VegesComponent', () => {
  let component: VegesComponent;
  let fixture: ComponentFixture<VegesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VegesComponent ],
      imports:[HttpClientModule,StoreModule.forRoot({})],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VegesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
