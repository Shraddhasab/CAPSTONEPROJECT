import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { getTestBed, inject, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { of } from "rxjs";
import {  IVeges } from '../veges/veges';
import { CartService } from './cart.service';

describe('Cart Service', () => {
    let service: CartService;
    let injector: TestBed;
    let httpMock: HttpTestingController;
    let veges:IVeges[]=[];
    beforeEach(async () => {
        TestBed.configureTestingModule({
            imports:[HttpClientTestingModule, ReactiveFormsModule,FormsModule],
            providers: [ CartService ] 
        });
        service=TestBed.get(CartService)
        injector = getTestBed();
        veges=[
            {
                "id":1,
                "name":"tomato",
                "category":"vegetables",
                "image":"../assets/images/tom.jpeg",
                
                "price":200,
                
                },
                {
                    "id":2,
                    "name":"Lady's finger",
                    "category":"vegetables",
                    "image":"../assets/images/lady.jpg",
                    "price":100,
                    
                }
        ];
        service.cart=veges;

        httpMock=injector.get(HttpTestingController);
    });

    it('should create', () => {
    expect(service).toBeTruthy();
    });
     


    it('should check addtoCart()', () => {
    let vegetable ={
                "id":1,
                "name":"tomato",
                "category":"vegetables",
                "image":"../assets/images/tom.jpeg",
                "price":100,
    };
        
         
         veges=[...veges,vegetable];
         service.cart.push(vegetable);
         service.addtoCart(vegetable);
         expect(service.cart.length).toEqual(4);
        });

    it('should check emptyCart()', () => {
        let vegetable ={
                "id":1,
                "name":"tomato",
                "category":"vegetables",
                "image":"../assets/images/tom.jpeg",
                "price":100,
                
         };
                
                 
        veges=[...veges,vegetable];
        service.cart.push(vegetable);
        service.emptyCart();
        expect(service.cart.length).toEqual(0);
        });
});
