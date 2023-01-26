import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CartComponent } from "./cart.component";
import { CheckoutComponent } from "./checkout.component";

const cartRoutes:Routes=[
    {
       path:'',component:CartComponent
    },
    {
        
        path:'checkoutForm',component:CheckoutComponent
        
    },
    
];

@NgModule({
    imports:[
        RouterModule.forChild(cartRoutes)
    ],
    exports:[RouterModule]
})
export class CartRoutingModule{}