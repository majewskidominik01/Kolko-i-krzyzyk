var xoro = 1;
var rectlg = document.getElementById("1").innerHTML;
var rectsg = document.getElementById("2").innerHTML;
var rectpg = document.getElementById("3").innerHTML;
var rectls = document.getElementById("4").innerHTML;
var rects = document.getElementById("5").innerHTML;
var rectps = document.getElementById("6").innerHTML;
var rectld = document.getElementById("7").innerHTML;
var rectsd = document.getElementById("8").innerHTML;
var rectpd = document.getElementById("9").innerHTML;

function count1() {
 
    if(rectlg == "X" && rectsg == "X" && rectpg == "X" || rectls == "X" && rects == "X" && rectps == "X" || rectld == "X" && rectsd == "X" && rectpd == "X" || rectlg == "X" && rects == "X" && rectpd == "X" || rectpg == "X" && rects == "X" && rectld == "X")
    {
        console.log("WYGRAŁ X");
    
    } else if(rectlg == "O" && rectsg == "O" && rectpg == "O" || rectls == "O" && rects == "O" && rectps == "O" || rectld == "O" && rectsd == "O" && rectpd == "O" || rectlg == "O" && rects == "O" && rectpd == "O" || rectpg == "O" && rects == "O" && rectld == "O")
    {
        console.log("WYGRAŁO O");   
    } else {
        var rectlgi = document.getElementById("1").innerHTML;
        if(rectlgi == "X" || rectlgi == "O" )
        {
        }
        else {
            xoro++;
        if (xoro%2) {
            document.getElementById("1").innerHTML = "X";
        }
            else {
                document.getElementById("1").innerHTML = "O";
        } 
    }
    }

}

function count2() {
 
    if(rectlg == "X" && rectsg == "X" && rectpg == "X" || rectls == "X" && rects == "X" && rectps == "X" || rectld == "X" && rectsd == "X" && rectpd == "X" || rectlg == "X" && rects == "X" && rectpd == "X" || rectpg == "X" && rects == "X" && rectld == "X")
    {
        console.log("WYGRAŁ X");
    
    } else if(rectlg == "O" && rectsg == "O" && rectpg == "O" || rectls == "O" && rects == "O" && rectps == "O" || rectld == "O" && rectsd == "O" && rectpd == "O" || rectlg == "O" && rects == "O" && rectpd == "O" || rectpg == "O" && rects == "O" && rectld == "O")
    {
        console.log("WYGRAŁO O");   
    } else {
        var rectlgi = document.getElementById("2").innerHTML;
        if(rectlgi == "X" || rectlgi == "O" )
        {
        }
        else {
            xoro++;
        if (xoro%2) {
            document.getElementById("2").innerHTML = "X";
        }
            else {
                document.getElementById("2").innerHTML = "O";
        } 
    }
    }
}

function count3() {
 
    if(rectlg == "X" && rectsg == "X" && rectpg == "X" || rectls == "X" && rects == "X" && rectps == "X" || rectld == "X" && rectsd == "X" && rectpd == "X" || rectlg == "X" && rects == "X" && rectpd == "X" || rectpg == "X" && rects == "X" && rectld == "X")
    {
        console.log("WYGRAŁ X");
    
    } else if(rectlg == "O" && rectsg == "O" && rectpg == "O" || rectls == "O" && rects == "O" && rectps == "O" || rectld == "O" && rectsd == "O" && rectpd == "O" || rectlg == "O" && rects == "O" && rectpd == "O" || rectpg == "O" && rects == "O" && rectld == "O")
    {
        console.log("WYGRAŁO O");   
    } else {
        var rectlgi = document.getElementById("3").innerHTML;
        if(rectlgi == "X" || rectlgi == "O" )
        {
        }
        else {
            xoro++;
        if (xoro%2) {
            document.getElementById("3").innerHTML = "X";
        }
            else {
                document.getElementById("3").innerHTML = "O";
        } 
    }
    }

}

function count4() {
 
    if(rectlg == "X" && rectsg == "X" && rectpg == "X" || rectls == "X" && rects == "X" && rectps == "X" || rectld == "X" && rectsd == "X" && rectpd == "X" || rectlg == "X" && rects == "X" && rectpd == "X" || rectpg == "X" && rects == "X" && rectld == "X")
    {
        console.log("WYGRAŁ X");
    
    } else if(rectlg == "O" && rectsg == "O" && rectpg == "O" || rectls == "O" && rects == "O" && rectps == "O" || rectld == "O" && rectsd == "O" && rectpd == "O" || rectlg == "O" && rects == "O" && rectpd == "O" || rectpg == "O" && rects == "O" && rectld == "O")
    {
        console.log("WYGRAŁO O");   
    } else {
        var rectlgi = document.getElementById("4").innerHTML;
        if(rectlgi == "X" || rectlgi == "O" )
        {
        }
        else {
            xoro++;
        if (xoro%2) {
            document.getElementById("4").innerHTML = "X";
        }
            else {
                document.getElementById("4").innerHTML = "O";
        } 
    }
    }

}

