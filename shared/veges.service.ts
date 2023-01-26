import { animateChild } from "@angular/animations";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, catchError, map, Observable, tap, throwError } from "rxjs";

import { IVeges } from "../veges/veges";


@Injectable({
    providedIn:'root'
})
export class VegesService{
  removeVeges(id: number) {
    throw new Error('Method not implemented.');
  }
  updateProd(p: IVeges) {
    throw new Error('Method not implemented.');
  }
  deleteProd(id: number) {
    throw new Error('Method not implemented.');
  }
  newProd(): any {
    throw new Error('Method not implemented.');
  }
  getProducts() {
    throw new Error('Method not implemented.');
  }
  changeSelectedProd(arg0: any) {
    throw new Error('Method not implemented.');
  }
    
    foundIndex:number=0
    public url="api/veges";
    veges:IVeges[]=[];

    private selectedVegesSource = new BehaviorSubject<IVeges | null >(null);
    selectedVegesChange$=this.selectedVegesSource.asObservable()
   

    constructor(private http:HttpClient){}
        getVeges():Observable<IVeges[]>{
            console.log('inside getvegetables');
            return this.http.get<IVeges[]>(this.url).pipe(
                tap(data=>{console.log(data);
                this.veges=data;
                }),
                catchError(this.errorHandler)
            );
    }
    changeSelectedVeges(selectedVeges:IVeges|null):void{
      console.log("in changeselected");
      this.selectedVegesSource.next(selectedVeges);
    }
    errorHandler=(err:any)=>{
        let errorMessage:string;
        if(err.error instanceof ErrorEvent)
        {
          errorMessage = `An error has occured ${err.error.message}`;
        }
        else{
          errorMessage =  `Backend error code ${err.status} ${err.body.error}`;
        }
        console.log(err);
       return throwError(errorMessage);
      }
      getVegesById(id:number):Observable<IVeges>{
        return this.getVeges().pipe(
            tap(()=>{console.log('Fetch veges'+id);
            this.foundIndex=this.veges.findIndex(item=>item.id==id);
        }),
        map(()=>this.veges[this.foundIndex]),
        catchError(this.errorHandler)
        );
      }

      

      newVeges():IVeges{
        return{
          id:0,
          name:'',
          category:'',
          image:'\\assets\\images\\tom.jpg',
          price:0,
          
        };

      }


      createVeg(veges:IVeges):Observable<IVeges>{
        const headers=new HttpHeaders({'content-type':'application/json'});
        const newVeges={...veges,id:null,};
        console.log(`inside create veg ${this.url}`);
        return this.http.post<IVeges>(this.url,newVeges,{headers}).pipe(
          tap(data=>{
            console.log('in create new veg'+JSON.stringify(data));
            console.log(JSON.stringify(this.veges));
          },
          catchError(this.errorHandler)
          )
        );

      }


      updateVeg(veges:IVeges):Observable<IVeges>{
        const headers=new HttpHeaders({'content-type':'application/json'});
        const url=`${this.url}/${veges.id}`;
        return this.http.put<IVeges>(url,veges,{headers}).pipe(
          tap(()=>{
            console.log('update veges'+veges.id);
            const foundIndex=this.veges.findIndex(item=>item.id===veges.id);
            if(foundIndex>-1){
              this.veges[foundIndex]=veges;
            }
          }),
          map(()=>veges),
          catchError(this.errorHandler)
        );
      }

      deleteVeg(id:number):Observable<{}>{
        const headers=new HttpHeaders({'content-type':'application/json'});
        const url=`${this.url}/${id}`;
        return this.http.delete<IVeges>(url,{headers})
        .pipe(
          tap(data=>{
            console.log('deleted veg'+id);
            const foundIndex=this.veges.findIndex(item=>item.id===id);
          },
          catchError(this.errorHandler)
          )
        );
      }

    
    

}
