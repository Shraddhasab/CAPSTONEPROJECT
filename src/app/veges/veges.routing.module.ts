import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "../login/auth-guard.service";
import { NavbarComponent } from "../navbar/navbar.component";
import { VegesAddComponent } from "./veges-add.component";

import { VegesComponent } from "./veges.component";

const vegesRoutes:Routes=[
    {
       path:'',component:VegesComponent
    },
    {
        
        path:'addVeges',component:VegesAddComponent
        
    },
    
];

@NgModule({
    imports:[
        RouterModule.forChild(vegesRoutes)
    ],
    exports:[RouterModule]
})
export class VegesRoutingModule{}