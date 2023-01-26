import { IVeges } from "src/app/veges/veges";
import * as AppState from '../../state/app.state';
export interface State extends AppState.State{
    veges:VegesState;
}
export interface VegesState{
    currentVegesId:number | null;
    veges:IVeges[];
    error:string;
    
}

export const initialState:VegesState={
    currentVegesId:null,
    veges:[],
    error:''
}