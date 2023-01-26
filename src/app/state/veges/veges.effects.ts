import { Injectable } from "@angular/core";
import * as VegesActions from './veges.actions';
import { VegesService } from "src/app/shared/veges.service";
import { Actions } from "@ngrx/effects";
import { createEffect, ofType } from "@ngrx/effects";
import { catchError, mergeMap ,map, concatMap} from "rxjs/operators";
import { of } from "rxjs";

@Injectable()
export class VegesEffects{
    constructor(private actions$:Actions,private vegservice:VegesService){}
    loadVeges$=createEffect(()=>{
        return this.actions$
        .pipe(
            ofType(VegesActions.loadVeges),
            mergeMap(()=>this.vegservice.getVeges()
            .pipe(
                map(veges=>VegesActions.loadVegesSuccess({veges})),
                catchError(error=>of(VegesActions.loadVegesFailure({error})))
                )
            )
            );
        });
    updateVeg$=createEffect(()=>{
        return this.actions$
        .pipe(
            ofType(VegesActions.updateVeg),
            concatMap(action=>
                this.vegservice.updateVeg(action.veges)
            .pipe(
                map(veges=>VegesActions.updateVegSuccess({veges})),
                catchError(error=>of(VegesActions.updateVegFailure({error})))
                )
            )
            );
        });
    createVeg$=createEffect(()=>{
        return this.actions$
        .pipe(
            ofType(VegesActions.createVeg),
            concatMap(action=>
                this.vegservice.createVeg(action.veges)
            .pipe(
                map(veges=>VegesActions.createVegSuccess({veges})),
                catchError(error=>of(VegesActions.createVegFailure({error})))
                )
            )
            );
        });  
    deleteVeg$=createEffect(()=>{
        return this.actions$
        .pipe(
            ofType(VegesActions.deleteVeg),
            concatMap(action=>
                this.vegservice.deleteVeg(action.vegesId)
            .pipe(
                map(veges=>VegesActions.deleteVegSuccess({vegesId:action.vegesId})),
                catchError(error=>of(VegesActions.deleteVegFailure({error})))
                )
            )
            );
        });     
    
    
}