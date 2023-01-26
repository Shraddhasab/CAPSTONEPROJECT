import { HttpClient } from "@angular/common/http";

import { Injectable } from "@angular/core";

import { BehaviorSubject, Observable } from "rxjs";

import { IVeges } from "src/app/veges/veges";

 

@Injectable({

    providedIn: 'root'

})

 

export class CartService{

    cart: IVeges[]=[];

    private vegeList=new BehaviorSubject<IVeges[]>([]);

    constructor(private http:HttpClient){}

    url="api/cart";

 

    //getter, getting veges data

    getVeges(){

        return this.vegeList.asObservable();

    }  


    setVeges(veges:IVeges[]){

      this.cart.push(...veges);

      this.vegeList.next(veges);

    }

 

    addtoCart(vege:IVeges){

        this.cart.push(vege);

        this.vegeList.next(this.cart);

        this.getTotalPrice();

        console.log(this.cart);

    }

 
    removeCartItem(vege:IVeges){

      this.cart.map((a:IVeges, index:any)=>{

        if(vege.id===a.id){

          this.cart.splice(index,1);

        }

      })

      this.vegeList.next(this.cart);

    }

 

    emptyCart(){

      this.cart=[];

      this.vegeList.next(this.cart);

    }

    vegPrice():number{
        let price=0;
        this.cart.map((v:IVeges)=>{
            
        })
        return price;
    } 

    getTotalPrice():number{

      let grandTotal=0;

      this.cart.map((c:IVeges)=>{

        grandTotal+=c.price;

      })

      return grandTotal;

    }

}
