var  cart_items=[];

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

// Load cart items from localStorage if available
window.onload = function() {
    const storedCartItems = JSON.parse(localStorage.getItem('cartItems'));
    if (storedCartItems) {
      cart_items = storedCartItems;
      updateCartCount();
    }
  };


// to increase cart count when addtocart is clicked .

function updateCartCount(){
  let cartCount=document.getElementById('cartcount');
    if (cart_items!=[]){
        cartCount.innerText=cart_items.length;
    }
}

// displaying items added to cart in cartpage in tabular format .
const cartItems = JSON.parse(localStorage.getItem('cartItems'));// converting JSON object to JS object .
const tableContainer = document.getElementById('table-container');
function createTable() {
    if(cartItems.length===0){
        tableContainer.innerHTML = "<p>Cart is empty.</p>";
    }
    else{
        let table = '<table>';
        table +=`<tr>
                    <th>Product Image</th>
                    <th>Product Name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Remove</th>
                </tr>`;
    cartItems.forEach(item => {
        table += `<tr>
                    <td><img src="${item.image_url}" alt="${item.name}" ></td>
                    <td>${item.name}</td>
                    <td>${item.price}</td>
                    <td>1</td>
                    <td><i id="icon" class="fa-solid fa-trash" ></i></td>
                </tr>`;

    });

    table +='</table>';
    tableContainer.innerHTML = table;
};
};
createTable();
updateCartCount();

// to remove an item from cart .

/*function removeItem(position){
    cartItems.splice(position,1);
    localStorage.set('cartItems',JSON.stringify(cart_items));
    
};createTable();
updateCartCount();*/


// to display order summary in cartpage.

var summary=document.getElementById('summary');
var order_Summary='<div  class="ordersummary">';
    order_Summary+=`<h3>ORDER SUMMARY</h3>
                    <hr>
                    <pre class="noofitems">Total      ${cartItems.length}  Items</pre>
                    <p>Free shipping</p>
                    <pre class="checkbox"><input id="checkbox" type="checkbox"/>  Payment through ICICI creditcard gives 5% discount</pre>
                    <pre class="price">TotalPrice  <i class="fa-solid fa-dollar-sign">  <div id="totalprice">0</div></pre>`  
    order_Summary+='</div>';
    summary.innerHTML=order_Summary;

// to calculate total price of items in a cart .

var totalprice=document.getElementById('totalprice');
let price=0;
function totalPrice(){
    cartItems.forEach((item)=>{
    price+=item.price*item.quantity;
    });
    const checkbox=document.getElementById('checkbox').checked;
    if (checkbox){
        return (0.95*price);
    }
    else{
        return price;
    };
};
var orderprice=totalPrice();
totalprice.innerText=orderprice;


