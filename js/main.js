(()=>{

	console.log("javascript is linked up");

	const navList = document.querySelector("#navList"),
			profileImages = document.querySelector("#profileImages"),
			memberName = document.querySelector("#profileTitle h2"),
			introText = document.querySelector("#introText");

	const introContent = [
		[`Team Page`, `Click on the nav list to see each member's biography!`, `#AF4F7F`],
		[`Rainshadow`, `Click on the nav list to see each member's biography! 1`, `#A1367D`],
		[`Ann`, `Click on the nav list to see each member's biography! 2`, `#9C72B8`]
	];


	function slideBanner(e) {
		if (event.target.className.includes("navItem")) {
			let multiplier = event.target.dataset.offset,
				offsetWidth = 202; 

			profileImages.style.right = `${multiplier * offsetWidth}px`;
		}
	}

	function setMemberData(name, text, color) {
		memberName.textContent = name;
		introText.textContent = text;
		document.querySelector("#profileTitle").style.backgroundColor = color;
	}

	function changeText(e) {
		setMemberData(introContent[event.target.dataset.offset][0],
						introContent[event.target.dataset.offset][1],
						introContent[event.target.dataset.offset][2]);

	}


	navList.addEventListener("click", slideBanner);
	navList.addEventListener("click", changeText);



})();