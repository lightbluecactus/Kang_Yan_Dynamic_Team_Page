(()=>{

	console.log("javascript is linked up");

	const navList = document.querySelector("#navList"),
			profileImages = document.querySelector("#profileImages");


	function slideBanner(e) {
		if (event.target.className.includes("navItem")) { //to avoid using forEach
			let multiplier = event.target.dataset.offset,
				offsetWidth = 200; 

			profileImages.style.right = `${multiplier * offsetWidth}px`;
		}
	}

	navList.addEventListener("click", slideBanner);


})();