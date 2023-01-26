import { Injectable } from "@angular/core";
import { InMemoryDbService } from "angular-in-memory-web-api";

import { Login } from "../login/login";
import { IVeges } from "../veges/veges";


@Injectable({
    providedIn:'root'
})
export class InMemoryEventDbService implements InMemoryDbService{

    createDb() {
        /* const cart:Cart[]=[
            {
            "name":'tomato',
            "category":'vegetables',
            "image":'../assets/images/tom.jpeg',
            "price":200,
            "kg":0,
            },
            {
                
                "name":"Lady's finger",
                "category":"vegetables",
                "image":"../assets/images/lady.jpg",
                "price":100,
                "kg":0,
            },
            {
                
                "name":"Cabbage",
                "category":"vegetables",
                "image":"../assets/images/cab.jpeg",
                "price":60,
                "kg":0,
            }, 
            {
                
                "name":"Carrot",
                "category":"vegetables",
                "image":"../assets/images/car.jpeg",
                "price":75,
                "kg":0,
            },
            {
                
                "name":"Beans",
                "category":"vegetables",
                "image":"../assets/images/beans1.jpg",
                "price":60,
                "kg":0,
            },
            {
                
                "name":"Radish",
                "category":"vegetables",
                "image":"../assets/images/radish1.jpg",
                "price":50,
                "kg":0,
            },
            {
                
                "name":"Beetroot",
                "category":"vegetables",
                "image":"../assets/images/beetroot.jpg",
                "price":80,
                "kg":0,
            },
            {
                
                "name":"Brinjal",
                "category":"vegetables",
                "image":"../assets/images/brinjal.jpg",
                "price":90,
                "kg":0,
            },

        ] */
        const users:Login[]=[
            {
                "id":1,
                "username":'shraddha',
                "password":'shraddha',
                "isAdmin":true
            },
            {
               "id":2,
               "username":'user1',
               "password":'user1',
               "isAdmin":false
            },
            {
                "id":3,
                "username":'user2',
                "password":'user2',
                "isAdmin":false
            }
        ]
        const veges: IVeges[]=[
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
                "price":100
                
            },
            {
                "id":3,
                "name":"Cabbage",
                "category":"vegetables",
                "image":"../assets/images/cab.jpeg",
                "price":100
                
            }, 
            {
                "id":4,
                "name":"Carrot",
                "category":"vegetables",
                "image":"../assets/images/car.jpg",
                "price":100
                
            },
            {
                "id":5,
                "name":"Beans",
                "category":"vegetables",
                "image":"../assets/images/beans1.jpg",
                "price":100
                
            },
            {
                "id":6,
                "name":"Radish",
                "category":"vegetables",
                "image":"../assets/images/radish1.jpg",
                "price":100
                
            },
            {
                "id":7,
                "name":"Beetroot",
                "category":"vegetables",
                "image":"../assets/images/beetroot.jpg",
                "price":100
                
            },
            {
                "id":8,
                "name":"Brinjal",
                "category":"vegetables",
                "image":"../assets/images/brinjal.jpg",
                "price":100
                
            },
        ];
        return{veges,users};
        }
    }
