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

