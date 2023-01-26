import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './cart/checkout.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './login/auth-guard.service';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

import { VegesComponent } from './veges/veges.component';

const routes: Routes = [
  {
    path:'home',component:HomeComponent
  },
  {
    path:'app-aboutus',component:AboutusComponent
  },
  {
    path:'app-contactus',component:ContactusComponent
  },
 
  {
    path:'veges',
    loadChildren:()=>import('src/app/veges/veges.module').then(m=>m.VegesModule)
  },
  {
    path:'',redirectTo:'home',pathMatch:'full'
  },
  {
    path:'login',component:LoginComponent
  },
  {
    path:'cart',
    loadChildren:()=>import('src/app/cart/cart.module').then(m=>m.CartModule)
  },
  {
    path:'**',component:PagenotfoundComponent
  }
  
 
 
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
