
// function for the first exercise

console.log('Hello from external file basic.js ');


// functions for the calculator exercises

/*

function clickingResult(textboxValue)
                          {
                          console.log ('I am in the button click event');
                          console.log (parseInt(textboxValue)+1);
                          }


// functions for complete calculator 
document.getElementById("myBtn").addEventListener("click", displayDate);
function displayDate() {
  document.getElementById("demo").innerHTML = Date();
}
*/

/// 
var number1 =0;
var number2 =0;
var oper = ''; 

function dis(val) 
         { 
         	
         switch (true) {
         				case (val > 0 || val <=9):
			             document.getElementById("result").value+=val 
            			 break;

            			 case (val == "="):
            			 if (number1 == 0 ) { 
            			 					number1 = document.getElementById("result").value
            			 					
            								} 
            						else  
            							 {  
            							 	number2 = document.getElementById("result").value;
            							 	
            							 	

            							 	if (oper == "+")
            							 					{
            							 					document.getElementById("result").value =  (Number(number1) +  Number(number2));	
            							 					console.log((Number(number1) +  Number(number2)));
            							 					}
            							 	else if (oper == "-")
            							 					{
            							 					document.getElementById("result").value =  (Number(number1) -  Number(number2));	
            							 					console.log((Number(number1) - Number(number2)));
            							 					}
            							 	else if (oper == "*")
            							 					{
            							 					document.getElementById("result").value =  (Number(number1) *  Number(number2));	
            							 					console.log((Number(number1) * Number(number2)));
            							 					}
            							 	else if (oper == "/")
            							 					{
            							 					document.getElementById("result").value =  (Number(number1) /  Number(number2));	
            							 					console.log((Number(number1) / Number(number2)));
            							 					}
            							 	 
            							 	oper ='';
            							 }

						 case (val == "+"):
            			 if (number1 == 0 ) { 
            			 					
            			 					number1 = document.getElementById("result").value;
            			 					document.getElementById("result").value = "";
            			 					oper = "+"
            			 					} 
            						else  
            							 {
            							 	number2 = document.getElementById("result").value;
            							 	oper = "+"
            							 }
            							 break;

						 case (val == "-"):
            			 if (number1 == 0 ) { 
            			 					
            			 					number1 = document.getElementById("result").value;
            			 					document.getElementById("result").value = "";
            			 					oper = "-"
            			 					} 
            						else  
            							 {
            							 	number2 = document.getElementById("result").value;
            							 	oper = "-"
            							 }
            							 break;

						case (val == "x"):
            			 if (number1 == 0 ) { 
            			 					
            			 					number1 = document.getElementById("result").value;
            			 					document.getElementById("result").value = "";
            			 					oper = "*"
            			 					} 
            						else  
            							 {
            							 	number2 = document.getElementById("result").value;
            							 	oper = "*"
            							 }
            							 break;
						case (val == "/"):
            			 if (number1 == 0 ) { 
            			 					
            			 					number1 = document.getElementById("result").value;
            			 					document.getElementById("result").value = "";
            			 					oper = "/"
            			 					} 
            						else  
            							 {
            							 	number2 = document.getElementById("result").value;
            							 	oper = "/"
            							 }
            							 break;
            			case (val == "."):
            			 				 { 
            			 					
            			 					document.getElementById("result").value +="."
            			 					}
            							 break;


         
         }



         }

function clr()
{
 number1 =0;
 number2 =0;
 oper = '';
 document.getElementById("result").value = "";
}


// functions for the Canadian taxes 

