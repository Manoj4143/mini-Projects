let profileDetails = {
    imgSrc: "https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/user-profile-img.png",
    name: "RAHUL ATTULURI",
    age: 25
};

let profileContainer = document.getElementById("profileContainer");

let imageElement = document.createElement("img");
imageElement.src = profileDetails.imgSrc;
profileContainer.appendChild(imageElement);

let headingElement = document.createElement("h1");
headingElement.textContent = profileDetails.name;
profileContainer.appendChild(headingElement);

let paragraphElement = document.createElement("p");
paragraphElement.textContent = "Age : " + profileDetails.age;
profileContainer.appendChild(paragraphElement);