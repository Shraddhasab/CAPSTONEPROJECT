import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing'


import { VegesAddComponent } from './veges-add.component';
import { StoreModule } from '@ngrx/store';

describe('VegesAddComponent', () => {
  let component: VegesAddComponent;
  let fixture: ComponentFixture<VegesAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VegesAddComponent ],
      imports:[ReactiveFormsModule,HttpClientTestingModule,StoreModule.forRoot({})],
      
    })
    .compileComponents();

    fixture = TestBed.createComponent(VegesAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
