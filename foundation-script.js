// Hamburger menu toggle for mobile
document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.getElementById('hamburger-menu');
    const navLinks = document.getElementById('nav-links');

    hamburger.addEventListener('click', function () {
        navLinks.classList.toggle('open');
    });

    // Newsletter form JS backend simulation
    const newsletterForm = document.getElementById('newsletter-form');
    const newsletterEmail = document.getElementById('newsletter-email');
    const newsletterMessage = document.getElementById('newsletter-message');

    newsletterForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const email = newsletterEmail.value.trim();
        if (validateEmail(email)) {
            newsletterMessage.textContent = "Thank you for subscribing!";
            newsletterMessage.style.color = "#fff";
            newsletterEmail.value = "";
            // Here you could add AJAX to send to your backend
        } else {
            newsletterMessage.textContent = "Please enter a valid email address.";
            newsletterMessage.style.color = "#ffb6d5";
        }
    });

    function validateEmail(email) {
        // Simple email regex
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }
});
