function toggleVisibility(element, targetSelector) {
	const target = element.querySelector(targetSelector);
	const img = element.querySelector("img");
	const li = element.querySelector("span");
	const isHidden = target.style.display === "none";

	if (isHidden) {
		target.style.display = "block";
		li.style.color = "var(--black)";
		img.style.transform = "rotate(180deg)";
		img.style.transition = "100ms ease-in";

		if (targetSelector === ".feature__nav") {
			target.style.left = "-2rem";
			target.style.top = "2rem";
		} else if (targetSelector === ".company__nav") {
			target.style.top = "2rem";
		}
	} else {
		target.style.display = "none";
		img.style.transform = "none";
		li.style.color = "var(--grey)";
	}
}

function toggleVisibilityFeature(element) {
	toggleVisibility(element, ".feature__nav");
}

function toggleVisibilityCompany(element) {
	toggleVisibility(element, ".company__nav");
}

const menu = document.getElementsByClassName("ham-container");

menu[0].addEventListener("click", function toggleMenuOn(element) {
	// const menu = element.querySelector(".close__menu");
	const menuOpen = document.getElementsByClassName("nav-header");
	const image = document.getElementsByTagName("img");
	if (
		menuOpen[0].style.display === "none" &&
		image.src.endsWith("images/icon-menu.svg")
	) {
		console.log(image.src);
	}
	// 	menuOpen[0].style.display = "block";
	// 	// menuOpen.style.display = "block";
	// 	image.src("images/icon-close-menu.svg"); // Toggle the image source to image2.jpg
	// } else {
	// 	// menu.style.display = "none";
	// 	menuOpen[0].style.display = "none";
	// 	image.src("images/icon-menu.svg"); // Toggle the image source to image2.jpg
	// }
});

// function toggleMenu(targetElement, triggerElement) {
// 	var targetElement = document.getElementById(targetElementId);

// 	if (targetElement.style.display === "none") {
// 		targetElement.style.display = "block";
// 	} else {
// 		targetElement.style.display = "none";
// 	}
// }

// function toggleMenu(element) {
// 	console.log("clicked");
// 	const menuOpen = element.querySelector("nav");
// 	menuOpen.style.display = "none";
// }

// const menu = document.getElementsByClassName("ham-container");

// menu.addEventListener("click", () => {
// 	console.log("it is clicked");
// });
