// JavaScript for business card

document.addEventListener('DOMContentLoaded', function() {
    // Your JavaScript code here
    console.log('Business card loaded');
    
    // Example: Add click handler for social links
    document.querySelectorAll('.social-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            alert('Social link clicked: ' + this.title);
        });
    });
});
