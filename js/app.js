document.addEventListener('DOMContentLoaded', function() {
	// var myVar;
	    	var myVar;
    var xhr = new XMLHttpRequest();
    // xhr.overrideMimeType("application/json");
    
    // xhr.onload = function() {
    // 		console.log(xhr.responseText);
    //         myVar = JSON.parse(xhr.responseText);
    //         innerText = "";
    //         for (var i in myVar) {
    //         	innerText += myVar[i];
    //         }
    //         console.log(myVar);
    //         document.getElementById('insideOnload').innerHTML = innerText;
    // };


    function getData() {

    	myVar = JSON.parse(xhr.responseText);
    	console.log(myVar);
    	innerText = "";
    	 for (var i in myVar) {
            	innerText += myVar[i];
            }
        document.getElementById('insideOnload').innerHTML = innerText;
    	return myVar;
    }
    xhr.open("GET", "https://www.reddit.com/r/all.json", true);
    xhr.send();
    // xhr.onload();

    document.getElementById('outsideOnload').innerHTML = myVar;
    console.log("снаружи" + myVar);
});