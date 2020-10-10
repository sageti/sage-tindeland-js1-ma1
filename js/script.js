const cats = [
	{
		name: "Blob",
		age: 10,
	},
	{
		name: "Harold",
	},
	{
		name: "Blurt",
		age: 21,
	},
];

// Question 1:
const cat = {
	complain: function () {
		console.log("Meow!");
	},
};

// Question 2:
const heading = document.querySelector("h3");
heading.innerHTML = "Updating heading";

// Question 3:
heading.style.fontSize = "2em";

// Question 4:
heading.classList.add("subheading");

// Question 5:
const paragraphs = document.querySelectorAll("p");
for (let i = 0; i < paragraphs.length; i++) {
	paragraphs[i].style.color = "red";
}

// Question 6:
// Select the div with a class of results, assign it to a variable called resultsContainer and set its inner HTML to be <p>New paragraph</p> and its background colour to be yellow.
const resultsContainer = document.querySelector("div.results");

resultsContainer.innerHTML = "<p>New paragraph</p>";
resultsContainer.style.background = "yellow";

// Question 7:
function catlist(list) {
	for (let i = 0; i < list.length; i++) {
		console.log(cats[i].name);
	}
}
catlist(cats);

// Question 8:
function createCats(cats) {
	let html = "";

	for (let i = 0; i < cats.length; i++) {
		let ageDisplay = "Age unknown";

		if (cats[i].age) {
			ageDisplay = cats[i].age;
		}

		html += `<div class="cats-html">
				<h5>Name: ${cats[i].name}</h5>
				<p>Age: ${ageDisplay}</p>
		</div>`;
	}

	return html;
}
createCats(cats);

const newHTML = createCats(cats);

const catContainer = document.querySelector(".cat-container");
catContainer.innerHTML = newHTML;
