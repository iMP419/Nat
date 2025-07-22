// Hamburger menu toggle for mobile
document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.getElementById('hamburger-menu');
    const navLinks = document.getElementById('nav-links');
    const navLinksArr = document.querySelectorAll('.nav-link');
    const loader = document.getElementById('loader');
    const newsletterForm = document.getElementById('newsletter-form');
    const newsletterEmail = document.getElementById('newsletter-email');
    const newsletterMessage = document.getElementById('newsletter-message');

    hamburger.addEventListener('click', function () {
        navLinks.classList.toggle('open');
    });

    // Animated page transition loader
    function showLoader() {
        loader.classList.remove('hide');
    }
    function hideLoader() {
        loader.classList.add('hide');
    }

    // Hide loader on page load
    window.onload = function () {
        setTimeout(hideLoader, 900);
    };

    // Simulate loader on anchor navigation (for demo)
    navLinksArr.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            showLoader();
            setTimeout(() => {
                hideLoader();
                const targetId = link.getAttribute('href').replace('#', '');
                if (targetId && document.getElementById(targetId)) {
                    document.getElementById(targetId).scrollIntoView({behavior: "smooth"});
                }
                if (navLinks.classList.contains('open')) navLinks.classList.remove('open');
            }, 900);
        });
    });

    // Newsletter form JS backend simulation
    newsletterForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const email = newsletterEmail.value.trim();
        if (validateEmail(email)) {
            newsletterMessage.textContent = "Thank you for subscribing!";
            newsletterMessage.style.color = "var(--primary-dark)";
            newsletterEmail.value = "";
        } else {
            newsletterMessage.textContent = "Please enter a valid email address.";
            newsletterMessage.style.color = "#e74c3c";
        }
    });

    function validateEmail(email) {
        // Simple email regex
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }
});
