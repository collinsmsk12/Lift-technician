// Smooth Scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetElement = document.querySelector(this.getAttribute('href'));
        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
        });
    });
});

// Form Validation and Submission Feedback
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Grab the values from the form fields
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const formMessage = document.getElementById('form-message');

    // Basic form validation (can be extended)
    if (name === "" || email === "" || message === "") {
        formMessage.textContent = "Please fill out all fields.";
        formMessage.style.color = "red";
    } else if (!validateEmail(email)) {
        formMessage.textContent = "Please enter a valid email address.";
        formMessage.style.color = "red";
    } else {
        // Form submission successful (you can add backend form submission code here)
        formMessage.textContent = "Thank you for contacting us! We will get back to you soon.";
        formMessage.style.color = "green";

        // Clear form fields
        document.getElementById('contactForm').reset();
    }
});

// Email Validation Function
function validateEmail(email) {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
}

// Optional: Back to Top Button
const backToTopBtn = document.createElement('button');
backToTopBtn.textContent = "↑";
backToTopBtn.classList.add('back-to-top');
document.body.appendChild(backToTopBtn);

// Show/Hide Back to Top button on scroll
window.addEventListener('scroll', function() {
    if (window.scrollY > 300) {
        backToTopBtn.style.display = 'block';
    } else {
        backToTopBtn.style.display = 'none';
    }
});

// Scroll to top when the button is clicked
backToTopBtn.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});


