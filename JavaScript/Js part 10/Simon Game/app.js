let gameSeq = []; // initialy game not have value
let userSeq = [];

let btns = ["yellow", "red", "purple", "green"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function () {
	if (started == false) {
		console.log("Game is started");
		started = true; // after game start it become true, so we have to do restart the game

		levelUp();
	}
});

function gameFlash(btn) {
	// white color
	btn.classList.add("flash");
	setTimeout(function () {
		btn.classList.remove("flash");
	}, 250);
}

function userFlash(btn) {
	// green color
	btn.classList.add("userFlash");
	setTimeout(function () {
		btn.classList.remove("userFlash");
	}, 250);
}

function levelUp() {
	// new color add
	userSeq = []; //its empty bcoz every new level user have to give previus values to go next level
	level++;
	h2.innerText = `Level ${level}`;

	let randIdx = Math.floor(Math.random() * 3);
	let randColor = btns[randIdx];
	let randBtn = document.querySelector(`.${randColor}`);
	// console.log(randIdx);
	// console.log(randColor);
	// console.log(randBtn);

	gameSeq.push(randColor);
	console.log(gameSeq);
	gameFlash(randBtn);
}

function btnPress() {
	// user press
	//    console.log(this);

	let btn = this; // all btn are not same, they are used in their own function
	userFlash(btn);

	userColor = btn.getAttribute("id");
	//    console.log(userColor);

	userSeq.push(userColor);
	checkAns(userSeq.length - 1);
}

function checkAns(idx) {
	// pass current level
	// console.log("curr level : ",level);

	if (userSeq[idx] == gameSeq[idx]) {
		if (userSeq.length == gameSeq.length) {
			// enter corectly
			setTimeout(levelUp, 1000); // if same color give it have delay
		}
	} else {
		h2.innerHTML = `Game Over! Your score was<b>${level}</b> <br> Press any key to start again.`;
		// give red background of game over
		document.querySelector("body").style.backgroundcolor = "red";
		setTimeout(function () {
			document.querySelector("body").style.backgroundcolor = "white";
		}, 150); //150 ms ke baad screen color become white
		resetG();
	}
}

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
	btn.addEventListener("click", btnPress);
}

function resetG() {
	started = false;
	gameSeq = [];
	userSeq = [];
	level = 0;
}
