window.onload = function () {
    letöltés();
}

var viccek;


function letöltés() { 

fetch('/jokes.json')
    .then(response => response.json())
    .then(data => letöltésBefejeződött(data)
    );

}

function letöltésBefejeződött(d) {
    let ide = document.getElementById("ide");
    console.log("Sikeres letöltés")
    console.log(d)
    viccek = d;

    for (var i = 0; i < viccek.length; i++) {
        console.log(viccek[i].text)
        let elem = document.createElement("li")
        elem.innerHTML = viccek[i].text
        ide.appendChild(elem)
    }
}


