const productcontainer=document.getElementById('container');
const products=[
    
        {
          "id": 1,
          "name": "Wireless Earbuds",
          "description": "High-quality wireless earbuds with noise cancellation.",
          "price": 49.99,
          "category": "Electronics",
          "stock": 100,
          "rating": 4.5,
          "image_url": "./assets/ear buds.jpg"
        },
        {
          "id": 2,
          "name": "Smartphone",
          "description": "Latest model smartphone with high-resolution camera.",
          "price": 699.99,
          "category": "Electronics",
          "stock": 50,
          "rating": 4.7,
          "image_url": "./assets/samsung-phone.jpg"
        },
        {
          "id": 3,
          "name": "Laptop",
          "description": "Powerful laptop with fast processor and ample storage.",
          "price": 999.99,
          "category": "Computers",
          "stock": 30,
          "rating": 4.6,
          "image_url": "./assets/laptop.jpg"
        },
        {
          "id": 4,
          "name": "Fitness Tracker",
          "description": "Wearable fitness tracker with heart rate monitor.",
          "price": 79.99,
          "category": "Health",
          "stock": 75,
          "rating": 4.3,
          "image_url": "./assets/Fitness-Trackers.jpg"
        },
        {
          "id": 5,
          "name": "Bluetooth Speaker",
          "description": "Portable Bluetooth speaker with excellent sound quality.",
          "price": 29.99,
          "category": "Electronics",
          "stock": 120,
          "rating": 4.4,
          "image_url": "./assets/bluetooth speaker.jpg"
        },
        {
          "id": 6,
          "name": "Running Shoes",
          "description": "Comfortable running shoes with good support.",
          "price": 59.99,
          "category": "Footwear",
          "stock": 200,
          "rating": 4.2,
          "image_url": "./assets/running shoes.jpg"
        },
        {
          "id": 7,
          "name": "Smartwatch",
          "description": "Feature-rich smartwatch with customizable watch faces.",
          "price": 199.99,
          "category": "Electronics",
          "stock": 45,
          "rating": 4.5,
          "image_url": "./assets/smart watch.jpg"
        },
        {
          "id": 8,
          "name": "Electric Toothbrush",
          "description": "Electric toothbrush with multiple brushing modes.",
          "price": 39.99,
          "category": "Health",
          "stock": 80,
          "rating": 4.1,
          "image_url": "./assets/electric toothbrush.jpg"
        },
        {
          "id": 9,
          "name": "Coffee Maker",
          "description": "Automatic coffee maker with programmable settings.",
          "price": 79.99,
          "category": "Home Appliances",
          "stock": 60,
          "rating": 4.3,
          "image_url": "./assets/coffeemaker.jpg"
        },
        {
          "id": 10,
          "name": "Backpack",
          "description": "Durable backpack with multiple compartments.",
          "price": 49.99,
          "category": "Accessories",
          "stock": 150,
          "rating": 4.6,
          "image_url": "./assets/backpack.jpg"
        },
        {
          "id": 11,
          "name": "4K TV",
          "description": "Large screen 4K TV with stunning picture quality.",
          "price": 499.99,
          "category": "Electronics",
          "stock": 20,
          "rating": 4.7,
          "image_url": "./assets/tv.jpg"
        },
        {
          "id": 12,
          "name": "Air Purifier",
          "description": "High-efficiency air purifier with HEPA filter.",
          "price": 129.99,
          "category": "Home Appliances",
          "stock": 40,
          "rating": 4.4,
          "image_url": "./assets/air-purifier.jpg"
        },
        {
          "id": 13,
          "name": "Gaming Console",
          "description": "Next-gen gaming console with stunning graphics.",
          "price": 399.99,
          "category": "Electronics",
          "stock": 25,
          "rating": 4.8,
          "image_url": "./assets/gaming console.jpg"
        },
        {
          "id": 14,
          "name": "Blender",
          "description": "High-speed blender perfect for smoothies and soups.",
          "price": 59.99,
          "category": "Home Appliances",
          "stock": 70,
          "rating": 4.3,
          "image_url": "./assets/blender.jpg"
        },
        {
          "id": 15,
          "name": "Desk Lamp",
          "description": "Adjustable desk lamp with LED light.",
          "price": 24.99,
          "category": "Home Decor",
          "stock": 90,
          "rating": 4.5,
          "image_url": "./assets/desk lamp.jpg"
        },
        {
          "id": 16,
          "name": "Office Chair",
          "description": "Ergonomic office chair with lumbar support.",
          "price": 149.99,
          "category": "Furniture",
          "stock": 35,
          "rating": 4.4,
          "image_url": "./assets/office chair.jpg"
        },
        {
          "id": 17,
          "name": "Yoga Mat",
          "description": "Non-slip yoga mat for all types of exercises.",
          "price": 19.99,
          "category": "Fitness",
          "stock": 110,
          "rating": 4.3,
          "image_url": "./assets/yoga mat.jpg"
        },
        {
          "id": 18,
          "name": "Digital Camera",
          "description": "Compact digital camera with high zoom capability.",
          "price": 299.99,
          "category": "Photography",
          "stock": 40,
          "rating": 4.5,
          "image_url": "./assets/digital camera.jpg"
        },
        {
          "id": 19,
          "name": "Headphones",
          "description": "Noise-cancelling over-ear headphones.",
          "price": 89.99,
          "category": "Electronics",
          "stock": 60,
          "rating": 4.6,
          "image_url": "./assets/headphones.jpg" 
        },
        {
          "id": 20,
          "name": "Water Bottle",
          "description": "Insulated stainless steel water bottle.",
          "price": 15.99,
          "category": "Accessories",
          "stock": 180,
          "rating": 4.4,
          "image_url": "./assets/water bottel.jpg"
        }
      
      
];
// to display products in webpage dynamically using js.

