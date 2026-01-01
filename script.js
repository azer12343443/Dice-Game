let player1 = document.getElementById('j1');
let player2 = document.getElementById('j2');
let p1text = document.getElementById("p1");
let p2text = document.getElementById("p2");
let link1 ="images/ione.png";
let link2 ="images/itwo.png";
let link3 ="images/ithree.png";
let link4 ="images/ifour.png";
let link5 ="images/ifive.png";
let link6 ="images/isix.png";

let link = [link1,link2,link3,link4,link5,link6]; 

 document.getElementById("play").addEventListener("click", () =>{
   let p1 = Math.floor(Math.random()*link.length);
   let p2 = Math.floor(Math.random()*link.length); 
   if(p1>p2){
    p1text.innerHTML="winner🚩";
    p2text.innerHTML="loser";
   }
   else if(p1<p2){
      p2text.innerHTML="winner🚩";
      p1text.innerHTML="loser";
   }
   else{
      p1text.innerHTML="winner🚩";
      p2text.innerHTML="winner🚩";
   }
   let lplink = link[p1];
   let lplink2 = link[p2];
   player1.setAttribute("src", lplink);
   player2.setAttribute("src", lplink2); 

 })



