function switchOff(){
    document.getElementById("c-img").src = "https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png"
    document.getElementById("CAT_IMAG").src = "https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png"
    document.getElementById("status").textContent = "switch Off";
    document.getElementById("ON_SWITCH").style.backgroundColor = "#cbd2d9";
    document.getElementById("OFF_SWITCH").style.backgroundColor =  "#22c55e";
}
function switchOn(){
     document.getElementById("c-img").src = "https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png"
      document.getElementById("CAT_IMAG").src = "https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/cat-img.png"
      document.getElementById("status").textContent = "switch On";
      document.getElementById("ON_SWITCH").style.backgroundColor = "#e12d13";
    document.getElementById("OFF_SWITCH").style.backgroundColor = "#cbd2d9";
}