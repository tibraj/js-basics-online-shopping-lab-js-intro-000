var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}
var str1 = " has been added to your cart.";
function addToCart(item) {
 var itemObject = {
   itemName: `${item}`,
   itemPrice: Math.floor(Math.random() * 100)
 }
 cart.push(itemObject);
 return itemObject.itemName + str1;
}

function viewCart() {
  if (cart.length === 0) {
    return "Your shopping cart is empty."
  } else if (cart.length === 1) {
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`
  } else if (cart.length === 2) {
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, and ${cart[1].itemName} at $${cart[1].itemPrice}.`
  } else {
    var myString = "In your cart, you have "
    for(var i = 0; i < cart.length - 1; i++) {
      myString = myString + `${cart[i].itemName} at $${cart[i].itemPrice}, `
    }
    return myString + `and ${cart[cart.length - 1].itemName} at $${cart[cart.length - 1].itemPrice}.`
  }
}

function total() {
  total = 0;
  for (var i = 0; i < cart.length; i++) {
  total += cart[i].itemPrice;
}
return total;
}

function removeFromCart(item) {
  for (var i = 0; i < cart.length; i++) {
    if (item === cart[i].itemName) {
      cart.splice(i, 1);
      return cart;
    } else {
      return "That item is not in your cart."
    }
  }
}

function placeOrder(cardNumber) {
  if (typeof(cardNumber) === "undefined") {
    return "Sorry, we don't have a credit card on file for you."
  } else {
    cart = [];
    return `Your total cost is $${total}, which will be charged to the card ${cardNumber}.`
  }
}
