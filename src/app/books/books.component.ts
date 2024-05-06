// books.component.ts
import { AuthService } from './auth.service';
import { Component,OnInit } from '@angular/core';
import { createProductList,loadRazorpay } from 'src/assets/books.js';

declare var Razorpay: any;
@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})


export class BooksComponent implements OnInit{
 
  constructor(){}
  ngOnInit() {
    const totalPrice = createProductList();
   
    console.log('Total Price:', totalPrice); 
    loadRazorpay(totalPrice);
  }
}


