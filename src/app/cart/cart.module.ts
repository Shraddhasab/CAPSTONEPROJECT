import { CommonModule } from "@angular/common";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CartComponent } from "./cart.component";
import { CartRoutingModule } from "./cart.routing.module";
import { CheckoutComponent } from "./checkout.component";

@NgModule({
    declarations:[
        CartComponent,
        CheckoutComponent
    ],
    imports:[
       
        CartRoutingModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
       
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ]
})
export class CartModule{}