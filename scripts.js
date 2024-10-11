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

// Script 3 
//Check if the form was previously submitted successfully
if (localStorage.getItem('formSubmitted') === 'true') {
    form.reset();  // Clear stale form data
    localStorage.removeItem('formSubmitted');  // Clear the flag for future visits
}

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = new FormData(form);
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);
    result.innerHTML = "Please wait...";

    fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Bearer ad321f7b-cd4a-435d-8acd-cc0c7e6a86e4'  // Make sure to add your API key
        },
        body: json
    })
    .then(async (response) => {
        let json = await response.json();
        if (response.status == 200) {
            result.innerHTML = json.message;
            localStorage.setItem('formSubmitted', 'true');  // Set the flag
        } else {
            result.innerHTML = json.message;
        }
    })
    .catch(error => {
        console.log(error);
        result.innerHTML = "Something went wrong!";
    })
    .finally(() => {
        setTimeout(() => {
            form.reset();  // Clear form fields after success
            result.style.display = "none";
        }, 5000); // Display the result for 5 seconds before hiding
    });
});

// Reset form on window load to ensure no stale data remains
//window.onload = function() {
    //form.reset();
//};

