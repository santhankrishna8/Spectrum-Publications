// books.component.ts

import { Component,OnInit } from '@angular/core';
import { createProductList,changeQuantity,key,quantity } from 'src/assets/books.js';
@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})

export class BooksComponent implements OnInit{

  ngOnInit() {
    createProductList();
    
  }
  changeQuantity(key,quantity){
    
  }
}