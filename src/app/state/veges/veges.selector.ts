import { state } from "@angular/animations";
import { createFeatureSelector, createSelector } from "@ngrx/store";

import { VegesState } from "./veges.state";


const getVegesFeatureState=createFeatureSelector<VegesState>('veges');

export const getCurrentVegesById=createSelector(
    getVegesFeatureState,
    state=>state.currentVegesId
);

export const getCurrentVeges=createSelector(
    getVegesFeatureState,
    getCurrentVegesById,
    (state,currentVegesId)=>{
        if(currentVegesId==0){
            return{
                id:0,
                name:'',
                category:'',
                image:'',
                description:'',
                price:0
                

            };
        }
        else{
            return currentVegesId? state.veges.find(v=>v.id===currentVegesId):null;
        }
    }
);
export const getVeges=createSelector(
    getVegesFeatureState,
    state=>state.veges
);
export const getError=createSelector(
    getVegesFeatureState,
    state=>state.error
)