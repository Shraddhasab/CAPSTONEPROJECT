import { Component, Input, OnChanges, OnInit,SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../shared/cart.service';

import { IVeges } from '../veges/veges';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent  implements OnInit{

  pageTitle:string='Shopping cart';
  public veges : IVeges[] = [];

  public grandTotal !: number;
  
  href: any;
  price!: number;

  constructor(private cartService : CartService,private router:Router) { }

 

  ngOnInit(): void {
      this.href=this.router.url;
      this.cartService.getVeges().subscribe(response=>{
      this.veges = response;
      this.grandTotal = this.cartService.getTotalPrice();
      //this.price=this.cartService.vegPrice();
    })

  }

  emptyCart(){

    this.cartService.emptyCart();

  }
  removeVeges(veg:IVeges){
    this.cartService.removeCartItem(veg);
  }

  checkOut():void{
    console.log('in checkout');
    this.router.navigate([this.href,'checkoutForm']);
  }

}
