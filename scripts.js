// Script 1: Set active class on current menu item
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
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("projectsButton").addEventListener("click", function() {
        const dropdown = document.getElementById("dropdownMenu");
        dropdown.classList.toggle("active"); // Use class toggle instead of inline display style
    });
});

// Script 3: Handle form submission
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
        //form.reset(); // Optionally reset the form after submission
    })
    .catch(error => {
        alert('There was an error submitting the form.');
        console.error(error);
    });
});

// Script 4: Reset form if page is loaded from cache (e.g. back button)
window.addEventListener('pageshow', function(event) {
    if (event.persisted) {
        // Reset the form if the page is loaded from cache
        document.getElementById('form').reset();
    }
});




