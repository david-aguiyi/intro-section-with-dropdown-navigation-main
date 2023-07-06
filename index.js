function toggleVisibilityFeature(element) {
	const feature = element.querySelector(".feature__nav");
	const img = element.querySelector("img");
	const li = element.querySelector("span");

	if (feature.style.display === "none") {
		li.style.color = "var(--black)";
		feature.style.display = "block";
		feature.style.left = "-2rem";
		feature.style.top = "2rem";
		img.style.transform = "rotate(180deg)";
		img.style.transition = "100ms ease-in";
	} else {
		feature.style.display = "none";
		img.style.transform = "none";
		li.style.color = "var(--grey)";
	}
}

function toggleVisibilityCompany(element) {
	const company = element.querySelector(".company__nav");
	const img = element.querySelector("img");
	const li = element.querySelector("span");

	if (company.style.display === "none") {
		company.style.display = "block";
		company.style.top = "2rem";
		li.style.color = "var(--black)";
		img.style.transform = "rotate(180deg)";
		img.style.transition = "100ms ease-in";
	} else {
		li.style.color = "var(--grey)";
		company.style.display = "none";
		img.style.transform = "none";
	}
}


