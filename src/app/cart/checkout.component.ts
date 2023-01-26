import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  checkoutForm!:NgForm;
  title:string='Payment';
  ngOnInit(): void {}
  constructor(private router:Router){}
  
  onSubmit(checkoutForm:NgForm){
    alert('Payment Successfull');
    this.router.navigate(['home']);
  }
}
