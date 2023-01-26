import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { FormsModule, NgModel, ReactiveFormsModule } from "@angular/forms";
import { MatCardModule } from "@angular/material/card";
import { MatFormFieldModule } from "@angular/material/form-field";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule } from "@angular/router";
import { RouterTestingModule } from "@angular/router/testing";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { MaterialModule } from "../material-module/material-module.module";
import { VegesEffects } from "../state/veges/veges.effects";
import { vegesReducer } from "../state/veges/veges.reducer";
import { VegesAddComponent } from "./veges-add.component";


import { VegesComponent } from "./veges.component";
import { VegesRoutingModule } from "./veges.routing.module";


@NgModule({
    declarations:[
        VegesComponent,
        VegesAddComponent,
        
    ],
    imports:[
        MaterialModule,
        MatCardModule,
        MatFormFieldModule,
        VegesRoutingModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        StoreModule.forFeature('veges',vegesReducer),
        EffectsModule.forFeature([VegesEffects])
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ]
})
export class VegesModule{}