const taxLvl =[0.15,0.205,0.26,0.29,0.33];
const bracket = [0,47630,95259,147667,210371]
function calculateTax (taxableIncome){
let taxArray = [];




									
									console.log (taxableIncome);
							        if (taxableIncome > bracket[0] && taxableIncome < bracket[1] ) 
							        												{
							        												//return taxableIncome * 0.15;
							        												taxArray.push(taxableIncome * taxLvl[0]);  
							        												console.log (taxLvl[0]);
							        												}	
							        else if (taxableIncome > bracket[1] && taxableIncome < bracket[2] ) {
							        															taxArray.push(bracket[1] * taxLvl[0]);
							        															taxArray.push((taxableIncome - bracket[1]) * taxLvl[1] );
							        															//var addLvl = taxableIncome - bracket[1]; 
							        															//return ( (bracket[1] * 0.15 ) + addLvl * 0.205) ;

																										}								     
							       // 95,259 up to $147,667   														
							        else if (taxableIncome > bracket[2] && taxableIncome < bracket[3] ) {
							        																taxArray.push(bracket[1] * taxLvl[0]);
							        																taxArray.push((bracket[2] - bracket[1]) * taxLvl[1]);
							        																taxArray.push((taxableIncome - bracket[2]) * taxLvl[2] );
									        														}
							        else if (taxableIncome > bracket[3] && taxableIncome < bracket[4] ) {
							        																taxArray.push(bracket[1] * taxLvl[0]);
							        																taxArray.push((bracket[2] - bracket[1]) * taxLvl[1]);
							        																taxArray.push((bracket[3] - bracket[2]) * taxLvl[2]);
							        																taxArray.push((taxableIncome - bracket[3]) * taxLvl[3] );
																									}

							        
							      	else   {
							        																taxArray.push(bracket[1] * taxLvl[0]);
							        																taxArray.push((bracket[2] - bracket[1]) * taxLvl[1]);
							        																taxArray.push((bracket[3] - bracket[2]) * taxLvl[2]);
							        																taxArray.push((bracket[4] - bracket[3]) * taxLvl[3]);
							        																taxArray.push((taxableIncome - bracket[4]) * taxLvl[4] );
																									} 
							      	


							        	   
							        return taxArray.reduce((total, amount) => total + amount);
									}

function ParseTax(taxArray)
							{
textArrayforEach(function(element) {
element1 


});
							} 	

// New tax Calculator

document.getElementById("btnTax").addEventListener("click", onButtonTax);


function onButtonTax() {
	let percentage = [0.15, 0.205, 0.26, 0.29, 0.33];
	let taxAmount = [0, 7145, 16908, 30535, 48719];
	let incomeBraket = [0,47630, 95259, 147667, 210371] ;
	let income = Number(document.getElementById("inTaxv2").value);
	let i = 0;
	let tax = 0;
	while (income > incomeBraket[i]){
		console.log("i=",i," income braket=", incomeBraket[i]);
		i++;
	}
	i--;
	tax = (income - incomeBraket[i]) * percentage[i] + taxAmount[i];
	document.getElementById("taxv2MsgDiv").textContent = tax;	
} 




// functions for the working with arrays section
var mainArray = [];

function arrAdd(arrValue)
							{
								if ( isNaN(arrValue))  
																			{
																			return ("Input is not a valid number")													
																			}
								else
								{
									mainArray.push(parseInt(arrValue));
									return ('Number has been added to the array');
									
								}

							}

function arrShow()
					{
						return  (mainArray);
					}

function arrTotal()  {
						let sumTotal = 0;
						mainArray.forEach(function(element) {sumTotal += element;});
						return sumTotal;
	
					}
function arrClear () 
					{
						mainArray = [];	
					}



// section for the object lookup exercise
function provinceLookup (queryLetter) {
	 													queryLetter = queryLetter.toLowerCase();
														var province = {
																				  	ab:"Alberta",
																				  	bc:"British Columbia",
																					mb:"Manitoba",
																					nb:"New Brunswick",
																					nl:"Newfoundland and Labrador",
																					nt:"Northwest Territories",
																					ns:"Nova Scotia",
																					nu:"Nunavut",
																					on:"Ontario",
																					pe:"Prince Edward Island",
																					qc:"Quebec",
																					sk:"Saskatchewan",
																					yt:"Yukon"



																				};
														return province[queryLetter];
														}