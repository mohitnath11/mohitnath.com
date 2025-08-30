
var menubtn = document.getElementById("menubtn")
var navpart1 = document.getElementById("navpart1")
var menu = document.getElementById("menu")

navpart1.style.right = "-250px";

menubtn.onclick = function(){
    if(navpart1.style.right == "-250px"){
        navpart1.style.right = "0px" ;
        menu.src = "images/close.png"
    }
    else{
        navpart1.style.right = "-250";
        menu.src = "images/menu.png"
    }
}