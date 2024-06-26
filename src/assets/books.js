export function createProductList() {
    console.log("hello");
    let totalPrice = 0;
    const ArrProducts = [
        {
            id: 1,
            name: "HTML",
            image: "assets/New folder/python.png",
            price: "1000",
            rating: 5,
            quantity:0
        },
        {
            id: 2,
            name: "C",
            image: "assets/New folder/c.png",
            price: "2000",
            rating: 3,
            quantity:0
        },
        {
            id: 3,
            name: "CSS",
            image: "assets/New folder/css3.png",
            price: "6000",
            rating: 4,
            quantity:0
        },
        {
            id: 4,
            name: "CSS",
            image: "assets/New folder/css3.png",
            price: "8000",
            rating: 5,
            quantity:0
        },
        {
            id: 5,
            name: "GIT",
            image: "assets/New folder/git.png",
            price: "7000",
            rating: 5,
            quantity:0
        },
        {
            id: 6,
            name: "HTML",
            image: "assets/New folder/html5.png",
            price: "5000",
            rating: 5,
            quantity:0
        },
        {
            id: 7,
            name: "Python",
            image: "assets/New folder/python.png",
            price: "1000",
            rating: 5,
            quantity:0
        },
        {
            id: 2,
            name: "C",
            image: "assets/New folder/c.png",
            price: "2000",
            rating: 5,
            quantity:0
        },
        {
            id: 3,
            name: "CSS",
            image: "assets/New folder/css3.png",
            price: "6000",
            rating: 5,
            quantity:0
        },
        {
            id: 4,
            name: "Typescript",
            image: "assets/New folder/typescript.png",
            price: "8000",
            rating: 5,
            quantity:0
        },
        {
            id: 5,
            name: "GIT",
            image: "assets/New folder/git.png",
            price: "7000",
            rating: 5,
            quantity:0
        },
        {
            id: 6,
            name: "HTML",
            image: "assets/New folder/html5.png",
            price: "5000",
            rating: 5,
            quantity:0
        },
    ];
    const body = document.querySelector("body");
    const products = document.querySelector(".products");
    const productList = document.querySelector(".productList");
    const quantity = document.querySelector('.quantity');
    const total = document.querySelector('.total');
    const checkoutList = [];

    document.querySelector('.cart').style.display = 'none';
    document.querySelector('.basket i').addEventListener('click', function() {
        document.querySelector('.cart').style.display = 'block';
    });
    document.querySelector('.close').addEventListener('click', function() {
        document.querySelector('.cart').style.display = 'none';
    });
    
    ArrProducts.forEach((item, key) => {
        const div = document.createElement("div");
        div.classList.add("item");
        div.style.textAlign = "center";
        div.style.padding = "20px";
        div.style.width = "200px";
        div.style.marginTop = "40px";
        div.style.borderRadius = "20px";
        div.style.boxShadow = "0 0px 50px #757676";
        div.style.letterSpacing = "1px";
        div.style.cursor = "pointer";

        let star = "";
        
        
        for (let i = 0; i < item.rating; i++) {
            star += `<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
            <i style="color:#ff9c1a;" class="fa fa-star"></i>`;
        }

        div.innerHTML = `<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <img src="${item.image}" style="max-height:200px;max-width:200px;object-fit:contain; height:130px;
        filter: drop-shadow(10px 10px 5px #d3d3d3);"/>
        <div class="name" style="font-weight:600;">${item.name}</div>
        <div class="price" style="margin:10px;"><small>₹</small>${item.price}</div>
        <div class="rating" >Rating : ${star}</div>
        <button class="add-to-cart-button" data-id="${item.id}" style="background-color:black;color:#fff;padding:5px 15px;border-radius:20px;margin-top:10px;cursor:pointer;border:none;outline:none;"><i class="fa fa-cart-plus" style="font-size:20px;margin-right:5px;"></i>Add to cart</button>
        `;
       
        products.appendChild(div);
       
    });

    products.addEventListener('click', (event) => {
        const target = event.target;
        if (target.classList.contains('add-to-cart-button')) {
            const productId = target.dataset.id;
            if (checkoutList[productId] == null) {
                checkoutList[productId] = ArrProducts[productId - 1];
                checkoutList[productId].quantity = 1;
            } else {
                checkoutList[productId].quantity += 1;
            }
            console.log('Adding product to cart:', ArrProducts[productId - 1]);
            reloadCart();
        }
    });

    function reloadCart() {
        productList.innerHTML = " ";
        let count = 0;
        let totalPrice = 0;
        checkoutList.forEach((item, key) => {
            totalPrice += parseInt(item.price * item.quantity);
            count += item.quantity;
            let li = document.createElement("li");
            li.innerHTML = `
                <img style="height:20px;width:30px;background:#fff;object-fit:contain;" src="${item.image}"/>
                <div>${item.name}</div>
                <div>${item.price}</div>
                <div style="display:flex;align-items:center;justify-content:center;">
                    <button class="decrement-btn" style="width:25px;height:25px;border-radius:50%;border:none;outline:none;cursor:pointer;font-size:20px;text-align:center;">-</button>
                    <div class="count" style="padding:10px;" >${item.quantity}</div>
                    <button class="increment-btn" style="width:25px;height:25px;border-radius:50%;border:none;outline:none;cursor:pointer;font-size:20px;text-align:center;">+</button>
                </div>
            `;
            const decrementBtn = li.querySelector('.decrement-btn');
            decrementBtn.addEventListener('click', function() {
                // Decrement item quantity by 1
                item.quantity -= 1;
                // Update the count displayed in the UI
                const countElement = li.querySelector('.count');
                countElement.textContent = item.quantity;
                // If quantity reaches zero, remove the item from the cart
                if (item.quantity <= 0) {
                    // Remove the item from the cart
                    delete checkoutList[key];
                    // Remove the item's HTML element from the DOM
                    li.parentNode.removeChild(li);
                }
                // Recalculate total price and update UI
                updateTotalPrice();
            });

            // Add event listener to increment button
            const incrementBtn = li.querySelector('.increment-btn');
            incrementBtn.addEventListener('click', function() {
                // Increment item quantity by 1
                item.quantity += 1;
                // Update the count displayed in the UI
                const countElement = li.querySelector('.count');
                countElement.textContent = item.quantity;
                // Recalculate total price and update UI
                updateTotalPrice();
            });

            productList.style.padding = "15px";
            li.style.padding = "5px";
            li.style.display = "grid";
            li.style.gridTemplateColumns = "100px repeat(3,1fr)";
            li.style.color = "#fff";
            li.style.rowGap = "10px";
            li.style.marginBottom = "20px";
            li.style.borderBottom = "1px solid";
            li.style.alignItems = "center";

            productList.appendChild(li);
        });

        total.innerHTML = `<small>Subtotal (${count} items)</small>₹` + totalPrice;
        quantity.innerHTML = count;
    }

    function updateTotalPrice() {
        let count = 0;
        totalPrice = 0;
        checkoutList.forEach((item, key) => {
            totalPrice += parseInt(item.price * item.quantity);
            count += item.quantity;
        });
        total.innerHTML = `<small>Subtotal (${count} items)</small>₹` + totalPrice;
        quantity.innerHTML = count;
        
        return totalPrice;
    }
    


    const tpi = updateTotalPrice();
    console.log("Total Price:", tpi);
    return tpi;
}




export function loadRazorpay (totalPrice) {
        if (totalPrice === undefined) {
            console.error('Total price is undefined. Unable to proceed with Razorpay.');
            return;
        }
    
        // Use this.totalPrice to set the amount in the Razorpay options
        
         const options = {
            "key": "rzp_live_AYzcI2d6Jjq36A",
            "amount":totalPrice*100,
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
            "handler": function (response) {
              alert(response.razorpay_payment_id);
            },
            "modal": {
              "ondismiss": function (){
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
        const buttonElement = document.getElementById('rzp-button1');
        buttonElement.onclick = function (e) {
          rzp1.open();
          e.preventDefault();
          console.log("hi");
        };
}