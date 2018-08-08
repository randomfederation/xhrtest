// document.addEventListener('DOMContentLoaded', function() {
	// var myVar;
	// var xhr = new XMLHttpRequest();
	// // xhr.overrideMimeType("application/json");

	// xhr.onload = function() {

	// 	myVar = JSON.parse(xhr.responseText);
	// 	innerText = "";

	// 	for (var i in myVar) {
	// 		innerText += myVar[i];
	// 	}

	// 	console.log(myVar);
	// 	document.getElementById('insideOnload').innerHTML = innerText;
	// };

	// xhr.open("GET", "json/all.json", true);
	// xhr.send();
	// // xhr.onload();

	// document.getElementById('outsideOnload').innerHTML = myVar;
	// console.log("outside " + myVar);
// });



document.addEventListener('DOMContentLoaded', function(){

	var myVar;
	function onComplete(myVar) { // When the code completes, do this
		console.log(myVar);
		var innerText = "";

		for (var i in myVar) {
			innerText += myVar[i];
		}

		document.getElementById('outsideOnload').innerHTML = innerText;
	}

	function getFive(whenDone) {


		var xhr = new XMLHttpRequest();
		xhr.onload = function() {

			myVar = JSON.parse(xhr.responseText);
			whenDone(myVar);
			console.log(myVar);
			document.getElementById('insideOnload').innerHTML = myVar;
		};

		xhr.open("GET", "json/all.json", true);
		xhr.send();
	}

});