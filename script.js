let btn=document.getElementById("btn");

btn.onclick=function(){

if(btn.innerHTML=="Turn ON"){
    btn.innerHTML="Turn OFF";
    btn.style.background="red";
}
else{
    btn.innerHTML="Turn ON";
    btn.style.background="green";
}

}

setInterval(function(){

let t=Math.floor(Math.random()*8)+25;
let h=Math.floor(Math.random()*20)+55;

document.getElementById("temp").innerHTML=t+"°C";
document.getElementById("humidity").innerHTML=h+"%";

},2000);
