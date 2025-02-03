document.addEventListener('DOMContentLoaded', function() {
    // Create navigation HTML
    const nav = `
        <nav>
            <div class="nav-container">
                <a href="index.html" class="logo">IT Consulting</a>
                <div class="nav-links">
                    <a href="index.html">Home</a>
                    <a href="services.html">Services</a>
                    <a href="about.html">About Us</a>
                    <a href="contact.html">Contact</a>
                </div>
            </div>
        </nav>
    `;

    // Insert navigation into the page
    document.body.insertAdjacentHTML('afterbegin', nav);
});
