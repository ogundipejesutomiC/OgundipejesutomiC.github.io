// scripts.js

// Display Review Form
document.getElementById("add-review").addEventListener("click", function() {
    document.getElementById("review-form").style.display = "block";
});

// Submit a Review
document.getElementById("submit-review").addEventListener("click", function() {
    const reviewText = document.getElementById("review-text").value;
    if (reviewText) {
        const reviewList = document.getElementById("review-list");
        const newReview = document.createElement("p");
        newReview.textContent = reviewText;
        reviewList.appendChild(newReview);
        document.getElementById("review-text").value = ""; // Clear the text area
        document.getElementById("review-form").style.display = "none";
    }
});

// Contact Button
document.getElementById("contact-btn").addEventListener("click", function() {
    const email = prompt("Please enter your email:");
    if (email) {
        alert("Thank you! We will get back to you soon.");
        // Here you can add email integration (e.g., using EmailJS or a backend service)
    }
});
