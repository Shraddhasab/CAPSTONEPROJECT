import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { catchError, Observable, tap, throwError } from "rxjs";
import { Login } from "./login";

@Injectable({
    providedIn:'root'
})
export class AuthService{

    currentUser!:Login |null;
    redirectToUrl!:string;
   
    users: Login[] = [
        {
            id: 1,
            username: 'shraddha',
            password: 'shraddha',
            isAdmin: true

        },
        {
            id: 2,
            username: 'user',
            password: 'user',
            isAdmin: false

        }
    ]
    
    constructor(private router:Router){}

    isLoggedIn(): boolean {
        const cu = sessionStorage.getItem("currentUser");
        if (cu != null) {
            this.currentUser = JSON.parse(cu);
        }
        return !!this.currentUser;
    }
    login(username: string, password: string): void {
        this.users.forEach((u) => {
            if (username == u.username && password == u.password) {
                this.currentUser = u;
                sessionStorage.setItem("currentUser", JSON.stringify(this.currentUser));
            }
        });
    }
    logOut(): void {
        sessionStorage.removeItem('currentUser');
        this.currentUser = null;
        this.router.navigate(['/home']);
    }
    isAdmin(): boolean {
        if (this.currentUser)
            return this.currentUser.isAdmin;
            this.router.navigate(['addveges'])

        return false;

    }
}