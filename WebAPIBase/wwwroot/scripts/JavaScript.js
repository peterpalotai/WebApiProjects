window.onload = function () //eseményre való feliratkozás
{
    initPascal(11);
}

var initPascal = function (n) {
    var pascalDiv = document.getElementById('pascal');

    for (var sor = 0; sor < n; sor++) {

        var UjSorDiv = document.createElement('div');
        UjSorDiv.classList.add('sor');
        pascalDiv.appendChild(UjSorDiv);

        for (var oszlop = 0; oszlop <= sor; oszlop++) {

            var UjElemDiv = document.createElement('div');
            UjElemDiv.classList.add('elem');
            UjElemDiv.innerText = faktorialis(sor) / (faktorialis(oszlop) * faktorialis(sor - oszlop))
            UjSorDiv.appendChild(UjElemDiv);
        }
    }
}

var faktorialis = function (n) {
    eredmény = 1;
    for (var i = 1; i <= n; i++) eredmény *= i;
    return eredmény;
}