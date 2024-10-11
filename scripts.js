document.addEventListener("DOMContentLoaded", function() {
    // Get the current URL
    const currentLocation = window.location.href;
    
    // Get all the links in the navigation
    const menuItems = document.querySelectorAll("nav ul li a");
    
    // Loop through the menu items
    menuItems.forEach(item => {
        // Check if the menu item URL matches the current page URL
        if (item.href === currentLocation) {
            // Add the 'active' class to the matching item
            item.classList.add('active');
        }
    });
});

// Script 2: Dropdown menu functionality for "projects"
document.getElementById("projectsButton").addEventListener("click", function() {
    const dropdown = document.getElementById("dropdownMenu");
    dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
});

const form = document.getElementById('form');
const result = document.getElementById('result');



// Reset form on window load to ensure no stale data remains
//window.onload = function() {
    //form.reset();
//};

document.addEventListener("DOMContentLoaded", function() {
    // Get the current URL
    const currentLocation = window.location.href;
    
    // Get all the links in the navigation
    const menuItems = document.querySelectorAll("nav ul li a");
    
    // Loop through the menu items
    menuItems.forEach(item => {
        // Check if the menu item URL matches the current page URL
        if (item.href === currentLocation) {
            // Add the 'active' class to the matching item
            item.classList.add('active');
        }
    });
});

// Dropdown menu functionality for "projects"
document.getElementById("projectsButton").addEventListener("click", function() {
    const dropdown = document.getElementById("dropdownMenu");
    dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
});

// Script 3 Handle form submission
const form = document.getElementById('form');

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Prepare form data
    const formData = new FormData(form);

    // Perform an AJAX request to submit the form
    fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
    })
    .then(response => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error('Form submission failed.');
        }
    })
    .then(data => {
        alert('Form submitted successfully!');
        form.reset(); // Optionally reset the form after submission
    })
    .catch(error => {
        alert('There was an error submitting the form.');
        console.error(error);
    });
});

//Script 4:
document.addEventListener("DOMContentLoaded", function() {
    // Reset the form when the page is loaded to prevent stale data
    document.getElementById('form').reset();
});




