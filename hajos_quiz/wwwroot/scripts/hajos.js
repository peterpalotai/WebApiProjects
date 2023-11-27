window.onload = function () {
    load();  
}


function load() { 

    fetch('/questions/all')
        .then(response => response.json())
        .then(data => kiíratás(data)
        );

}


function kiíratás(lista) {
    console.log(lista)
    for (var i = 0; i < lista.length; i++) {
        let újElem = document.createElement("div");
        újElem.innerText = lista[i];
        document.getElementById("eredmeny").appendChild(újElem);
    }
}