function count5() {
 
    if(rectlg == "X" && rectsg == "X" && rectpg == "X" || rectls == "X" && rects == "X" && rectps == "X" || rectld == "X" && rectsd == "X" && rectpd == "X" || rectlg == "X" && rects == "X" && rectpd == "X" || rectpg == "X" && rects == "X" && rectld == "X")
    {
        console.log("WYGRAŁ X");
    
    } else if(rectlg == "O" && rectsg == "O" && rectpg == "O" || rectls == "O" && rects == "O" && rectps == "O" || rectld == "O" && rectsd == "O" && rectpd == "O" || rectlg == "O" && rects == "O" && rectpd == "O" || rectpg == "O" && rects == "O" && rectld == "O")
    {
        console.log("WYGRAŁO O");   
    } else {
        var rectlgi = document.getElementById("5").innerHTML;
        if(rectlgi == "X" || rectlgi == "O" )
        {
        }
        else {
            xoro++;
        if (xoro%2) {
            document.getElementById("5").innerHTML = "X";
        }
            else {
                document.getElementById("5").innerHTML = "O";
        } 
    }
    }

}

function count6() {
 
    if(rectlg == "X" && rectsg == "X" && rectpg == "X" || rectls == "X" && rects == "X" && rectps == "X" || rectld == "X" && rectsd == "X" && rectpd == "X" || rectlg == "X" && rects == "X" && rectpd == "X" || rectpg == "X" && rects == "X" && rectld == "X")
    {
        console.log("WYGRAŁ X");
    
    } else if(rectlg == "O" && rectsg == "O" && rectpg == "O" || rectls == "O" && rects == "O" && rectps == "O" || rectld == "O" && rectsd == "O" && rectpd == "O" || rectlg == "O" && rects == "O" && rectpd == "O" || rectpg == "O" && rects == "O" && rectld == "O")
    {
        console.log("WYGRAŁO O");   
    } else {
        var rectlgi = document.getElementById("6").innerHTML;
        if(rectlgi == "X" || rectlgi == "O" )
        {
        }
        else {
            xoro++;
        if (xoro%2) {
            document.getElementById("6").innerHTML = "X";
        }
            else {
                document.getElementById("6").innerHTML = "O";
        } 
    }
    }

}

function count7() {
 
    if(rectlg == "X" && rectsg == "X" && rectpg == "X" || rectls == "X" && rects == "X" && rectps == "X" || rectld == "X" && rectsd == "X" && rectpd == "X" || rectlg == "X" && rects == "X" && rectpd == "X" || rectpg == "X" && rects == "X" && rectld == "X")
    {
        console.log("WYGRAŁ X");
    
    } else if(rectlg == "O" && rectsg == "O" && rectpg == "O" || rectls == "O" && rects == "O" && rectps == "O" || rectld == "O" && rectsd == "O" && rectpd == "O" || rectlg == "O" && rects == "O" && rectpd == "O" || rectpg == "O" && rects == "O" && rectld == "O")
    {
        console.log("WYGRAŁO O");   
    } else {
        var rectlgi = document.getElementById("7").innerHTML;
        if(rectlgi == "X" || rectlgi == "O" )
        {
        }
        else {
            xoro++;
        if (xoro%2) {
            document.getElementById("7").innerHTML = "X";
        }
            else {
                document.getElementById("7").innerHTML = "O";
        } 
    }
    }

}

function count8() {
 
    if(rectlg == "X" && rectsg == "X" && rectpg == "X" || rectls == "X" && rects == "X" && rectps == "X" || rectld == "X" && rectsd == "X" && rectpd == "X" || rectlg == "X" && rects == "X" && rectpd == "X" || rectpg == "X" && rects == "X" && rectld == "X")
    {
        console.log("WYGRAŁ X");
    
    } else if(rectlg == "O" && rectsg == "O" && rectpg == "O" || rectls == "O" && rects == "O" && rectps == "O" || rectld == "O" && rectsd == "O" && rectpd == "O" || rectlg == "O" && rects == "O" && rectpd == "O" || rectpg == "O" && rects == "O" && rectld == "O")
    {
        console.log("WYGRAŁO O");   
    } else {
        var rectlgi = document.getElementById("8").innerHTML;
        if(rectlgi == "X" || rectlgi == "O" )
        {
        }
        else {
            xoro++;
        if (xoro%2) {
            document.getElementById("8").innerHTML = "X";
        }
            else {
                document.getElementById("8").innerHTML = "O";
        } 
    }
    }

}

function count9() {
 
    if(rectlg == "X" && rectsg == "X" && rectpg == "X" || rectls == "X" && rects == "X" && rectps == "X" || rectld == "X" && rectsd == "X" && rectpd == "X" || rectlg == "X" && rects == "X" && rectpd == "X" || rectpg == "X" && rects == "X" && rectld == "X")
    {
        console.log("WYGRAŁ X");
    
    } else if(rectlg == "O" && rectsg == "O" && rectpg == "O" || rectls == "O" && rects == "O" && rectps == "O" || rectld == "O" && rectsd == "O" && rectpd == "O" || rectlg == "O" && rects == "O" && rectpd == "O" || rectpg == "O" && rects == "O" && rectld == "O")
    {
        console.log("WYGRAŁO O");   
    } else {
        var rectlgi = document.getElementById("9").innerHTML;
        if(rectlgi == "X" || rectlgi == "O" )
        {
        }
        else {
            xoro++;
        if (xoro%2) {
            document.getElementById("9").innerHTML = "X";
        }
            else {
                document.getElementById("9").innerHTML = "O";
        } 
    }
    }

}