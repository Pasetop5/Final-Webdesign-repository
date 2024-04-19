/* Javascript for Product and Men's Page by Tope */

// for all elements with the class "more-info-btn" (all "Purchase" buttons)
const purchaseButtons = document.querySelectorAll('.more-info-btn');

// Function to handle purchase button click
function purchaseHandler() {
    alert("Orders coming soon, please click on more info to fill the form and be on the waiting list");
}

// Loop through each purchase button and add event listener
purchaseButtons.forEach(button => {
    button.addEventListener('click', purchaseHandler);
});

// for all elements with the class "product-img"
const productImages = document.querySelectorAll('.product-img');

// Function to handle product image click
function productImageHandler() {
    alert("Orders coming soon, please click on more info to fill the form and be on the waiting list");
}

// Loop through each product image and add event listener
productImages.forEach(image => {
    image.addEventListener('click', productImageHandler);
});
























































































































































































































// for all elements with the class "newpurchase" (all "New Purchase" buttons)
const PurchaseButtons = document.querySelectorAll('.information');

// Function to handle new purchase button click
function PurchaseHandler() {
    alert("This is a new purchase button!");
}

// Loop through each new purchase button and add event listener
newPurchaseButtons.forEach(button => {
    button.addEventListener('click', PurchaseHandler);
});
