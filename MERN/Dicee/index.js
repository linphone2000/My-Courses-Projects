let randomInteger1 = Math.floor(Math.random()*6)+1;
let randomInteger2 = Math.floor(Math.random()*6)+1;
  
  
document.querySelector(".img1").src = "images/dice"+randomInteger1+".png"
document.querySelector(".img2").src = "images/dice"+randomInteger2+".png"

if (randomInteger1>randomInteger2){
  document.querySelector("h1").innerHTML = "🚩Player 1 Wins"
}
else if (randomInteger2>randomInteger1){
  document.querySelector("h1").innerHTML = "Player 2 Wins🚩"
}
else{
  document.querySelector("h1").innerHTML = "Draw"
}