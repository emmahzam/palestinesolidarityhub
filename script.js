// NEWS TICKER
let news = [
    "Urgent Appeal: Support Gaza Relief",
    "Upcoming Webinar: Voices of Palestine",
    "New Campaign Launched for Humanitarian Aid"
];
let index = 0;
function showNews() {
    const ticker = document.getElementById("ticker");
    ticker.style.opacity = 0;
    setTimeout(() => {
        ticker.innerText = news[index];
        ticker.style.opacity = 1;
    }, 500);
    index = (index + 1) % news.length;
}
setInterval(showNews, 3000);

// DONATION CALCULATOR
function calculateDonation() {
    let amount = document.getElementById("donationAmount").value;
    let result = amount * 5;
    document.getElementById("impactResult").innerText =
        "Your donation can provide " + result + " meals.";
}

// COUNTDOWN TIMER
let eventDate = new Date("Dec 31, 2026 00:00:00").getTime();
setInterval(() => {
    let now = new Date().getTime();
    let distance = eventDate - now;
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    document.getElementById("countdown").innerText = days + " days remaining";
}, 1000);

// FORM VALIDATION
function validateForm() {
    const form = document.forms["contactForm"];
    const name = form["name"].value.trim();
    const email = form["email"].value.trim();
    const message = form["message"].value.trim();

    if (name === "") {
        alert("Please enter your full name.");
        return false;
    }

    // Email regex pattern
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    if (message === "") {
        alert("Please enter your message.");
        return false;
    }

    return true; // submit form
}
