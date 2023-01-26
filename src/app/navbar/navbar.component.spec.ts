import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';


import { NavbarComponent } from './navbar.component';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarComponent ],
      imports:[FormsModule,ReactiveFormsModule,RouterModule,RouterTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('testing home navbar',()=>{
    const el = fixture.debugElement.query(By.css('.nav-link'));
    expect(el).toBeTruthy();
    expect(el.nativeElement.getAttribute('#home')).toBeTrue;
  });
   it('testing veges navbar',()=>{
    const el = fixture.debugElement.query(By.css('.nav-link'));
    expect(el).toBeTruthy();
    expect(el.nativeElement.getAttribute('#veges')).toBeTrue;
  });
  it('testing aboutus navbar',()=>{
    const el = fixture.debugElement.query(By.css('.nav-link'));
    expect(el).toBeTruthy();
    expect(el.nativeElement.getAttribute('#aboutus')).toBeTrue;
  });
  it('testing contactus navbar',()=>{
    const el = fixture.debugElement.query(By.css('.nav-link'));
    expect(el).toBeTruthy();
    expect(el.nativeElement.getAttribute('#contactus')).toBeTrue;
  });
  it('testing contactus navbar',()=>{
    const el = fixture.debugElement.query(By.css('.nav-link'));
    expect(el).toBeTruthy();
    expect(el.nativeElement.getAttribute('#contactus')).toBeTrue;
  });
});
