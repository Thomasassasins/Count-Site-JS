let cislo;
cislo = Number() 

document.getElementById("plus").onclick = function() {
    cislo++;
    document.getElementById("number").textContent = cislo;
}

document.getElementById("reset").onclick = function() {
    cislo = 0;
    document.getElementById("number").textContent = cislo;
}

document.getElementById("minus").onclick = function() {
    cislo--;
    document.getElementById("number").textContent = cislo;
}