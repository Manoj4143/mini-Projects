let greeting = '{"greetText":"Wishing that the new year will bring joy, love, peace, and happiness to you.","from":"Rahul","to":"Varakumar"}';


// Parse JSON string
let greetingObj = JSON.parse(greeting);

// Select elements
let greetElements = document.querySelectorAll(".greet");
let greetTextElement = document.querySelector(".greet-text");

// Fill the content
greetElements[0].textContent = "From: " + greetingObj.from;
greetElements[1].textContent = "To: " + greetingObj.to;

document.querySelector(".greet-text").textContent = greetingObj.greetText;