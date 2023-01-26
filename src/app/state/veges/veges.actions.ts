import { createAction, props } from "@ngrx/store";
import { IVeges } from "src/app/veges/veges";

export const setCurrentVeg=createAction(
    '[Vegetable] Set Current Vegetable',
    props<{currentVegId:number}>()
);

export const clearCurrentVeg=createAction(
    '[Vegetable] Clear Current Veg'
);

export const initializeCurrentVeg=createAction(
    '[Vegetable] Initialize Current Veg'
);

export const loadVeges=createAction(
    '[Vegetable] Load Vegetables'
);

export const loadVegesSuccess=createAction(
    '[Vegetable] Load Success',
    props<{veges:IVeges[]}>()
);
 
export const loadVegesFailure=createAction(
    '[Vegetable] Load failure',
    props<{error:string}>()
);

export const updateVeg=createAction(
    '[Vegetable] Update Veg',
    props<{veges:IVeges}>()
);

export const updateVegSuccess=createAction(
    '[Vegetable] Update Veg success',
    props<{veges:IVeges}>()
);

export const updateVegFailure=createAction(
    '[Vegetable] Update Veg Failure' ,
    props<{error:string}>()
);

export const createVeg=createAction(
    '[Vegetable] Create Veg',
    props<{veges:IVeges}>()
);

export const createVegSuccess=createAction(
    '[Vegetable] Create Veg success',
    props<{veges:IVeges}>()
);

export const createVegFailure=createAction(
    '[Vegetable] Create Veg Failure' ,
    props<{error:string}>()
);

export const deleteVeg=createAction(
    '[Vegetable] Delete Veg',
    props<{vegesId:number}>()
);

export const deleteVegSuccess=createAction(
    '[Vegetable] Delete Veg success',
    props<{vegesId:number}>()
);

export const deleteVegFailure=createAction(
    '[Vegetable] Delete Veg Failure' ,
    props<{error:string}>()
);
