const text = `Manvi,

Thank you for giving our friendship another chance.

It truly means a lot to me.

I'm really grateful to have you back, and I hope we can create even better memories together.

No matter what happened before, I'll always value our friendship and do my best to be a better friend.

💙 Forever Friends 💙`;

const message = document.getElementById("message");
const btn = document.getElementById("showMessage");

let i = 0;

btn.onclick = () => {

    btn.style.display = "none";

    typeWriter();

}

function typeWriter(){

    if(i < text.length){

        message.innerHTML += text.charAt(i);

        i++;

        setTimeout(typeWriter,45);

    }
    else{

        fireworks();

    }

}

/* ==========================
        Falling Flowers
========================== */

function createFlower(){

    let flower=document.createElement("div");

    flower.className="flower";

    flower.innerHTML="🌸";

    flower.style.left=Math.random()*100+"vw";

    flower.style.animationDuration=(5+Math.random()*6)+"s";

    flower.style.fontSize=(20+Math.random()*25)+"px";

    document.body.appendChild(flower);

    setTimeout(()=>{
        flower.remove();
    },11000);

}

setInterval(createFlower,300);


/* ==========================
       Floating Balloons
========================== */

const balloons=["🎈","🎈","🎈","🎈","🎈"];

function createBalloon(){

    let balloon=document.createElement("div");

    balloon.className="balloon";

    balloon.innerHTML=balloons[Math.floor(Math.random()*balloons.length)];

    balloon.style.left=Math.random()*100+"vw";

    balloon.style.animationDuration=(8+Math.random()*6)+"s";

    balloon.style.fontSize=(40+Math.random()*20)+"px";

    document.body.appendChild(balloon);

    setTimeout(()=>{
        balloon.remove();
    },14000);

}

setInterval(createBalloon,1000);


/* ==========================
      Mouse Hearts
========================== */

document.addEventListener("click",(e)=>{

    let heart=document.createElement("div");

    heart.className="heart";

    heart.innerHTML="❤️";

    heart.style.left=e.clientX+"px";

    heart.style.top=e.clientY+"px";

    heart.style.fontSize=(20+Math.random()*25)+"px";

    document.body.appendChild(heart);

    setTimeout(()=>{
        heart.remove();
    },5000);

});


/* ==========================
        Music
========================== */

const music=document.getElementById("bgMusic");
const musicBtn=document.getElementById("musicBtn");

let playing=false;

musicBtn.onclick=()=>{

    if(!playing){

        music.play();

        musicBtn.innerHTML="🔇 Stop Music";

        playing=true;

    }
    else{

        music.pause();

        musicBtn.innerHTML="🎵 Music";

        playing=false;

    }

}


/* ==========================
      Fireworks
========================== */

function fireworks(){

    for(let i=0;i<180;i++){

        let spark=document.createElement("div");

        spark.innerHTML="✨";

        spark.style.position="fixed";

        spark.style.left=Math.random()*100+"vw";

        spark.style.top=Math.random()*100+"vh";

        spark.style.fontSize=(15+Math.random()*20)+"px";

        spark.style.transition="2s";

        document.body.appendChild(spark);

        setTimeout(()=>{

            spark.style.transform=`translate(${Math.random()*500-250}px,${Math.random()*500-250}px) scale(0)`;

            spark.style.opacity="0";

        },100);

        setTimeout(()=>{

            spark.remove();

        },2200);

    }

}