

elDiv  = document.getElementById("topCard")
elDiv.addEventListener("click", showEvent);

function showEvent(gato){
console.log (gato.target.id);
//gato.target.style.visibility = 'hidden';
}

let schindlersList = document.getElementById("shindler");

let button1 = document.getElementById("dspChildren");
button1.addEventListener("click", showSchindlerElements);

function showSchindlerElements()
  {
  	var concaString = ""
  		for (fun = 0; fun <schindlersList.childElementCount; fun++) {
  			concaString += (schindlersList.children[fun].innerText) + ", ";
 		}
 		alert (concaString);
	} 												



let button2 = document.getElementById("addListEle");
button2.addEventListener("click", addElement2List);


	

 function addElement2List () {
 	var li = document.createElement("li");
	li.appendChild(document.createTextNode(prompt("enter new item")));
	schindlersList.appendChild(li);
 schindlersList
 }

// functions for the cards (playing with cards)

let button3 = document.getElementById("addCard");
//button3.addEventListener("click", addNewCard);
document.addEventListener("click", addNewCard);


var counter = 1; 

function addNewCard(elemento)
{
console.log (elemento.target.innerText);

switch (elemento.target.innerText )

	{ 

	case "Add Card": 
3
	var aCard = document.createElement("div");
    	// the single append will add to the end...
    	elemento.target.parentNode.append (createNewCard(aCard));
    	counter++;
    break;


	case "Add Before":
		var aCard = document.createElement("div");

    	//elemento.target.parentNode.parentNode.insertBefore(aCard, elemento.target.parentNode) // inserting before the parent of the parent
    	elemento.target.parentNode.parentNode.insertBefore(createNewCard(aCard), elemento.target.parentNode)
		counter++;
	break;
 

	case "Delete":
		elemento.target.parentNode.remove();
	break;


	case "Add After":
	
		var aCard = document.createElement("div");
		
		//elemento.target.parentNode.appendChild (aCard); // this is the one that apends after the parento of the current one
		elemento.target.parentNode.appendChild (createNewCard(aCard))

		counter++;

	break;

	}

}


function createNewCard (aCard) 
{

		
		aCard.setAttribute("class", "card");
		var aCardT =  document.createTextNode("Card#"+counter);
		aCard.appendChild(aCardT);

		let breakline = document.createElement("br"); 

		var abefore = document.createElement("button");
		var abeforeT =  document.createTextNode("Add Before");
		abefore.appendChild (abeforeT);

		var aafter = document.createElement("button");
		var aafterT =  document.createTextNode("Add After");
		aafter.appendChild (aafterT);

		var bDelete = document.createElement("button");
		var bDeleteT =  document.createTextNode("Delete");
		bDelete.appendChild (bDeleteT);

		aCard.appendChild(breakline);
		aCard.appendChild(abefore);
		aCard.appendChild(aafter);
		aCard.appendChild(bDelete);	

return aCard

}

 

   