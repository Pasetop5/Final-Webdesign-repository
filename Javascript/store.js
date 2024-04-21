/* Javascript for Product and Men's Page by Temitope Pase */

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



/*Javascript for Contact form by Sylvia*/


// Get references to form elements
const form = document.getElementById('form');
const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const phone = document.getElementById('phone');
const email = document.getElementById('email');
const call = document.getElementById('call');
const phonetext = document.getElementById('phonetext');
const oemail = document.getElementById('oemail');
const comments = document.getElementById('comments');
const terms = document.getElementById('terms');
const promotion = document.getElementById('promotion');
const consultSelect = document.getElementById('consultSelect');

// Add submit event listener to the form
form.addEventListener('submit', e => {
    e.preventDefault(); // Prevent form submission
    validateInputs(); // Call the validation function
});

// Function to set error message for an element
const setError = (element, message) => {
    const chatbox = element.parentElement;
    const errorDisplay = chatbox.querySelector('.error');
    errorDisplay.innerText = message;
    chatbox.classList.add('error'); // Apply error styling
    chatbox.classList.remove('success'); // Remove success styling
}

// Function to set success styling for an element
const setSuccess = element => {
    const chatbox = element.parentElement;
    const errorDisplay = chatbox.querySelector('.error');
    errorDisplay.innerText = ''; // Clear error message
    chatbox.classList.add('success'); // Apply success styling
    chatbox.classList.remove('error'); // Remove error styling
};

// Function to validate form inputs
const validateInputs = () => {
    // Retrieve values of form inputs
    const firstnameValue = firstname.value.trim();
    const lastnameValue = lastname.value.trim();
    const phoneValue = phone.value.trim();
    const emailValue = email.value.trim();
    const callValue = call.checked;
    const phonetextValue = phonetext.checked;
    const oemailValue = oemail.checked;
    const commentsValue = comments.value.trim();
    const termsValue = terms.checked;
    const consultSelectValue = consultSelect.value;

    // Validate first name
    if (firstnameValue === '') {
        setError(firstname, 'First name is required');
    } else {
        setSuccess(firstname);
    }

    // Validate last name
    if (lastnameValue === '') {
        setError(lastname, 'Last name is required');
    } else {
        setSuccess(lastname);
    }

    // Validate phone number
    if (phoneValue.length !== 10 || isNaN(phoneValue)) {
        setError(phone, 'Phone number must be 10 digits');
    } else {
        setSuccess(phone);
    }

    // Validate email
    if (emailValue === '') {
        setError(email, 'Email is required');
    } else {
        setSuccess(email);
    }

    // Validate contact method
    if (!callValue && !phonetextValue && !oemailValue) {
        setError(call.parentElement, 'Select at least one contact method');
    } else {
        setSuccess(call.parentElement);
    }

    // Validate consultation option
    if (consultSelectValue === '') {
        setError(consultSelect, 'Please select a consult option');
    } else {
        setSuccess(consultSelect);
    }

    // Validate terms agreement
    if (!termsValue) {
        setError(terms.parentElement, 'Agree to the terms and conditions');
    } else {
        setSuccess(terms.parentElement);
    }
};
