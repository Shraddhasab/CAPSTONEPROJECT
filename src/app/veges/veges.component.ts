import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VegesService } from '../shared/veges.service';
import { IVeges } from './veges';
import { State } from 'src/app/state/veges/veges.state';
import { Store } from '@ngrx/store';
import { getCurrentVeges, getError, getVeges } from '../state/veges/veges.selector';
import { Observable } from 'rxjs';
import * as VegesActions from 'src/app/state/veges/veges.actions';
import { CartService } from '../shared/cart.service';

@Component({
  selector: 'app-veges',
  templateUrl: './veges.component.html',
  styleUrls: ['./veges.component.css']
})
export class VegesComponent implements OnInit {

  c: any;
filterData(arg0: any) {
throw new Error('Method not implemented.');
}
  veges:IVeges[]=[];
  veg!:IVeges;
  errorMsg:string="";
  href:string='';
  veges$!:Observable<IVeges[]>;
  errorMessage$!:Observable<string>;
  selectedVeges$!:Observable<any>;
  constructor(private vegservice:VegesService,private cartservice:CartService, private router:Router, private store:Store<State>){}

  ngOnInit():void{
    console.log('in ngoninit of veg');
    this.href=this.router.url;
    this.veges$=this.store.select(getVeges);
    this.veges$.subscribe(response=>this.veges=response);
    this.errorMessage$=this.store.select(getError);
    this.store.dispatch(VegesActions.loadVeges());
    this.selectedVeges$=this.store.select(getCurrentVeges);
  }
  editVeges(veges:IVeges){
    this.store.dispatch(VegesActions.setCurrentVeg({currentVegId:veges.id}))
    this.router.navigate([this.href,'addVeges']);
  }
  newVeges():void{
    console.log('in new veges');
    this.store.dispatch(VegesActions.initializeCurrentVeg());
    this.router.navigate([this.href,'addVeges']);
  }
  
  vegesSelected(veges:IVeges):void{
    this.store.dispatch(VegesActions.setCurrentVeg({currentVegId:veges.id}));
  }

  getVegesById(id:number):IVeges{
    this.vegservice.getVegesById(id).subscribe(response=>this.veg=response);
    return this.veg;
  }

  addToCart(veg:IVeges){
    this.cartservice.addtoCart(veg);
    this.router.navigate(['cart']);
  }
  removeVeges(veg:IVeges){
    this.store.dispatch(VegesActions.deleteVeg({vegesId:veg.id}));
  }
}
