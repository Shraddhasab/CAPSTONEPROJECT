import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { Observable ,tap} from "rxjs";
import { GenericValidator } from "../shared/genericvalidator";
import { VegesService } from "../shared/veges.service";
import { getCurrentVeges } from "../state/veges/veges.selector";
import { State } from "../state/veges/veges.state";
import { IVeges } from "./veges";
import * as VegesActions from 'src/app/state/veges/veges.actions'



@Component({
    selector: 'veges-add',
    templateUrl: './veges-add.component.html',
    styleUrls: ['./veges-add.component.css']
  })
  export class VegesAddComponent implements OnInit{
    pageTitle:string='Add, Edit and Delete Veges';
    addVeges!:FormGroup;
    veges!:IVeges|null|undefined;
    veges$!: Observable<IVeges|null|undefined>;

    displayMessage:  {[key:string]:string}={};
    private validationMessages!:{[key:string]:{[key:string]:string}};
    private genericValidator!:GenericValidator;

    constructor(private fb:FormBuilder,private router:Router,private vegservice:VegesService,private store:Store<State>){
        this.validationMessages={
            name:{
                required:'Veg name is required',
            },
            category:{
                required:'category is required',
            },
            image:{
                required:'image is required',
            },
           
            price:{
                required:'Price is required'
            }
        };
        this.genericValidator=new GenericValidator(this.validationMessages);
    }
    
    ngOnInit(){
        console.log('in init of veges add')
        this.addVeges=this.fb.group({
            id:[],
            name:['',Validators.required],
            category:['',Validators.required],
            image:['',Validators.required],
           
            price:['',[Validators.required]],

        });
        console.log('created add form')
        this.veges$=this.store.select(getCurrentVeges)
        .pipe(
            tap(currentVeges=>{
                console.log('**',currentVeges);
                this.displayVeges(currentVeges)
            })
        );
        this.veges$.subscribe(response=>this.veges=response);
        console.log('selected current veges in ng onit of add veges',this.veges);
        this.addVeges.valueChanges.subscribe();
            /* ()=>this.displayMessage=this.genericValidator.processMessages(this.addVeges)
            );
            console.log('value in card changes')
        this.addVeges.valueChanges.subscribe(()=>this.displayMessage=this.genericValidator.processMessages(this.addVeges)); */

    }
    get id(){
        return this.addVeges.get("id");
    }
    get name(){
        return this.addVeges.get("name");
    }
    get category(){
        return this.addVeges.get("category");
    }
    get image(){
        return this.addVeges.get("image");
    }
  
    get price(){
        return this.addVeges.get("price")
    }

    displayVeges(vegesParam:IVeges|null|undefined):void{
        
        this.veges=vegesParam;
        if(this.veges){
            this.addVeges.reset();
            if(this.veges.id===0){
                this.pageTitle='Add Product';
            }
            else{
                this.pageTitle=`Edit Product: ${this.veges.name}`;
            }
            this.addVeges.patchValue({
                id:this.veges.id,
                name:this.veges.name,
                category:this.veges.category,
                image:this.veges.image,
                price:this.veges.price
            })
        }
    }
    saveVeges(originalVeges:IVeges):void{
        if(this.addVeges.valid){
            if(this.addVeges.dirty){
                const veges={...originalVeges,...this.addVeges.value};
                console.log(veges,'save veges of veges add component');
            if(veges.id==0){
                this.store.dispatch(VegesActions.createVeg({veges}))
            }
            else{
                this.store.dispatch(VegesActions.updateVeg({veges}));
            }
            }
            this.router.navigate(['veges']);
        }
    }
    deleteVeges(veges:IVeges):void{
        if(veges&&veges.id){
            if(confirm(`Are u sure you want to delete ${veges.name} details`)){
                this.store.dispatch(VegesActions.deleteVeg({vegesId:veges.id}));
            }
            else{
                this.store.dispatch(VegesActions.clearCurrentVeg());
            }
        }
    }
    




  }