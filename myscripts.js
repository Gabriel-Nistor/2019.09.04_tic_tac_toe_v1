var a1 = document.getElementById("a1");
var a2 = document.getElementById("a2");
var a3 = document.getElementById("a3");
var b1 = document.getElementById("b1");
var b2 = document.getElementById("b2");
var b3 = document.getElementById("b3");
var c1 = document.getElementById("c1");
var c2 = document.getElementById("c2");
var c3 = document.getElementById("c3");

var a1x = document.getElementById("a1x");
var a1o = document.getElementById("a1o");
var a2x = document.getElementById("a2x");
var a2o = document.getElementById("a2o");
var a3x = document.getElementById("a3x");
var a3o = document.getElementById("a3o");

var b1x = document.getElementById("b1x");
var b1o = document.getElementById("b1o");
var b2x = document.getElementById("b2x");
var b2o = document.getElementById("b2o");
var b3x = document.getElementById("b3x");
var b3o = document.getElementById("b3o");

var c1x = document.getElementById("c1x");
var c1o = document.getElementById("c1o");
var c2x = document.getElementById("c2x");
var c2o = document.getElementById("c2o");
var c3x = document.getElementById("c3x");
var c3o = document.getElementById("c3o");


a1x.addEventListener("click", changetoXclassa1);
a1o.addEventListener("click", changetoOclassa1);

a2x.addEventListener("click", changetoXclassa2);
a2o.addEventListener("click", changetoOclassa2);

a3x.addEventListener("click", changetoXclassa3);
a3o.addEventListener("click", changetoOclassa3);

b1x.addEventListener("click", changetoXclassb1);
b1o.addEventListener("click", changetoOclassb1);

b2x.addEventListener("click", changetoXclassb2);
b2o.addEventListener("click", changetoOclassb2);

b3x.addEventListener("click", changetoXclassb3);
b3o.addEventListener("click", changetoOclassb3);

c1x.addEventListener("click", changetoXclassc1);
c1o.addEventListener("click", changetoOclassc1);

c2x.addEventListener("click", changetoXclassc2);
c2o.addEventListener("click", changetoOclassc2);

c3x.addEventListener("click", changetoXclassc3);
c3o.addEventListener("click", changetoOclassc3);


function changetoXclassa1() {
    a1.className = "x-style";
    check();
}
function changetoOclassa1() {
    a1.className = "o-style";
    check();
}


function changetoXclassa2() {
    a2.className = "x-style";
    check();
}
function changetoOclassa2() {
    a2.className = "o-style";
    check();
}


function changetoXclassa3() {
    a3.className = "x-style";
    check();
}
function changetoOclassa3() {
    a3.className = "o-style";
    check();
}


function changetoXclassb1() {
    b1.className = "x-style";
    check();
}
function changetoOclassb1() {
    b1.className = "o-style";
    check();
}


function changetoXclassb2() {
    b2.className = "x-style";
    check();
}
function changetoOclassb2() {
    b2.className = "o-style";
    check();
}


function changetoXclassb3() {
    b3.className = "x-style";
    check();
}
function changetoOclassb3() {
    b3.className = "o-style";
    check();
}


function changetoXclassc1() {
    c1.className = "x-style";
    check();
}
function changetoOclassc1() {
    c1.className = "o-style";
    check();
}


function changetoXclassc2() {
    c2.className = "x-style";
    check();
}
function changetoOclassc2() {
    c2.className = "o-style";
    check();
}


function changetoXclassc3() {
    c3.className = "x-style";
    check();
}
function changetoOclassc3() {
    c3.className = "o-style";
    check();
}


function check() {
    setTimeout(function(){
    if (
        (a1.className === "x-style")
        && (a1.className === a2.className)
        && (a1.className === a3.className)
        && (a2.className === a3.className)) {
        alert("X wins!");
    } if (
        (a1.className === "o-style")
        && (a1.className === a2.className)
        && (a1.className === a3.className)
        && (a2.className === a3.className)) {
        alert("O wins!");
    } if (
        (b1.className === "x-style")
        && (b1.className === b2.className)
        && (b1.className === b3.className)
        && (b2.className === b3.className)) {
        alert("X wins!");
    } if (
        (b1.className === "o-style")
        && (b1.className === b2.className)
        && (b1.className === b3.className)
        && (b2.className === b3.className)) {
        alert("O wins!");
    } if (
        (c1.className === "x-style")
        && (c1.className === c2.className)
        && (c1.className === c3.className)
        && (c2.className === c3.className)) {
        alert("X wins!");
    } if (
        (c1.className === "o-style")
        && (c1.className === c2.className)
        && (c1.className === c3.className)
        && (c2.className === c3.className)) {
        alert("O wins!");
    } if (
        (a1.className === "x-style")
        && (a1.className === b1.className)
        && (a1.className === c1.className)
        && (b1.className === c1.className)) {
        alert("X wins!");
    } if (
        (a1.className === "o-style")
        && (a1.className === b1.className)
        && (a1.className === c1.className)
        && (b1.className === c1.className)) {
        alert("O wins!");
    } if (
        (a2.className === "x-style")
        && (a2.className === b2.className)
        && (a2.className === c2.className)
        && (b2.className === c2.className)) {
        alert("X wins!");
    } if (
        (a2.className === "o-style")
        && (a2.className === b2.className)
        && (a2.className === c2.className)
        && (b2.className === c2.className)) {
        alert("O wins!");
    } if (
        (a3.className === "x-style")
        && (a3.className === b3.className)
        && (a3.className === c3.className)
        && (b3.className === c3.className)) {
        alert("X wins!");
    } if (
        (a3.className === "o-style")
        && (a3.className === b3.className)
        && (a3.className === c3.className)
        && (b3.className === c3.className)) {
        alert("O wins!");
    } if (
        (a1.className === "x-style")
        && (a1.className === b2.className)
        && (a1.className === c3.className)
        && (b2.className === c3.className)) {
        alert("X wins!");
    } if (
        (a1.className === "o-style")
        && (a1.className === b2.className)
        && (a1.className === c3.className)
        && (b2.className === c3.className)) {
        alert("O wins!");

    } if (
        (a3.className === "x-style")
        && (a3.className === b2.className)
        && (a3.className === c1.className)
        && (b2.className === c1.className)) {
        alert("X wins!");
    } if (
        (a3.className === "o-style")
        && (a3.className === b2.className)
        && (a3.className === c1.className)
        && (b2.className === c1.className)) {
        alert("O wins!");
    }}, 500) }
    

    