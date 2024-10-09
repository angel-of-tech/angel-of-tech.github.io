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

/ Form success
const form = document.getElementById('form');
const result = document.getElementById('result');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  const formData = new FormData(form);
  const object = Object.fromEntries(formData);
  const json = JSON.stringify(object);
  result.innerHTML = "Please wait..."

    fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: json
        })
        .then(async (response) => {
            let json = await response.json();
            if (response.status == 200) {
                result.innerHTML = json.message;
            } else {
                console.log(response);
                result.innerHTML = json.message;
            }
        })
        .catch(error => {
            console.log(error);
            result.innerHTML = "Something went wrong!";
        })
        .then(function() {
            form.reset();
            setTimeout(() => {
                result.style.display = "none";
            }, 3000);
        });
});

//Fix stale form data
window.onload = function() {
    // Reset the form fields when the page loads
    document.getElementById("form").reset();
};
