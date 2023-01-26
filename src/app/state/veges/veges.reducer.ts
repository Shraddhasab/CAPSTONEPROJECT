import { createReducer, on } from "@ngrx/store";
import { initialState, VegesState } from "./veges.state";
import * as VegesActions from './veges.actions';

export const vegesReducer=createReducer<VegesState>(
    initialState,
    on(VegesActions.setCurrentVeg,(state,action):VegesState=>{
        return{
            ...state,
            currentVegesId:action.currentVegId
        };
    }),
    on(VegesActions.clearCurrentVeg,(state):VegesState=>{
        return{
            ...state,
            currentVegesId:null
        }
    }),
    on(VegesActions.initializeCurrentVeg, (state): VegesState => {
        return {
          ...state,
          currentVegesId: 0
        };
      }),
        on(VegesActions.loadVegesSuccess,(state,action):VegesState=>{
            return{
                ...state,
                veges:action.veges,
                error:''
            };
        }),
        on(VegesActions.loadVegesFailure,(state,action):VegesState=>{
            return{
                ...state,
                veges:[],
                error:action.error
            }
        
        }),
        on(VegesActions.updateVegSuccess,(state,action):VegesState=>{
            const updatedVeges=state.veges.map(
                item=>action.veges.id===item.id ? action.veges:item);
                return{
                    ...state,
                   veges:updatedVeges,
                   currentVegesId:action.veges.id,
                   error:''
                    
                };
        }),
        on(VegesActions.createVegFailure, (state, action): VegesState => {
            return {
              ...state,
              error: action.error
            };
        }),
        on(VegesActions.deleteVegSuccess, (state, action): VegesState => {
          return {
            ...state,
            veges: state.veges.filter(veges => veges.id !== action.vegesId),
            currentVegesId: null,
            error: ''
          };
        }),
        on(VegesActions.deleteVegFailure, (state, action): VegesState => {
          return {
            ...state,
            error: action.error
          };
        })


)