var variousProducts=products.map((item) => {
    return(`<div class="eachitem">
              <h4> ${item.name} </h4>
              <hr>
              <img src="${item.image_url}" alt="image"/>
              <hr>
              <p class="desc"> ${item.description} </p>
              <pre><i class="fa-solid fa-dollar-sign"></i> ${item.price}</pre>
              <p class="category">${item.category}</p>
              <div class="rating">
                  <p><span>${item.stock}</span> are left</p>
                  <p>${item.rating}</p>
              </div>
              <button class="btn" onclick="addToCart(${item.id})">Addtocart</button> 
            </div>`);
});
productcontainer.innerHTML= variousProducts.join(" ");
 

// let us initialize an empty array to add items when clicked on button.
var cart_items=[];

// let us add items into cart_items array .
function addToCart(productId){
  let matchedproduct=products.map((item)=>{item.id===productId});
  let ifitemincart_items=cart_items.find((item)=>{item.id===productId});
  if (ifitemincart_items){
      cart_items.item.quantity+=1;
  }
  else{
      matchedProduct.quantity = 1;
      cart_items.push(matchedproduct);
  };
  localStorage.setItem('cartItems', JSON.stringify(cart_items));
  updateCartCount();
  createTable();
};console.log(cart_items);


// to increase cart count when addtocart is clicked .

function updateCartCount(){
  let cartCount=document.getElementById('cartcount');
    if (cart_items!=[]){
        cartCount.innerText=cart_items.length;
    }
};

window.onload = function() {
  const storedCartItems = JSON.parse(localStorage.getItem('cartItems'));
  if (storedCartItems) {
    cart_items = storedCartItems;
    updateCartCount();
  }
};


/*const cartItems = JSON.parse(localStorage.getItem('cartItems'));
const tableContainer = document.getElementById('table-container');
function createTable() {
    if(cartItems.length===0){
      tableContainer.innerHTML = "<p>Cart is empty.</p>";
      return;
    }  
        let cartTable = '<table>';
        cartTable +=`<tr>
                    <th>Product Image</th>
                    <th>Product Name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                </tr>`;
        cartItems.forEach(item => {
        cartTable += `<tr>
                    <td><img src="${item.image_url}" alt="${item.name}" ></td>
                    <td>${item.name}</td>
                    <td>${item.price}</td>
                    <td>1</td>
                </tr>`;
    });
    cartTable += '</table>';
    tableContainer.innerHTML=cartTable;
    };
    createTable();*/




