// // Get the current URL path
// const currentPath = window.location.pathname.toLowerCase(); // Ensure matching is case-insensitive

// // Get all navigation links
// const navLinks = document.querySelectorAll('.nav-link');

// // Loop through each link and check if it matches the current path
// navLinks.forEach(link => {
//     // Extract the link's path
//     const linkPath = link.getAttribute('href').toLowerCase(); // Ensure matching is case-insensitive

//     // Check if the currentPath ends with the linkPath
//     if (currentPath.endsWith(linkPath)) {
//         link.classList.add('active');
//     }
// });

// Slideshow
let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("slide");
    
    if (slides.length === 0) {
        console.error("No slides found. Ensure that the elements with the class 'slide' are present in the DOM.");
        return;
    }

    // Hide all slides
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; } // Loop back to the first slide

    slides[slideIndex - 1].style.display = "block"; // Show the current slide

    setTimeout(showSlides, 4000); // Change image every 4 seconds
}


//Testimonials


 
$(document).ready(function(){
    $("#testimonial-slider").owlCarousel({
        items:1,
        itemsDesktop:[1000,1],
        itemsDesktopSmall:[979,1],
        itemsTablet:[768,1],
        pagination:true,
        navigation:true,
        navigationText:["",""],
        slideSpeed:1000,
        autoPlay:true
    });
});


// Our Partners
