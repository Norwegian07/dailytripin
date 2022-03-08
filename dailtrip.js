function openNav(){
    document.getElementById("nav").style.width = "100%"
}
function closeNav(){
    document.getElementById("nav").style.width = "0%"
}

// greetings
let tdy = new Date();
let  day = tdy.getHours();
let txt = ""
if(day < 12){
    txt = "Good Morning"
}else{
   txt = "Good AfterNoon"
}
if(day > 17){
    txt = "Good Evening"
}
document.getElementById("greetings").innerHTML = txt;
