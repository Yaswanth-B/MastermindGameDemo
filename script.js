const originalArray = ["Red", "Orange", "Yellow", "Green", "Blue", "White", "Pink", "Purple"];
var rownum = 13;
function generateRandomArray(originalArray, length) {	
	const copyArray = [...originalArray];
	if (length > copyArray.length) {
		console.error("Requested length is greater than the array length.");
		return null;
	}
	for (let i = copyArray.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[copyArray[i], copyArray[j]] = [copyArray[j], copyArray[i]];
	}
	return copyArray.slice(0, length);
}
const keyArray = generateRandomArray(originalArray, 5);
console.log(keyArray);

function playTurn(){
 document.getElementById("test").innerHTML = "";
 
 var guessArray = [document.getElementById("s1").options[document.getElementById("s1").selectedIndex].text,
  	document.getElementById("s2").options[document.getElementById("s2").selectedIndex].text,
		document.getElementById("s3").options[document.getElementById("s3").selectedIndex].text,
		document.getElementById("s4").options[document.getElementById("s4").selectedIndex].text,
		document.getElementById("s5").options[document.getElementById("s5").selectedIndex].text];	
	if(guessArray.length=== new Set(guessArray).size){
		console.log(rownum);
		if(rownum<=1){
			document.getElementById("test").innerHTML = "Game Over";
			document.getElementById("button").style.display= "none";
		 }
		 else{
			rownum = rownum -1;
		 }
		//Setting Game Board
		for(var i=1;i<=5;i++){
			let targetid =String(rownum)+String(i);
			document.getElementById(targetid).style.backgroundColor = guessArray[i-1];
		}

		//Pin Calculation
		//Red Pins
		let redPins = 0;
		let whitePins = 0;
		for(var i=0;i<5;i++){
			if(guessArray[i]==keyArray[i]){
				redPins ++;
			}
		}
		
		//White Pins
		whitePins = guessArray.filter(value => keyArray.includes(value)).length;
		let redPinscpy = redPins;
		//Pin Population
		for(var i=1;i<=whitePins;i++){
			let targetid ="h"+String(rownum)+String(i);
			console.log(targetid);
			
			if(redPinscpy>0){
				document.getElementById(targetid).style.backgroundColor = "Red";
				redPinscpy--;
			}
			else{
				document.getElementById(targetid).style.backgroundColor = "White";
			}
			
		}
		console.log("hey");
		//Changing Row Number Conditionally // Game Over Condition		
		if(redPins==5){
			document.getElementById("test").innerHTML = "Congratulations! Tries: "+String((13-rownum));
			document.getElementById("button").style.display= "none";
		}		
	}
	else{
		document.getElementById("test").innerHTML = "Invalid";
	}
 console.log(guessArray);
 
 
}