var rectlg = document.getElementById("1");
var rectsg = document.getElementById("2");
var rectpg = document.getElementById("3");
var rectls = document.getElementById("4");
var rects = document.getElementById("5");
var rectps = document.getElementById("6");
var rectld = document.getElementById("7");
var rectsd = document.getElementById("8");
var rectpd = document.getElementById("9");
var xwinner = document.getElementById("xwin");
var owinner = document.getElementById("owin");
var table = document.getElementById("table");
var liczbajeden = 0;
var liczbapol = [rectlg,rectsg,rectpg,rectls,rects,rectps,rectld,rectsd,rectpd]; 

for (i=0; i<=8; i++) {
    liczbapol[i].addEventListener("click", xoro);
}


function xoro() {
    if(event.target.innerHTML == "X" || event.target.innerHTML == "O") {
    } else if(liczbajeden%2) {
        xwin();
    } else {
        owin();
    }
}

function xwin() {
    event.target.innerHTML = "X";
    if (liczbapol[0].innerHTML == "X" && liczbapol[1].innerHTML == "X" && liczbapol[2].innerHTML == "X" || liczbapol[3].innerHTML == "X" && liczbapol[4].innerHTML == "X" && liczbapol[5].innerHTML == "X" || liczbapol[6].innerHTML == "X" && liczbapol[7].innerHTML == "X" && liczbapol[8].innerHTML == "X" || liczbapol[0].innerHTML == "X" && liczbapol[4].innerHTML == "X" && liczbapol[8].innerHTML == "X" || liczbapol[2].innerHTML == "X" && liczbapol[4].innerHTML == "X" && liczbapol[6].innerHTML == "X" || liczbapol[0].innerHTML == "X" && liczbapol[3].innerHTML == "X" && liczbapol[6].innerHTML == "X" || liczbapol[1].innerHTML == "X" && liczbapol[4].innerHTML == "X" && liczbapol[7].innerHTML == "X" || liczbapol[2].innerHTML == "X" && liczbapol[5].innerHTML == "X" && liczbapol[8].innerHTML == "X" ) {

        table.style.display = "none";
        xwinner.style.display = "block";
    } else {
        liczbajeden++; 
    }
}

function owin() {
    event.target.innerHTML = "O";

    if (liczbapol[0].innerHTML == "O" && liczbapol[1].innerHTML == "O" && liczbapol[2].innerHTML == "O" || liczbapol[3].innerHTML == "O" && liczbapol[4].innerHTML == "O" && liczbapol[5].innerHTML == "O" || liczbapol[6].innerHTML == "O" && liczbapol[7].innerHTML == "O" && liczbapol[8].innerHTML == "O" || liczbapol[0].innerHTML == "O" && liczbapol[4].innerHTML == "O" && liczbapol[8].innerHTML == "O" || liczbapol[2].innerHTML == "O" && liczbapol[4].innerHTML == "O" && liczbapol[6].innerHTML == "O"  || liczbapol[0].innerHTML == "O" && liczbapol[3].innerHTML == "O" && liczbapol[6].innerHTML == "O" || liczbapol[1].innerHTML == "O" && liczbapol[4].innerHTML == "O" && liczbapol[7].innerHTML == "O" || liczbapol[2].innerHTML == "O" && liczbapol[5].innerHTML == "O" && liczbapol[8].innerHTML == "O" ) {

        table.style.display = "none";
        owinner.style.display = "block";
    } else {
        liczbajeden++;
    }
}