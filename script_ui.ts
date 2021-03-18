const navBtn = document.getElementById("navBtn");
const nav: HTMLElement | null = document.querySelector("nav");
const htmlBody: HTMLElement | null = document.querySelector("body");
let navActive: boolean = false;

if (navBtn && nav && htmlBody) {
	const navBtnImg: HTMLImageElement | null = navBtn.querySelector("img");

	if (navBtnImg) {
		navBtn.addEventListener("click", () => {
			if (navActive) {
				nav.style.left = "-100%";
				htmlBody.style.overflow = "auto";
				navBtnImg.src = "./images/icon-hamburger.svg";
				navActive = false;
			} else {
				window.scrollTo(0, 0);
				nav.style.left = "0";
				htmlBody.style.overflow = "hidden";
				navBtnImg.src = "./images/icon-close.svg";
				navActive = true;
			}
		});
	}
}
