(()=>{

	console.log("javascript is linked up");

	const navList = document.querySelector("#navList"),
			profileImages = document.querySelector("#profileImages"),
			memberName = document.querySelector("#profileTitle h2"),
			introText = document.querySelector("#introText");

	const introContent = [
		[`Team Page`, `Welcome! Click on the nav list to see each member's biography.`, `#AF4F7F`],
		[`Rainshadow`, `Now I would like to introduce my real identity to you - a witch! This is my fantastic costume for Halloween. Look at the velvet witch hat, and I'm ready to conjure snacks for my animal friends in backyard.`, `#A1367D`],
		[`Ann`, `A 13-year-old young lady who is organizing a secret club in the abandoned attic... Well, I believe after seeing her zombie-like skin colour, everyone wants to know why she resurrected to live. That's a secret, too.`, `#9C72B8`]
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