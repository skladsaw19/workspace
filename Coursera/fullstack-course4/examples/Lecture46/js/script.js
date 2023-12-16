

let currentTextSize = 12; // Current user setting
let tempTextSize = currentTextSize; // Temporary storage before user confirms changes

// User decides to change text size to 14 using a settings interface
tempTextSize = 14;

// If the user confirms the changes, update the current setting
function applyTextSizeChange() {
    currentTextSize = tempTextSize;
}

// If the user cancels the changes, `currentTextSize` remains unchanged.


let shoppingCart = {
  items: [],
  totalPrice: 0
};

// Function to add an item to the cart
function addItemToCart(item) {
  shoppingCart.items.push(item);
  shoppingCart.totalPrice += item.price;
}

// Example item
let newItem = {
  name: "JavaScript Cookbook",
  price: 29.99
};

// Add item to the cart
addItemToCart(newItem);

// At this point, `shoppingCart` is updated by reference wherever it's used.





