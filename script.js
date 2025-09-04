// Part 1: Javascript Basics
// Variable declarations & conditionals
let userAge = 20;
if (UserAge >= 18) {console.log("You are an adult.");}
    else {console.log("You are a minor."); }

// Function to capture input and greet user
function greetUser() {
    let name = document.getElementById("username").value;
    if (name.trim() === "") {
        document.getElementById("greeting").innerText = "Please enter your name!";}
    else {
        document.getElementById("greeting").innerText = `Hello, ${name}`;}
}

// Part 2 : Functions connected to HTML

// Function 1 :Calculate total price
function calculateTotal(price, quantity)
{
    return price * quantity;
}

function showTotal()
{
    let price = Number(document.getElementById("price").value);
    let quantity = Number(document.getElementById("quantity").value);
    if (price > 0 && quantity > 0) {
        let total = calculateTotal(price, quantity);
            document.getElementById("total-output").innerText = `Total = $${total}`;} 
        else{
    document.getElementById("total-output").innerText = "Please enter valid values!";}
}

// Function 2: Format a string
function formatMessage(message) {
    return String(message).toUpperCase() + "!!!";
}

function showFormattedMessage() {
    var msg = document.getElementById("message").value;
    var out = document.getElementById("formatted-output");

    if (msg.trim() !== "") {
        out.innerText = formatMessage(msg);
    }
    else {
        out.innerText = "Please enter a message!"
    }
}

// Part 3: Loops

// For loop example
for (let i = 1; i <= 5; i++) {
    console.log("Loop iteration:", i);
}

// While loop example (countdown)
function startCountdown() {
    let list = document.getElementById("countdown-list");
    list.innerHTML = ""; // Clear previous countdown
    let i = 5;
    while (i >= 0) {
        let li = document.createElement("li");
        li.innerText = i;
        list.appendChild(li);
        i--;
    }
}
// Part 4: DOM Manipulation

// Interaction 3: Toggle Visibility
document.getElementById("toggle-btn").addEventListener("click", function() { 
    let text = document.getElementById("toggle-text");
    if (text.style.display = "block");
    else {
        text.style.display = "none"
    }
});