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
