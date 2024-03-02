var imgList = document.getElementById("img-list");
var caroBtns = document.getElementsByClassName("caro-btn");
var imgText = document.getElementById("text-content");

var status = 0;
var positionUit = -100;

function slideImg(x) {
    var i;
    for (i = 0; i < caroBtns.length; i++) {
        caroBtns[i].style.backgroundColor = "#ffffff44";
    }
    caroBtns[x].style.backgroundColor = "#fff";
    status = x * positionUit; // Corrected variable name here
    imgList.style.left = status + "%"; // Corrected variable name here
}
