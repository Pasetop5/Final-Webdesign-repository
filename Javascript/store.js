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



/* JavaScript for Women and Kid's Pages Work by Chris Balarabe Oghumah 23251051 */
(function() {
    // For all elements with the class "more-info-btn" (all "Purchase" buttons)
    const purchaseButtons = document.querySelectorAll('.information');

    // Function to handle purchase button click
    function purchaseHandler() {
        alert("Order Not aviable, please click on our more info to fill the form for more regular update");
    }

    // Loop through each purchase button and add event listener
    purchaseButtons.forEach(button => {
        button.addEventListener('click', purchaseHandler);
    });

    // For all elements with the class "product-img"
    const productImages = document.querySelectorAll('.item-img');

    // Function to handle product image click
    function productImageHandler() {
        alert("Orders Not aviable, please click on our more info to fill the form for more regular update");
    }

    // Loop through each product image and add event listener
    productImages.forEach(image => {
        image.addEventListener('click', productImageHandler);
    });
})();