"use strict";

const container = document.querySelector(".container");
const btnBlack = document.querySelector(".btn-black");
const btnRGB = document.querySelector(".btn-rgb");
const btnReset = document.querySelector(".btn-reset");

// function to create grid
function createGrid(rows, cols) {
	// for loop that will muliply the rows, and the cols
	// create the divs with document.createElement
	for (let i = 0; i < rows * cols; i++) {
		const div = document.createElement("div");
		div.style.border = "1px solid black";
		// adding gridTemplateColumns style
		// adding gridTemplateRow style
		// repeat value that is put in for cols, and rows
		// set it to 1fr (fractional unit) of the available space
		container.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;
		container.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
		// appending the div to the container
		// giving it a class of grid-item
		container.appendChild(div).classList.add("grid-item");
		blackColor();
		randomColor();
	}
}
createGrid(16, 16);

// function that loops over each grid-item
// turns the background of the grid-item to black
function blackColor() {
	const boxs = container.querySelectorAll(".grid-item");
	btnBlack.addEventListener("click", () => {
		boxs.forEach((box) =>
			box.addEventListener("mouseover", () => {
				box.style.background = "#000";
			}),
		);
	});
}

// function that loops over grid-item
// when rgb button is clicked turns the
// backround of each grid-item to random color
function randomColor() {
	const boxs = container.querySelectorAll(".grid-item");
	btnRGB.addEventListener("click", () => {
		boxs.forEach((box) =>
			box.addEventListener("mouseover", () => {
				const r = Math.floor(Math.random() * 255);
				const g = Math.floor(Math.random() * 255);
				const b = Math.floor(Math.random() * 255);
				box.style.background = `rgb(${r}, ${g}, ${b})`;
			}),
		);
	});
}

// function that removes the elements
function newGrid() {
	const boxs = container.querySelectorAll(".grid-item");
	boxs.forEach((box) => box.remove());
}

// fucntion that resizes the grid based of the user input
// if user input is >= 100 alert that is to big and 16, 16 grid shows
// else create new grid from user input
function reSize() {
	btnReset.addEventListener("click", () => {
		const userInput = prompt(`What is your preferred grid size?`);
		if (userInput >= 100) {
			alert(`Nope to big!`);
			newGrid();
			createGrid(16, 16);
			blackColor();
			randomColor();
		} else {
			newGrid();
			createGrid(userInput, userInput);
			blackColor();
			randomColor();
		}
	});
}
reSize();
