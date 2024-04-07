// books.component.ts
import { AuthService } from './auth.service';
import { Component,OnInit } from '@angular/core';
import { createProductList,changeQuantity,key,quantity } from 'src/assets/books.js';

declare var Razorpay: any;
@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})


export class BooksComponent{
  constructor(){}
  ngOnInit() {
    createProductList();
    this.loadRazorpay();
  }
  loadRazorpay() {
    
     const options = {
        "key": "rzp_test_B6lfefauct5aZb",
        "amount": "1000",
        "currency": "INR",
        "description": "Acme Corp",
        "image": "https://s3.amazonaws.com/rzp-mobile/images/rzp.jpg",
        "prefill": {
          "email": "santhankrishna18@gmail.com",
          "contact": "+916304349076"
        },
        "config": {
          "display": {
            "blocks": {
              "utib": {
              
                "name": "Pay using Axis Bank",
                "instruments": [
                  {
                    "method": "card",
                    "issuers": ["UTIB"]
                  },
                  {
                    "method": "netbanking",
                    "banks": ["UTIB"]
                  }
                ]
              },
              "upi": {
                "name": "Pay using UPI",
                "instruments": [
                  {
                    "method": "upi"
                  }
                ]
              },
              
              "other": {
                "name": "Other Payment modes",
                "instruments": [
                  {
                    "method": "card"
                  },
                  {
                    "method": "netbanking"
                  }
                ]
              }
            },
            "hide": [],
            "sequence": ["block.utib", "block.upi", "block.other"], // Adjust the sequence as needed
            "preferences": {
              "show_default_blocks": false
            }
          }
        },
        "handler": function (response: any) {
          alert(response.razorpay_payment_id);
        },
        "modal": {
          "ondismiss": function () :any{
            if (confirm("Are you sure, you want to close the form?")) {
              console.log("Checkout form closed by the user");
            } else {
              console.log("Complete the Payment");
            }
          }
        }
      };
    const rzp1 = new Razorpay(options);

    // Add the non-null assertion operator (!) after getElementById
    const buttonElement = document.getElementById('rzp-button1')!;
    buttonElement.onclick = function (e) {
      rzp1.open();
      e.preventDefault();
      console.log("hi");
    };
  }
}
