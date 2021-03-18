"use strict";
var navBtn = document.getElementById("navBtn");
var nav = document.querySelector("nav");
var htmlBody = document.querySelector("body");
var navActive = false;
if (navBtn && nav && htmlBody) {
    var navBtnImg_1 = navBtn.querySelector("img");
    if (navBtnImg_1) {
        navBtn.addEventListener("click", function () {
            if (navActive) {
                nav.style.left = "-100%";
                htmlBody.style.overflow = "auto";
                navBtnImg_1.src = "./images/icon-hamburger.svg";
                navActive = false;
            }
            else {
                window.scrollTo(0, 0);
                nav.style.left = "0";
                htmlBody.style.overflow = "hidden";
                navBtnImg_1.src = "./images/icon-close.svg";
                navActive = true;
            }
        });
    }
}
