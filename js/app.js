document.addEventListener('DOMContentLoaded', function() {

    var myVar;
    var xhr = new XMLHttpRequest();
    
    xhr.open("GET", "json/all.json", true);
    xhr.send();

    xhr.onload = function() {
            myVar = JSON.parse(xhr.responseText);
            console.log(myVar);
            document.getElementById('insideOnload').innerHTML = myVar;
    };

    xhr.onload();

    document.getElementById('outsideOnload').innerHTML = myVar;
    console.log(myVar);
});
