let title = document.getElementById("titulo");
title.innerText = "Hello from DOM Clients X";
console.log(title);

const marco = document.getElementById("wrapper");

const data = {
	clients: [
		{ name: "Jane", balance: 10 },
		{ name: "Liam", balance: 1000 },
		{ name: "Emma", balance: 1330 },
		{ name: "Olivia", balance: 310 },
		{ name: "Noah", balance: 503 },
		{ name: "William", balance: 520 },
		{ name: "Benjamin", balance: 150 }
	]
};

function createCard() {
	data.clients.forEach(function(element) {
		const card = document.createElement("div");
		card.setAttribute("class", "card");

		let s = document.createElement("p");
		s.appendChild(document.createTextNode(element.name));

		let bal = document.createElement("p");
		bal.appendChild(document.createTextNode(element.balance));

		let bDelete = document.createElement("button");
		bDelete.appendChild(document.createTextNode("Delete"));
		bDelete.setAttribute("name", "delete");

		card.appendChild(s);
		card.appendChild(bal);
		card.appendChild(bDelete);
		card.addEventListener("click", deleteCard);
		marco.appendChild(card);
	});
}

function deleteCard() {
	var target = event.target;
	if (target.name === "delete") {
		var cc = target.parentNode;
		cc.parentNode.removeChild(cc);
	}
}

createCard();
