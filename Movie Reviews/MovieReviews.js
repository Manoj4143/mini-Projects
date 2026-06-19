let movieReviewsContainer = document.getElementById("movieReviewsContainer");

let addBtn = document.getElementById("addBtn");

addBtn.onclick = function() {
    let reviewsContainer = document.getElementById("reviewsContainer");
    let titleInput = document.getElementById("titleInput");
    let reviewTextarea = document.getElementById("reviewTextarea");


    let title = titleInput.value;
    let review = reviewTextarea.value;

    if (title === "") {
        alert("Enter a movie title");
    } else {
        let titleElement = document.createElement("h1");
        titleElement.textContent = title;

        let reviewElement = document.createElement("p");
        reviewElement.textContent = review;

        reviewsContainer.appendChild(titleElement);
        reviewsContainer.appendChild(reviewElement);

        titleInput.value = "";
        reviewTextarea.value = "";
    }


};