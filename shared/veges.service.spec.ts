import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { getTestBed, inject, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { of } from "rxjs";import { IVeges } from '../veges/veges';
import { VegesService } from './veges.service';

describe('Veges Service', () => {
    let service: VegesService;
    let injector: TestBed;
    let httpMock: HttpTestingController;
    let veges:IVeges[]=[];
    beforeEach(async () => {
        TestBed.configureTestingModule({
            imports:[HttpClientTestingModule, ReactiveFormsModule, FormsModule],
            providers: [ VegesService ]
        });
        service=TestBed.get(VegesService)
        injector = getTestBed();

        veges=[
            {
                "id":1,
                "name":"tomato",
                "category":"vegetables",
                "image":"../assets/images/tom.jpg",
                "price":200
                
                },
                {
                    "id":2,
                    "name":"Lady's finger",
                    "category":"vegetables",
                    "image":"../assets/images/lady.jpg",
                    "price":200
                   
                }
        ];

        httpMock=injector.get(HttpTestingController);
    });

    it('should create', () => {
    expect(service).toBeTruthy();
    });

    it('should check getVegesById()',()=>{
        let veges:IVeges;
        let vegetable={
                "id":1,
                "name":"tomato",
                "category":"vegetables",
                "image":"../assets/images/tom.jpg",
                "price":200
                

        };
        const test=spyOn(service,'getVegesById').and.returnValue(of(vegetable));
        service.getVegesById(1).subscribe(response=>{
            veges=response;
            expect(veges).toEqual(vegetable);

        });
        expect(test).toHaveBeenCalled();
    });  

    it('should check createVeg()',()=>{
        let vegetable1={
            "id":2,
            "name":"Lady's finger",
            "category":"vegetables",
            "image":"../assets/images/lady.jpg",
            "price":200
            
        };
        let vegetable2={
                "id":3,
                "name":"Cabbage",
                "category":"vegetables",
                "image":"../assets/images/cab.jpg",
                "price":200
                
        };
        veges=[...veges,vegetable1];
        service.createVeg(vegetable1).subscribe(
            response=>expect(response).toEqual(vegetable1)
        )
        expect(veges.length).toEqual(3);
        const req=httpMock.expectOne(service.url);
        expect(req.request.method).toBe('POST');
        req.flush(vegetable1);

    });

    it('should check updateVeg()',()=>{
        let vegetable2={
            "id":3,
            "name":"Cabbage",
            "category":"vegetables",
            "image":"../assets/images/cab.jpg",
            "price":200
            
    };
    service.updateVeg(vegetable2).subscribe(
        response=>expect(response).toEqual(vegetable2)
    )
    const req=httpMock.expectOne(`${service.url}/${vegetable2.id}`);
    expect(req.request.method).toBe('PUT');
    req.flush({vegetable2});
    });

    it('should check deleteVeg()',()=>{
        let vegetable1={
            "id":2,
            "name":"Lady's finger",
            "category":"vegetables",
            "image":"../assets/images/lady.jpg",
            "price":200
            
        };
        let vegetable2={
            "id":3,
            "name":"Cabbage",
            "category":"vegetables",
            "image":"../assets/images/cab.jpg",
            "price":200
            
    };
    veges=[...veges,vegetable1,vegetable2];
    service.deleteVeg(vegetable2.id).subscribe(
        reponse=>console.log(reponse)
    );
    expect(veges.length).toEqual(4);
    const req=httpMock.expectOne(`${service.url}/${vegetable2.id}`);
    expect(req.request.method).toBe('DELETE');
    req.flush(vegetable2);
    });
});
