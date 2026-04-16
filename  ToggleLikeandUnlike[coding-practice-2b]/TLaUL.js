let PuppyImageElement = document.getElementById("puppyImage");
let likeIconElement = document.getElementById("likeIcon");
let likeButtonElement = document.getElementById("likeButton");

let isLiked = false;

function onClickLikeButton() {
    if (isLiked === false) {
        PuppyImageElement.src = "https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/white-puppy-liked-img.png";
        likeIconElement.style.color = "#0967d2";
        likeButtonElement.style.backgroundColor = "#0967d2";
        likeButtonElement.style.color = "#ffffff";
        isLiked = true;
    } else {
        PuppyImageElement.src = "https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/white-puppy-img.png";
        likeIconElement.style.color = "#cbd2d9";
        likeButtonElement.style.backgroundColor = "#cbd2d9";
        likeButtonElement.style.color = "#9aa5b1";
        isLiked = false;
    }
}