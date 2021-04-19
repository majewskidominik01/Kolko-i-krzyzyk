var rectlg = document.getElementById("1");
var rectsg = document.getElementById("2");
var rectpg = document.getElementById("3");
var rectls = document.getElementById("4");
var rects = document.getElementById("5");
var rectps = document.getElementById("6");
var rectld = document.getElementById("7");
var rectsd = document.getElementById("8");
var rectpd = document.getElementById("9");
var liczbajeden = 0;
var liczbapol = [rectlg,rectsg,rectpg,rectls,rects,rectps,rectld,rectsd,rectpd]; 

for (i=0; i<=8; i++) {
    liczbapol[i].addEventListener("click", xoro);
}

function xoro() {
    console.log(event.target);
    if(event.target.innerHTML == "X" || event.target.innerHTML == "O") {

    } else if(liczbajeden%2) {
        event.target.innerHTML = "X";
        console.log(liczbajeden);
        liczbajeden++;
    } else {
        event.target.innerHTML = "O";
        console.log(liczbajeden);
        liczbajeden++;
    }
  s
}
